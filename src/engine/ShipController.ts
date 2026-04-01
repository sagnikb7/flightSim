import * as THREE from 'three';
import { CONFIG } from './constants';
import { Upgrades } from './PersistenceService';
import { ShipModel } from './ShipModel';

export class ShipController {
  public group: THREE.Group;
  public currentSpeed: number = CONFIG.speed.cruise;
  private shipModel: ShipModel;
  private keys: Record<string, boolean> = {};

  // Motion tracking for effects
  private lastSpeed: number = CONFIG.speed.cruise;
  private lastPitch: number = 0;
  public motionIntensity: number = 0;
  public isThrusting = false;

  // Angular velocities for momentum-based flight (rotation per frame)
  private angularVelocity = {
    pitch: 0,
    roll: 0,
    yaw: 0
  };

  constructor(upgrades: Upgrades) {
    this.shipModel = new ShipModel(upgrades.skin, upgrades.accentColor);
    this.group = this.shipModel.group;
    this.setupInputs();
  }

  private setupInputs() {
    window.addEventListener('keydown', (e) => this.keys[e.key] = true);
    window.addEventListener('keyup', (e) => this.keys[e.key] = false);
  }

  public update(dtScale: number = 1) {
    const { speed, shipControls, shipGlow, gravity } = CONFIG;

    // Pitch: W (pull up) = -1, S (push down) = 1
    const pIn = (this.keys.w || this.keys.ArrowUp) ? -1 : (this.keys.s || this.keys.ArrowDown) ? 1 : 0;

    // Roll: A (roll left) = -1, D (roll right) = 1
    const rIn = (this.keys.a || this.keys.ArrowLeft) ? -1 : (this.keys.d || this.keys.ArrowRight) ? 1 : 0;
    // Rudder (Yaw): Q (yaw left) = 1, E (yaw right) = -1
    const yIn = (this.keys.q) ? 1 : (this.keys.e) ? -1 : 0;

    // Thruster Glow — idle pulse keeps engine visibly "running", W boosts to full.
    // Yaw input dims one thruster and brightens the opposite (differential thrust).
    const isThrusting = !!(this.keys.w || this.keys.ArrowUp);
    this.isThrusting = isThrusting;
    const idleGlow = shipGlow.idleBase + Math.sin(Date.now() * shipGlow.idleFrequency) * shipGlow.idleAmplitude;
    const baseGlow  = isThrusting ? shipGlow.thrustTarget : idleGlow;
    const lerpRate  = isThrusting ? shipGlow.thrustLerp : shipGlow.fadeLerp;

    // yIn > 0 (Q = yaw left)  → right thruster brightens, left dims
    // yIn < 0 (E = yaw right) → left thruster brightens, right dims
    const leftTarget  = THREE.MathUtils.clamp(baseGlow + yIn * shipGlow.yawGlowDelta, 0, shipGlow.thrustTarget);
    const rightTarget = THREE.MathUtils.clamp(baseGlow - yIn * shipGlow.yawGlowDelta, 0, shipGlow.thrustTarget);

    this.shipModel.setThrusterGlow(
      THREE.MathUtils.lerp(this.shipModel.glowMaterialLeft.emissiveIntensity,  leftTarget,  lerpRate),
      THREE.MathUtils.lerp(this.shipModel.glowMaterialRight.emissiveIntensity, rightTarget, lerpRate),
    );

    // Speed Logic
    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(this.group.quaternion);
    const isClimbing = forward.y > 0.1;
    const isDiving = forward.y < -0.1;

    // "W" also adds thrust
    const throttle = (this.keys.w || this.keys.ArrowUp) ? speed.accelRate * speed.throttleMultiplier : 0;

    if (isDiving) {
        this.currentSpeed += (speed.accelRate + (Math.abs(forward.y) * speed.gravityImpact)) * dtScale;
    } else if (isClimbing) {
        this.currentSpeed -= ((speed.decelRate + (forward.y * speed.gravityImpact)) - throttle) * dtScale;
    } else {
        // Friction / drag towards cruise speed
        this.currentSpeed += (speed.cruise - this.currentSpeed) * speed.drag * dtScale;
        this.currentSpeed += throttle * dtScale;
    }

    this.currentSpeed = THREE.MathUtils.clamp(this.currentSpeed, speed.min, speed.max);

    // Agility Logic: Harder to turn at extreme high speeds
    const speedFactor = 1.0 - THREE.MathUtils.smoothstep(this.currentSpeed, speed.cruise, speed.max) * shipControls.agilityReduction;

    // Control authority - how much torque each input applies
    const pitchTorque = shipControls.pitchTorque * speedFactor;
    const rollTorque = shipControls.rollTorque * speedFactor;
    const yawTorque = shipControls.yawTorque * speedFactor;
    const bankingYawInfluence = shipControls.bankingYaw * speedFactor;

    // Natural nose dip
    const noseDipTorque = shipControls.noseDip * speedFactor;

    // Apply control inputs as torque → accelerate angular velocities
    this.angularVelocity.pitch += (pIn * pitchTorque + noseDipTorque) * dtScale;
    this.angularVelocity.roll += rIn * rollTorque * dtScale;

    // Yaw from rudder input + induced yaw from banking
    const inducedYaw = this.angularVelocity.roll * bankingYawInfluence;
    this.angularVelocity.yaw += (yIn * yawTorque + inducedYaw) * dtScale;

    // Apply damping - air resistance slows rotations
    this.angularVelocity.pitch *= shipControls.damping;
    this.angularVelocity.roll *= shipControls.damping;
    this.angularVelocity.yaw *= shipControls.damping;

    // Apply angular velocities to actual ship rotation
    this.group.rotateX(this.angularVelocity.pitch * dtScale);
    this.group.rotateZ(this.angularVelocity.roll * dtScale);
    this.group.rotateY(this.angularVelocity.yaw * dtScale);

    // Constant forward movement in local forward direction
    this.group.position.add(forward.multiplyScalar(this.currentSpeed * shipControls.forwardScale * dtScale));

    // Reduced gravity for better flight feel
    this.group.position.y -= gravity * shipControls.gravityScale * dtScale;

    // Track motion changes for visual effects
    const speedDelta = this.currentSpeed - this.lastSpeed;
    const pitchDelta = Math.abs(pIn - this.lastPitch);
    this.lastSpeed = this.currentSpeed;
    this.lastPitch = pIn;

    // Calculate motion intensity (0-1) based on speed changes and pitch maneuvers
    const speedChangeIntensity = Math.abs(speedDelta) / CONFIG.motion.speedChangeDivisor;
    const pitchIntensity = pitchDelta * CONFIG.motion.pitchMultiplier;
    const highSpeedFactor = THREE.MathUtils.clamp((this.currentSpeed - speed.cruise) / (speed.max - speed.cruise), 0, 1);

    // Combine factors - rapid maneuvers at high speed = max intensity
    this.motionIntensity = THREE.MathUtils.clamp(
      speedChangeIntensity + pitchIntensity + (highSpeedFactor * CONFIG.motion.highSpeedContribution),
      0,
      1
    );
  }
}
