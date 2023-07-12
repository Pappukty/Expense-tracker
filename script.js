'user strict';

//Element
const container=document.getElementById('container');
const incExpContainerEl=document.getElementById('inc-exp-container');
const amountEl=document.getElementById('amount');
console.log(amountEl)
const listEl=document.getElementById('list');
const minusEl=document.getElementById('minus');
const plusEl=document.getElementById('plus');
const formEl=document.getElementById('form');
const TransactionEl=document.getElementById('Transaction');

//gopalvaribles

//function
function init(){
listEl.innerHTMl= null;
}

//EventListener 

formEl.addEventListener('click',function(e){
  e.preventDefault.value;
  const Transaction=TransactionEl.value;
  if 
    (TransactionEl.value()===''|| amountEl.value()===''){

  

    }else{
      const Transaction={
        name:TransactionEl.value,
        amountEl:amountEl.value,

      }
      
console.log(TransactionEl.value);
}  

});

//intel
init();