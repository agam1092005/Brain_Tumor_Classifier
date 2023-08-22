fetch('http://127.0.0.1:8000/ping', {
})
.then(response => {
  console.log(response);
  document.getElementById('server').innerHTML = "PREDICTION MODEL SERVER IS ON";
  document.getElementById('server').style.color = "green";
})
.catch(e=>{
  console.log(e);
  document.getElementById('server').innerHTML = "PREDICTION MODEL SERVER IS OFF";
  document.getElementById('server').style.color = "red";
  document.getElementById("fileInput").disabled = true;
  document.getElementById("submitButton").disabled = true;
  });

const uploader = document.getElementById('uploader');
const fileInput = document.getElementById('fileInput');
const submitButton = document.getElementById('submitButton');
var imageBlock = document.getElementById('displayImage');
var classBlock = document.getElementById('classDetails');
var confidenseBlock = document.getElementById('confidenseBlock');
var DetailBlock = document.getElementById('Details');
var cautionBlock = document.getElementById('cautionBlock');

fileInput.addEventListener('change', handleFileSelect);

function showImage(file) {
  classBlock.innerHTML = '';
  confidenseBlock.innerHTML = '';
  DetailBlock.innerHTML = '';
  cautionBlock.innerHTML = '';
  imageBlock.src = URL.createObjectURL(file);
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


function uploadFile(file) {
  const formData = new FormData();
  formData.set('file', file);

  fetch('http://127.0.0.1:8000/predict', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    detail = '';
    Pred = '';
    if (String(data['class']) == 'glioma') {
      detail = 'Gliomas are cancerous brain tumours that start in glial cells. These are the supporting cells of the brain and the spinal cord. This type of tumour grows and spreads rapidly, often creating pressure.';
      Pred = 'Glioma detected';
    }
    else if (String(data['class']) == 'meningioma') {
      detail = 'Meningiomas are one of the most common forms of brain tumors, accounting for roughly 20% of brain tumors. They commonly form in areas populated with heavy amounts of arachnoid villi (located in the second layer which covers the brain).';
      Pred = 'Meningioma detected';
    }
    else if (String(data['class']) == 'pituitary') {
      detail = 'Pituitary tumors are unusual growths that develop in the pituitary gland. This gland is an organ about the size of a pea. It\'s located behind the nose at the base of the brain. Some of these tumors cause the pituitary gland to make too much of certain hormones that control important body functions.';
      Pred = 'Pituitary Tumor detected'; 
    }
    else {
      detail = 'This prediction model is for project. In rare cases, it can be wrong.';
      Pred = 'No Tumor detected';
    }
    
    confi = '';
    if ((data['confidence'] * 100) > 75) {
      confi = 'HighConfidence';
    }
    else if (50 < (data['confidence'] * 100) < 75) {
      confi = 'MediumConfidence';
    }
    else {
      confi = 'LowConfidence';
    }

    classBlock.innerHTML = Pred;
    DetailBlock.innerHTML = detail;
    cautionBlock.innerHTML = 'CAUTION - Although this prediction model is overall ~ 98% accurate, we would still recommened you to go to your doctor for confirmation if you believe to have any symptoms of brain tumor.';
    confidenseBlock.innerHTML = (data['confidence'] * 100 + '%');
    confidenseBlock.classList.add(confi);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
