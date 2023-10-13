import * as BABYLON from "babylonjs";

// Get the canvas element
const canvas = document.getElementById("renderCanvas");

// Generate the Babylon 3D engine
const engine = new BABYLON.Engine(canvas, true);

// Create a basic scene
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4(1, 1, 1, 1); // white background

// Create and position a free camera
const camera = new BABYLON.FreeCamera(
  "camera1",
  new BABYLON.Vector3(0, 5, -10),
  scene
);
camera.setTarget(BABYLON.Vector3.Zero());

// Attach the camera to the canvas
camera.attachControl(canvas, false);

// Create a hemispheric light
const light = new BABYLON.HemisphericLight(
  "light1",
  new BABYLON.Vector3(0, 1, 0),
  scene
);

// Create a box (MeshBuilder method)
const box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);

// Create material for the box
const boxMaterial = new BABYLON.StandardMaterial("boxMaterial", scene);
boxMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0); // green
box.material = boxMaterial;

// Run the render loop
engine.runRenderLoop(() => {
  scene.render();
});

// Resize the engine when the window is resized
window.addEventListener("resize", () => {
  engine.resize();
});
