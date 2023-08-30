import { game } from "voxel-engine";

const settings = {
  generate: (x, y, z) => {
    return y === 1 ? 1 : 0;
  },
  texturePath: "./path/to/your/texture/",
};

const voxelGame = game(settings);

// create the texture
const texture = new Image();
texture.src = "./path/to/your/texture/";
texture.onload = () => {
  voxelGame.materials.load([["grass", texture]]);
};

// set the camera
const createCamera = require("voxel-camera");
const camera = createCamera(voxelGame);
camera.zoom(4);

// start the game loop
const mainLoop = require("main-loop");
const loop = mainLoop(
  {},
  (state) => {
    voxelGame.frame();
  },
  {
    create: document.querySelector("body"),
  }
);
