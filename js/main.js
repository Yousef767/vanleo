let nav = document.querySelector('nav');
let menu = document.querySelector('.menu');

menu.addEventListener('click',()=>{
  nav.classList.toggle('activeMenu');
})
window.addEventListener('scroll',()=>{
  if(window.scrollY>= 30){
    nav.classList.add('showAnitmation');
    nav.style.position='fixed';
    nav.style.top='-300px';
    document.body.style.paddingTop='150px';
  }else{
    nav.classList.remove('showAnitmation');
    nav.style.position='sticky';
    nav.style.top='0';
    document.body.style.paddingTop='0';
  }
})

let drop = document.querySelectorAll('.drop');
let links = document.querySelectorAll('.noD')


drop.forEach((el)=>{
  el.addEventListener('click',()=>{
    links.forEach((e)=>{e.classList.remove('active')})
    drop.forEach((e)=>{el === e ? e.classList.toggle('active'):e.classList.remove('active')})
  })
})

links.forEach((e)=>{
  e.addEventListener('click',()=>{
    links.forEach((e)=>{e.classList.remove('active')})
    e.classList.add('active');
    let activeDrop = document.querySelector('.drop.active');
    if(activeDrop){
      activeDrop.classList.remove('active');
    }
  })
})