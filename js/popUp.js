let showPopUp = document.querySelectorAll('#show-popUp');
let popUp = document.querySelectorAll('.popUp');
let closeBtn = document.querySelectorAll('#close');

showPopUp.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUp[0].style.display='flex';
  });
})

closeBtn.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUp.forEach((e)=>{e.style.display='none';})
  });
})
