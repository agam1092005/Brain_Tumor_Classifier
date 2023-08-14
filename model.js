import * as tf from '@tensorflow/tfjs';

async function loadModel() {
  const model = await tf.loadLayersModel('/model.json');

  console.log(model);
}

loadModel();