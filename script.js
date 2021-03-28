var bar = document.querySelector('#strat_bar');
var nav = document.querySelector('#nav');
nav.value = 'hide';


function control_nav(){
  if (nav.value === 'hide'){
    nav.style.width = "200px";
    nav.value = 'show';
  }
  else {
    nav.style.width = "0";
    nav.value = 'hide';
  }
}
