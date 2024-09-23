/**
 * common shared function here
 */

// function getInputFieldValueById (){
//    console.log('wills= get ')
//    const addMoney = document.getElementById('input-add-money').value;
//    return addMoney;
// }

function getInputFieldValueById (id){
   const inputValue = document.getElementById(id).value;
   return inputValue;
}