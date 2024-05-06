let online = document.querySelector('.online');
let paypal = document.querySelector('.paypal');
let select = document.querySelector('#select');
let r1 = document.getElementById('r1');
let r2 = document.getElementById('r2');
let popUp2 = document.getElementById('popUp2');
let showPopUp2 = document.getElementById('show-popUp2');

showPopUp2.addEventListener('click',()=>{
  popUp2.style.display='flex';
})
r1.addEventListener('input',()=>{
  if(r1.checked){
    online.style.display='none';
  }
})

r2.addEventListener('input',()=>{
  if(r2.checked){
    online.style.display='flex';
  }
})
select.addEventListener('input',()=>{
  if(select.value === 'visa' || select.value === 'mastercard'){
    popUp2.style.display='flex';
    showPopUp2.style.display='flex';
    paypal.style.display='none';
  }else{
    showPopUp2.style.display='none';
    popUp2.style.display='none';
    paypal.style.display='flex';
  }
})

let month = document.getElementById("month");
let year = document.getElementById("year");
let cvv = document.getElementById("cvv");
let cardNum = document.getElementById("cardNum");


cardNum.addEventListener("input", () => {
  if (cardNum.value.length >= 16) {
    cardNum.value = cardNum.value.slice(0, 16);
  }
});

month.addEventListener("input", () => {
  if (month.value.length >= 2) {
    month.value = month.value.slice(0, 2);
  }
});

year.addEventListener("input", () => {
  if (year.value.length >= 4) {
    year.value = year.value.slice(0, 4);
  }
});
cvv.addEventListener("input", () => {
  if (cvv.value.length >= 3) {
    cvv.value = cvv.value.slice(0, 3);
  }
});