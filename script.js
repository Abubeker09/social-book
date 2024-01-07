let nav = document.querySelector('nav');
let body = document.querySelector('.container');
let left = document.querySelector('.container-left');
let right = document.querySelector('.cont-right');
let main = document.querySelector('main');
let drop = document.querySelector('.drop-down-setting');
let con = document.querySelector('body')
let togg = document.querySelector('.theme-switch__checkbox')
function show(){
  drop.classList.toggle('sett');
}


function profDarck(){
  nav.classList.toggle('nav-darck');
  body.classList.toggle('container-darck');
  left.classList.toggle('left-darck');
  right.classList.toggle('right-darck');
  main.classList.toggle('main-darck');
  drop.classList.toggle('drop-down-setting-darck');
  con.classList.toggle('profile-container-darck');

  
  if(localStorage.getItem('theme')=='darck'){
    localStorage.setItem('theme','light');
  }
  else{
    localStorage.setItem('theme','darck');
    }
}


if(localStorage.getItem('theme')== 'light'){
  nav.classList.remove('nav-darck');
  drop.classList.remove('drop-down-setting-darck');
  body.classList.remove('container-darck');
  left.classList.remove('left-darck');
  right.classList.remove('right-darck');
  main.classList.remove('main-darck');
  con.classList.remove('profile-container-darck');

  togg.checked = true
}
else if(localStorage.getItem('theme')== 'darck'){
  nav.classList.add('nav-darck');
  drop.classList.add('drop-down-setting-darck');
  con.classList.add('profile-container-darck');
  body.classList.add('container-darck');
  left.classList.add('left-darck');
  right.classList.add('right-darck');
  main.classList.add('main-darck');
  
  togg.checked = false
}
else{
  localStorage.setItem('theme', 'light');
  togg.checked = true
}

