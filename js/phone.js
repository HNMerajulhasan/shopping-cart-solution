// //increase
// document.getElementById('btn-phone-plus').addEventListener('click',function(){
//    const phoneNumberField=document.getElementById('phone-number-field');
//    const previousphoneNumberFieldString=phoneNumberField.value;
//    const previousphoneNumberField=parseInt(previousphoneNumberFieldString);

//    //update
//    const newPhoneNumberField=previousphoneNumberField+1;
//    phoneNumberField.value=newPhoneNumberField;

// })

// //increase
// document.getElementById('btn-phone-minus').addEventListener('click',function(){
//     const phoneNumberField=document.getElementById('phone-number-field');
//     const previousphoneNumberFieldString=phoneNumberField.value;
//     const previousphoneNumberField=parseInt(previousphoneNumberFieldString);

//    //update
//    const newPhoneNumberField=previousphoneNumberField-1;
//    phoneNumberField.value=newPhoneNumberField;
// })

//>>**If we want to do0 the same thing which has done in above by function then follow the below code segment.
 function updatePhoneNumber(isIncrease){
     const phoneNumberField=document.getElementById('phone-number-field');
     const previousphoneNumberFieldString=phoneNumberField.value;
     const previousphoneNumberField=parseInt(previousphoneNumberFieldString);

     let updatePhoneNumberValue;
     if(isIncrease==true){
         updatePhoneNumberValue=previousphoneNumberField+1;
     }
     else{
         updatePhoneNumberValue=previousphoneNumberField-1;
     }
     phoneNumberField.value=updatePhoneNumberValue;
    return updatePhoneNumberValue;
 }

// document.getElementById('btn-phone-plus').addEventListener('click',function(){
//    const newPhoneNumber= updatePhoneNumber(true);
//    const phoneTotalPrice=newPhoneNumber * 1219;
//    const phoneTotalElement=document.getElementById('phone-total');
//    phoneTotalElement.innerText=phoneTotalPrice;
// })
// document.getElementById('btn-phone-minus').addEventListener('click',function(){
//     const newPhoneNumber= updatePhoneNumber(false);
//     const phoneTotalPrice=newPhoneNumber * 1219;
//    const phoneTotalElement=document.getElementById('phone-total');
//    phoneTotalElement.innerText=phoneTotalPrice;

// })

//>>**If we want to do the same thing which has done in above by function then follow the below code segment.
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice=newPhoneNumber * 1219;
   const phoneTotalElement=document.getElementById('phone-total');
   phoneTotalElement.innerText=phoneTotalPrice;
}
//calculate Total
function getTextElementValueById(elementId){
    const phoneTotalElement=document.getElementById(elementId);
    const currentPhoneTotalString=phoneTotalElement.innerText;
    const currentPhoneTotal=parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function calculateSubtotal(){
    //calculate Total
    const currentPhoneTotal=getTextElementValueById('phone-total');
    const currentCaseTotal=getTextElementValueById('case-total');

    const currentSubtotal=currentPhoneTotal+currentCaseTotal;
    const subTotalElement=document.getElementById('sub-total');
    subTotalElement.innerText=currentSubtotal;
}
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNumber= updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubtotal();
});
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber= updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubtotal();
});