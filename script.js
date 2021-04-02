//bar
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
//projects and loadmap
var projects = document.querySelector('#projects');
var loadmap = document.querySelector('#loadmap');

function show_projects(){
  projects.style.display = "block";
  loadmap.style.display = "none";
}
function show_loadmap(){
  projects.style.display = "none";
  loadmap.style.display = "block";
}
