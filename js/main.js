// js/main.js
import * as THREE from 'three';
import { initScene } from './initScene.js';
import { addLighting } from './addLighting.js';
import { createProduct } from './createProduct.js';
import { initInteraction } from './interaction.js';

let scene, camera, renderer, controls;
let product;
const clock = new THREE.Clock();

function init() {
    const sceneComponents = initScene();
    scene = sceneComponents.scene;
    camera = sceneComponents.camera;
    renderer = sceneComponents.renderer;
    controls = sceneComponents.controls;

    addLighting(scene);
    product = createProduct(scene);

    const initialFocusDistance = 4;
    camera.position.set(initialFocusDistance, controls.target.y + 1.0, initialFocusDistance * 0.5);
    controls.target.set(0, 0.5, 0);
    camera.lookAt(controls.target);

    initInteraction(camera, scene, product, renderer.domElement);
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    const deltaTime = clock.getDelta();

    controls.update();
    renderer.render(scene, camera);
}

init();
