
const uploader = document.getElementById('uploader');
const fileInput = document.getElementById('fileInput');
const cameraButton = document.getElementById('cameraButton');
const submitButton = document.getElementById('submitButton');


fileInput.addEventListener('change', handleFileSelect);

if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
  cameraButton.removeAttribute('disabled');
  cameraButton.addEventListener('click', captureFromCamera);
}

function showImage(file) {
  const imageBlock = document.createElement("img");
  imageBlock.classList.add("displayImage");
  imageBlock.src = URL.createObjectURL(file);
  document.getElementsByTagName("body")[0].appendChild(imageBlock);
}


function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    showImage(file);
  }

  if(file && submitButton.addEventListener("click", function() {
    uploadFile(file);
  }));
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
  const formData = new FormData();
  formData.append('file', file);

  fetch('http://127.0.0.1:8000/predict', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  var detailsBlock = document.createElement("div");
  detailsBlock.innerHTML = formData;
  detailsBlock.classList.add("displayDetails");
  document.getElementsByTagName("body")[0].appendChild(detailsBlock);

}

function uploadCapturedImage(imageData) {
  // Here, you can implement the code to upload the captured image data to your server.
  // You might want to use XMLHttpRequest or fetch to perform the actual upload.
  // This is a simplified example.
  console.log('Uploading captured image:', imageData);
}
