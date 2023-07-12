'user strict';
//element

const balance=document.querySelector('#balance');
const inc_amt =document.querySelector('#inc-amt');
const exp_amt=document.querySelector('#exp-amt');
const form=document.querySelector('#form');
const description=document.querySelector('#desc');
const trans=document.querySelector('#trans');
const amount=document.querySelector('#amount');

//dummy description
const dummyData=[
  {id:1,description:'salary',amount:35000},
  {id:2,description:'food',amount:-350},
  {id:3,description:'moves',amount:-500},
  {id:4,description:'rent',amount:-5000},
  {id:5,description:'phone',amount:-250},
];

//transaction to dummy data array connected
let transactions = dummyData;

//function 
function loadTransactionDetails(transaction){
  //amount values (-),(+)
const sign=transaction.amount < 0 ? '-':'+';
// object list 
const item=document.createElement('li');
// value exp < 0 lis \\ 0> inc values 
item.classList.add(transaction.amount < 0 ? "exp" : "inc");
//description element
item.innerHTML=`${transaction.description
}

<span>${sign}${Math.abs(transaction.amount)}</span>

<button class="btn-del"onclick="removeTrans(${transaction.id})">X</button>`;

// trans children 
trans.appendChild(item);

};

function removeTrans(id){
if(confirm('are you sure you want to delete transaction')){
  transactions = transactions.filter((transaction) => transaction.id !=id);
console.log('holo')
config();
}else{ 

  return;

}

}

function updateAmount () {
  const amounts = transactions.map((transaction) => transaction.amount);

  //single variable convert
  const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);
  balance.innerHTML = `₹ ${total}`;
  //income and expense values 
const income = amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0);
inc_amt.innerHTML=`₹ ${income}`;

const expense = amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0);
exp_amt.innerHTML=`₹ ${(expense)}`;
}


//function
function config(){
  //all html description remove method
  trans.innerHTML= " ";
  // convert the forEach load method all details  
  transactions.forEach(loadTransactionDetails);
  updateAmount();
}
function addTransaction (e){
e.preventDefault();
if(description.value.trim()== ""|| amount.value.trim() == ""){
alert("please Enter Description and amount")
}else{
const transaction = {
  id: 25121,
  description:description.value,
  amount: +amount.value,

};
transactions.push(transaction);
loadTransactionDetails(transaction);
description.value = '';
amount.value = '';
updateAmount();

}

}

form.addEventListener('submit',addTransaction);





//eventListener
window.addEventListener('load', function () {
  console.log('hollo')
  config();

});
