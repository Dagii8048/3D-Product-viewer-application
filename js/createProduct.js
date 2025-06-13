// js/createProduct.js
import * as THREE from 'three';

export function createProduct(scene) {
    const productGroup = new THREE.Group();
    productGroup.name = "complete product";

    const tabletopMaterial = new THREE.MeshStandardMaterial({
        color: 0x8B4513,
        metalness: 0.3,
        roughness: 0.8
    });
    const legMaterial = new THREE.MeshStandardMaterial({
        color: 0xA0522D,
        metalness: 0.2,
        roughness: 0.9
    });

    const tabletopGeometry = new THREE.BoxGeometry(2, 0.2, 1);
    const tabletop = new THREE.Mesh(tabletopGeometry, tabletopMaterial);
    tabletop.name = "Tabletop";
    tabletop.position.y = 0.5 + 0.1;
    productGroup.add(tabletop);

    const legRadius = 0.1;
    const legHeight = 1.0;
    const legGeometry = new THREE.CylinderGeometry(legRadius, legRadius, legHeight, 16);

    const legPositions = [
        { x: 0.8, z: 0.35 },
        { x: -0.8, z: 0.35 },
        { x: 0.8, z: -0.35 },
        { x: -0.8, z: -0.35 }
    ];

    legPositions.forEach((pos, index) => {
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        leg.name = `Leg ${index + 1}`;
        leg.position.set(pos.x, 0, pos.z);
        productGroup.add(leg);
    });

    scene.add(productGroup);
    return productGroup;
}
