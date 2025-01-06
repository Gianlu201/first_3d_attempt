import { createCamera } from './components/camera3.js';
import { createCube } from './components/cube3.js';
import { createLights } from './components/lights3.js';
import { createScene } from './components/scene3.js';

import { createRenderer } from './systems/renderer3.js';
import { Resizer } from './systems/Resizer3.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    const light = createLights();

    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
