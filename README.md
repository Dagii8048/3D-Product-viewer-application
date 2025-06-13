# 🪑 3D Product Viewer with Three.js

A responsive, interactive 3D product viewer built using [Three.js](https://threejs.org/). This app renders a fully lit and interactable 3D product (like a chair) composed of basic meshes, with smooth camera motion and intuitive controls.

## 🚀 Features

### 🎬 Scene Setup
- **Three.js Scene Initialization**: Integrated `PerspectiveCamera`, `WebGLRenderer`, and canvas in HTML.
- **Responsive Layout**: Adapts to window resizing.
- **Orbit Controls**: Zoom and pan enabled (auto-rotation optional).

### 🧱 3D Product Creation
- **Modular Mesh Composition**: Product assembled from multiple `THREE.Mesh` objects (e.g., boxes, cylinders).
- **Realistic Materials**: `MeshStandardMaterial` or `MeshPhysicalMaterial` used for lighting interactions.
- **Centered Scene**: Product positioned at `(0, 0, 0)` for optimal orbiting and camera focus.

### 💡 Lighting
- **Ambient Light**: Base lighting for general scene illumination.
- **Directional / Spot Lighting**: Highlights and shadows for added realism.
- **Balanced Placement**: Lights placed for visual harmony.

### 🖱️ Mouse Interaction
- **Raycasting**: Click detection on product parts.
- **Interactive Feedback**: On click:
  - Brief color or scale change.
  - Panel display showing the part name (e.g., "Chair Leg").
- **Highlight Effects**: Hover and click visual cues.

### 🎥 Camera Animation
- **Automatic Orbiting**: Smooth Y-axis camera rotation around the product.
- **User Override**: Mouse interaction disables auto-rotate temporarily.
- **Consistent Motion**: Based on elapsed time for fluid experience.

### 🔁 Animation Loop
- **Render Loop**: Powered by `requestAnimationFrame`.
- **Optional Mesh Animations**: Floating or pulsing effects to bring the product to life.

### 🧩 Code Structure
Organized and modular architecture:
📁 src/
├── initScene.js # Scene initialization and renderer setup
├── createProduct.js # Product mesh creation
├── addLighting.js # Lighting setup
├── interaction.js # Mouse and raycasting logic
├── cameraAnimation.js # Auto camera orbiting logic

Assets (scripts, styles, textures) are logically structured into respective folders for maintainability.

---

## 🛠️ Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/3d-product-viewer.git
   cd 3d-product-viewer

2. Open an IDE like VScode or Webstorms and then run the index.html file or live preview(in VScode)
