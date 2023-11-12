# Brain Tumor Classifier - ML PROJECT

Building a machine learning model. Using CNN (Convolutional Neural Network) model, we can predict weather a person has tumor (3 types) or not by submitting a image of CT-Scan or MRI.

## About Brain Tumor

![brain-tumour-treatment-in-delhi-ncr](https://github.com/agam1092005/Brain_Tumor_Classifier/assets/70815441/e9ee5d92-3a0a-4e18-8f85-d7524a97623e)

A brain tumor is an abnormal growth or mass of cells in or around your brain. Together, spinal tumors and brain tumors are called central nervous system (CNS) tumors.
Brain tumors can be malignant (cancerous) or benign (noncancerous). Some tumors grow quickly, while others are slow growing.
Only about one-third of brain tumors are cancerous. But whether they’re cancerous or not, brain tumors can impact brain function and your health if they grow large enough to press on surrounding nerves, blood vessels and tissue.

### Facts and Figures
Only about 5% to 10% of people with brain tumors have a family history of a brain tumor.
A primary brain or spinal cord tumor is a tumor that starts in the brain or spinal cord. In 2023, an estimated 24,810 adults (14,280 men and 10,530 women) in the United States will be diagnosed with primary cancerous tumors of the brain and spinal cord. A person’s likelihood of developing this type of tumor in their lifetime is less than 1%. Brain tumors account for 85% to 90% of all primary central nervous system (CNS) tumors. Worldwide, an estimated 308,102 people were diagnosed with a primary brain or spinal cord tumor in 2020.
It is estimated that 5,230 children under the age of 20 will also be diagnosed with a CNS tumor in the United States in 2023. The rest of this guide deals with primary brain tumors in adults.
Brain and other nervous system cancer is the 10th leading cause of death for men and women. It is estimated that 18,990 deaths (11,020 men and 7,970 women) from primary cancerous brain and CNS tumors will occur in the United States in 2023. In 2020, an estimated 251,329 people worldwide died from primary cancerous brain and CNS tumors.

The 5-year relative survival rate for a cancerous brain or CNS tumor is almost 36%. The 10-year survival rate is over 30%.
The 5-year relative survival rate for people younger than age 15 is about 75%. For people age 15 to 39, the 5-year relative survival rate nears 72%. The 5-year relative survival rate for people age 40 and older is 21%.

### Major Symptoms:-
* Headaches that may be more severe in the morning or wake you up at night.
*  Seizures.
*  Difficulty thinking, speaking or understanding language.
*  Personality changes.
*  Weakness or paralysis in one part or one side of your body.
*  Balance problems or dizziness.
*  Vision issues.
*  Hearing issues.
*  Facial numbness or tingling.
*  Nausea or vomiting.
*  Confusion and disorientation.

## Dataset:
https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset

## Data Split
* 80% Training data
* 10% Validation data
* 10% Test data

## Dependencies:
1. Tensorflow
2. Keras
3. pandas
4. numpy
5. matplotlib
6. seaborn

## Tools:
Jupyter notebook

## How to run
1. Go to https://agam1092005.github.io/Brain_Tumor_Classifier/
2. Check if server is on
3. Upload CT-Scan/MRI (you can get sample images from testing folder)
4. Click predict

## Evaluation (At 25 EPOCHS)
* Model Accuracy - 96.18611931800842 %
* Model Loss - 23.621788620948792 %

## Visuals:
### To see all visuals, go to visuals folder

Accuracy and Loss graph
![graph](https://github.com/agam1092005/Brain_Tumor_Classifier/assets/70815441/0c2a2dec-f289-4684-9493-02db53d4bb5e)

Sample Predictions
![sample_predictions](https://github.com/agam1092005/Brain_Tumor_Classifier/assets/70815441/b72ced4c-ef64-4d40-8fb9-363fc50b8126)

Real Prediction (DEMO)
<img width="1470" alt="prediction" src="https://github.com/agam1092005/Brain_Tumor_Classifier/assets/70815441/192a900c-309a-499e-9e9b-bd6251630aca">

Layers Heatmap
![layer_heatmap](https://github.com/agam1092005/Brain_Tumor_Classifier/assets/70815441/10ddab9a-018d-4b07-990f-78220c3a550a)
