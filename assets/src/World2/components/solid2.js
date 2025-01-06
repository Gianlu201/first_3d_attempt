import { BoxGeometry, CapsuleGeometry, Mesh, MeshBasicMaterial } from 'three';

function createSolid(shape) {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);
  const capsuleGeometry = new CapsuleGeometry(1, 1, 4, 8);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial({ color: 0x00ff00 });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  const capsule = new Mesh(capsuleGeometry, material);

  switch (shape) {
    case 'cube':
      return cube;
      break;
    case 'capsule':
      return capsule;
      break;
  }
}

export { createSolid };
