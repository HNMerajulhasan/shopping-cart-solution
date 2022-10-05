function getTextElementValueById(elementId){
    const phoneTotalElement=document.getElementById(elementId);
    const currentPhoneTotalString=phoneTotalElement.innerText;
    const currentPhoneTotal=parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId, value){
    const subTotalElement=document.getElementById(elementId);
    subTotalElement.innerText=value;
}
function calculateSubtotal(){
    //calculate Total
    const currentPhoneTotal=getTextElementValueById('phone-total');
    const currentCaseTotal=getTextElementValueById('case-total');

    const currentSubtotal=currentPhoneTotal+currentCaseTotal;
    setTextElementValueById('sub-total',currentSubtotal);
    //calculate Tax
    const taxAmount=currentSubtotal*0.1;
    setTextElementValueById('tax-amount',taxAmount);
    //calculate final Amount
    const finalAmount=currentSubtotal+taxAmount;
    setTextElementValueById('final-total',finalAmount);
    //const subTotalElement=document.getElementById('sub-total');
    //subTotalElement.innerText=currentSubtotal;
}