import { createCamera } from './components/camera2.js';
import { createSolid } from './components/solid2.js';
import { createScene } from './components/scene2.js';

import { createRenderer } from './systems/renderer2.js';
import { Resizer } from './systems/Resizer2.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createSolid('cube');
    const capsule = createSolid('capsule');

    scene.add(cube);

    scene.add(capsule);
    capsule.position.set(4, 0, 0);

    const resizer = new Resizer(container, camera, renderer);
  }

  // 2. Render the scene
  render() {
    renderer.render(scene, camera);
  }
}

export { World };
