
const uploader = document.getElementById('uploader');
const fileInput = document.getElementById('fileInput');
const cameraButton = document.getElementById('cameraButton');

fileInput.addEventListener('change', handleFileSelect);

if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
  cameraButton.removeAttribute('disabled');
  cameraButton.addEventListener('click', captureFromCamera);
}

function handleFileSelect(event) {
  const file = event.target.files[0];
  console.log(file);
  if (file) {
    uploadFile(file);
  }
}


function captureFromCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      const video = document.createElement('video');
      video.srcObject = stream;
      video.autoplay = true;
      video.addEventListener('click', () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const capturedImage = canvas.toDataURL('image/jpeg');
        uploadCapturedImage(capturedImage);
        video.srcObject.getTracks().forEach(track => track.stop());
      });
      uploader.innerHTML = '';
      uploader.appendChild(video);
    })
    .catch(error => {
      console.error('Error accessing camera:', error);
    });
}

function uploadFile(file) {
  // Here, you can implement the code to upload the selected file to your server.
  // You might want to use XMLHttpRequest or fetch to perform the actual upload.
  // This is a simplified example.
  console.log('Uploading file:', file);
}

function uploadCapturedImage(imageData) {
  // Here, you can implement the code to upload the captured image data to your server.
  // You might want to use XMLHttpRequest or fetch to perform the actual upload.
  // This is a simplified example.
  console.log('Uploading captured image:', imageData);
}
