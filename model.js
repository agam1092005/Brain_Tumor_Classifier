async function loadModel() {
  const model = await tf.loadLayersModel('https://drive.google.com/file/d/1JYtPgYMUZsG192TYBeRHtvCOdVrmK1ey/view');

  console.log(model);
}

loadModel();
