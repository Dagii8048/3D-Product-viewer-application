import * as THREE from 'three';

let autoRotationEnabled = false;
let accumulatedTime = 0;

export function setAutoRotation(enabled) {
    autoRotationEnabled = enabled;
}

export function isAutoRotationEnabled() {
    return autoRotationEnabled;
}

export function animateCameraOrbit(camera, targetPosition, radius, speed, deltaTime) {
    if (!autoRotationEnabled) return;

    accumulatedTime += deltaTime;
    const angle = accumulatedTime * speed;

    camera.position.x = targetPosition.x + radius * Math.sin(angle);
    camera.position.z = targetPosition.z + radius * Math.cos(angle);
    camera.lookAt(targetPosition);
}
