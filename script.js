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
const descTable = document.getElementById('descTable');
const scrollSym = document.getElementById('scroll');
var symp1 = document.getElementById('sym1');
var symp2 = document.getElementById('sym2');
var symp3 = document.getElementById('sym3');
var symp4 = document.getElementById('sym4');
var causes1 = document.getElementById('cause1');
var causes2 = document.getElementById('cause2');
var causes3 = document.getElementById('cause3');
var causes4 = document.getElementById('cause4');
var treats1 = document.getElementById('treat1');
var treats2 = document.getElementById('treat2');
var treats3 = document.getElementById('treat3');
var treats4 = document.getElementById('treat4');
var imageBlock = document.getElementById('displayImage');
var detectionBlock = document.getElementById('detection');
var classBlock = document.getElementById('classDetails');
var confidenseBlock = document.getElementById('confidenseBlock');
var DetailBlock = document.getElementById('Details');
var cautionBlock = document.getElementById('cautionBlock');

fileInput.addEventListener('change', handleFileSelect);

function showImage(file) {
  classBlock.innerHTML = '';
  confidenseBlock.innerHTML = '';
  detectionBlock.innerHTML = '';
  DetailBlock.innerHTML = '';
  cautionBlock.innerHTML = '';
  scrollSym.innerHTML = '';
  descTable.style.display = 'none';
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
    detect = '';
    sym1 = '';
    sym2 = '';
    sym3 = '';
    sym4 = '';
    cause1 = '';
    cause2 = '';
    cause3 = '';
    cause4 = '';
    treat1 = '';
    treat2 = '';
    treat3 = '';
    treat4 = '';

    if (String(data['class']) == 'glioma') {
      detail = 'Gliomas are cancerous brain tumours that start in glial cells. These are the supporting cells of the brain and the spinal cord. This type of tumour grows and spreads rapidly, often creating pressure.';
      Pred = 'Glioma';
      detect = 'Brain Tumor Dectected';
      sym1 = 'Headaches';
      sym2 = 'Seizures';
      sym3 = 'Nausea and vomiting';
      sym4 = 'Cognitive impairment';
      cause1 = 'Genetic factors';
      cause2 = 'Exposure to radiation';
      cause3 = 'Environmental factors';
      cause4 = '';
      treat1 = 'Surgery';
      treat2 = 'Chemotherapy';
      treat3 = 'Radiation therapy';
      treat4 = 'Palliative care';
      descTable.style.display = 'table';
      scrollSym.innerHTML = 'SCROLL DOWN FOR MORE DETAILS ⬇';
    }
    else if (String(data['class']) == 'meningioma') {
      detail = 'Meningiomas are one of the most common forms of brain tumors, accounting for roughly 20% of brain tumors. They commonly form in areas populated with heavy amounts of arachnoid villi (located in the second layer which covers the brain).';
      Pred = 'Meningioma';
      detect = 'Brain Tumor Dectected';
      sym1 = 'Headaches';
      sym2 = 'Seizures';
      sym3 = 'Vision problems';
      sym4 = 'Weakness or numbness';
      cause1 = 'Genetic predisposition';
      cause2 = 'Hormonal influences';
      cause3 = 'Previous head injury';
      cause4 = '';
      treat1 = 'Surgery';
      treat2 = 'Radiation therapy';
      treat3 = 'Watchful waiting, observation in some cases';
      treat4 = 'Medications for symptoms';
      descTable.style.display = 'table';
      scrollSym.innerHTML = 'SCROLL DOWN FOR MORE DETAILS ⬇';
    }
    else if (String(data['class']) == 'pituitary') {
      detail = 'Pituitary tumors are unusual growths that develop in the pituitary gland. This gland is an organ about the size of a pea. It\'s located behind the nose at the base of the brain. Some of these tumors cause the pituitary gland to make too much of certain hormones that control important body functions.';
      Pred = 'Pituitary';
      detect = 'Brain Tumor Dectected';
      sym1 = 'Headaches';
      sym2 = 'Vision loss';
      sym3 = 'Hormone imbalances';
      sym4 = 'Fatigue';
      cause1 = 'Genetic factors';
      cause2 = 'Radiation exposure';
      cause3 = 'Multiple endocrine neoplasia';
      cause4 = '';
      treat1 = 'Surgery';
      treat2 = 'Radiation therapy';
      treat3 = 'Medication';
      treat4 = 'Hormone replacement therapy';
      descTable.style.display = 'table';
      scrollSym.innerHTML = 'SCROLL DOWN FOR MORE DETAILS ⬇';
    }
    else {
      detail = 'This prediction model is for project. In rare cases, it can be wrong.';
      Pred = 'Model was unable to detect any tumor';
      detect = 'No Tumor Dectected';
      descTable.style.display = 'none';
      scrollSym.innerHTML = '';
    }
    
    if ((data['confidence'] * 100) > 75) {
      confidenseBlock.style.color = 'green';
    }
    else if ((data['confidence'] * 100) > 50) {
      confidenseBlock.style.color = '#FFD300';
    }
    else {
      confidenseBlock.style.color = 'red';
    }

    classBlock.innerHTML = Pred;
    DetailBlock.innerHTML = detail;
    detectionBlock.innerHTML = detect;
    symp1.innerHTML = sym1;
    symp2.innerHTML = sym2;
    symp3.innerHTML = sym3;
    symp4.innerHTML = sym4;
    causes1.innerHTML = cause1;
    causes2.innerHTML = cause2;
    causes3.innerHTML = cause3;
    causes4.innerHTML = cause4;
    treats1.innerHTML = treat1;
    treats2.innerHTML = treat2;
    treats3.innerHTML = treat3;
    treats4.innerHTML = treat4;
    cautionBlock.innerHTML = 'CAUTION - Although this prediction model is overall ~ 96% accurate, we would still recommened you to go to your doctor for confirmation if you believe to have any symptoms of brain tumor.';
    confidenseBlock.innerHTML = (data['confidence'] * 100 + '%');
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
