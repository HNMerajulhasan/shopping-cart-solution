// document.getElementById('btn-case-plus').addEventListener('click',function(){
 
//   //increase the the number.  
//     const caseNumberField=document.getElementById('case-number-field');

//   //get iniatial value 1 from below line
//   const previouscaseNumberFieldValueString=caseNumberField.value;
//   const previouscaseNumberFieldValue=parseInt(previouscaseNumberFieldValueString);
  
//   //upadate initial value from below line
//   const updateCaseNumberValue=previouscaseNumberFieldValue + 1;
//   caseNumberField.value=updateCaseNumberValue;
  
// //decrase the number


// });
// document.getElementById('btn-case-minus').addEventListener('click',function(){
//  console.log('I will decrease the value by 1');
      
//       const caseNumberField=document.getElementById('case-number-field');
  
     
//     const previouscaseNumberFieldValueString=caseNumberField.value;
//     const previouscaseNumberFieldValue=parseInt(previouscaseNumberFieldValueString);
    
//     //upadate initial value from below line
//       const updateCaseNumberValue=previouscaseNumberFieldValue - 1;
//       caseNumberField.value=updateCaseNumberValue;
    
//   //decrase the number
  
  
//   });


//>>**If we want to do0 the same thing which has done in above by function then follow the below code segment.

function updateCaseNumber(isIncrease){
  
   const caseNumberField=document.getElementById('case-number-field');

   const previouscaseNumberFieldValueString=caseNumberField.value;
   const previouscaseNumberFieldValue=parseInt(previouscaseNumberFieldValueString);
  
   //const updateCaseNumberValue=previouscaseNumberFieldValue + 1;
   //caseNumberField.value=updateCaseNumberValue;
   let updateCaseNumberValue;
   if(isIncrease===true){
    updateCaseNumberValue=previouscaseNumberFieldValue+1;
   }
   else{
    updateCaseNumberValue=previouscaseNumberFieldValue-1;
   }
   caseNumberField.value=updateCaseNumberValue;

   return updateCaseNumberValue;
}

//increase the total amount of value.
// document.getElementById('btn-case-plus').addEventListener('click',function(){
//  const updateCaseNumberValue= updateCaseNumber(true);
//  const caseTotalPrice=updateCaseNumberValue*59;
//  const caseTotalElement=document.getElementById('case-total');
//  caseTotalElement.innerText=caseTotalPrice;
// });
// //decrease the total amount of value.
// document.getElementById('btn-case-minus').addEventListener('click',function(){
//   const newCaseNumber=updateCaseNumber(false);
//   const caseTotalPrice=newCaseNumber*59;
//   const caseTotalElement=document.getElementById('case-total');
//   caseTotalElement.innerText=caseTotalPrice;
// });

//>>**If we want to do the same thing which has done in above by function then follow the below code segment.
function updateCaseTotalPrice(newCaseNumber){
  const caseTotalPrice=newCaseNumber*59;
  const caseTotalElement=document.getElementById('case-total');
  caseTotalElement.innerText=caseTotalPrice;
}
document.getElementById('btn-case-plus').addEventListener('click',function(){
  const newCaseNumber=updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);
  calculateSubtotal();
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
  const newCaseNumber=updateCaseNumber(false);
  updateCaseTotalPrice(newCaseNumber);
  calculateSubtotal();
})