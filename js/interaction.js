import * as THREE from 'three';

let currentlySelectedObject = null;
let originalMaterial = null;
const highlightColor = new THREE.Color(0x66d115);

const infoPanel = document.getElementById('info-panel');

function showInfoPanel(text) {
    infoPanel.textContent = text;
    infoPanel.style.display = 'block';
}

function hideInfoPanel() {
    infoPanel.style.display = 'none';
}

function applyHighlight(object) {
    if (object.material) {
        object.material.color.set(highlightColor);
    }
}

function revertHighlight(object, originalMat) {
    if (object.material && originalMat) {
        object.material.color.copy(originalMat.color);
    }
}

export function initInteraction(camera, scene, productGroup, domElement) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    domElement.addEventListener('click', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(productGroup.children, false);

        if (intersects.length > 0) {
            const firstIntersect = intersects[0].object;

            if (firstIntersect.isMesh && firstIntersect.name) {
                if (currentlySelectedObject !== firstIntersect) {
                    if (currentlySelectedObject) {
                        revertHighlight(currentlySelectedObject, originalMaterial);
                    }

                    currentlySelectedObject = firstIntersect;
                    if (!originalMaterial) originalMaterial = new THREE.MeshStandardMaterial();
                    originalMaterial.color.copy(currentlySelectedObject.material.color);

                    applyHighlight(currentlySelectedObject);
                    showInfoPanel(`Selected: ${currentlySelectedObject.name}`);
                }
                else {
                    revertHighlight(currentlySelectedObject, originalMaterial);
                    currentlySelectedObject = null;
                    originalMaterial = null;
                    hideInfoPanel();
                }
            }
        } else {
            if (currentlySelectedObject) {
                revertHighlight(currentlySelectedObject, originalMaterial);
                currentlySelectedObject = null;
                originalMaterial = null;
            }
            hideInfoPanel();
        }
    }, false);
}
    