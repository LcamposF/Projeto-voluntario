//função do header
const menuHmburg = document.getElementById('navbarSupportedContent');
const butn = document.getElementById('butn');

butn.addEventListener("click", function(){
   if(menuHmburg.style.display === "none"){
    menuHmburg.style.display =  "block";
   } else {
     menuHmburg.style.display = 'none';
   }
});


//função nas setas do footer
const seta = document.getElementById('txtcomo01');
var i_01 = document.getElementById('i_01');
var txt_ajd = document.getElementById('txt_ajd');
function trocarsetas() {
  if(i_01.classList.contains('bi-caret-right-fill')){
    i_01.classList.remove('bi-caret-right-fill');
    i_01.classList.add('bi-caret-down-fill') ;
    txt_ajd.style.display='block';
    txt_ajd.style.transitionDelay= '.5s'
  }else{
    i_01.classList.remove('bi-caret-down-fill');
    i_01.classList.add('bi-caret-right-fill');
    txt_ajd.style.display="none";
    txt_ajd.style.transition="all 3s"

  }
  };
const seta2 = document.getElementById('txtcomo02');
var i_02 = document.getElementById('i_02');
var txt_cont = document.getElementById('txt_cont');
function trocarsetas2() {
  if(i_02.classList.contains('bi-caret-right-fill')){
    i_02.classList.remove('bi-caret-right-fill');
    i_02.classList.add('bi-caret-down-fill') ;
    txt_cont.style.display='block';
    txt_cont.style.transitionDelay= '.5s'
  }else{
    i_02.classList.remove('bi-caret-down-fill');
    i_02.classList.add('bi-caret-right-fill');
    txt_cont.style.display="none";
    txt_cont.style.transition="all 3s"

  }
  };
const seta3 = document.getElementById('txtcomo03');
var i_03 = document.getElementById('i_03');
var txt_vol = document.getElementById('txt_vol');
function trocarsetas3() {
  if(i_03.classList.contains('bi-caret-right-fill')){
    i_03.classList.remove('bi-caret-right-fill');
    i_03.classList.add('bi-caret-down-fill') ;
    txt_vol.style.display='block';
    txt_vol.style.transitionDelay= '.5s'
  }else{
    i_03.classList.remove('bi-caret-down-fill');
    i_03.classList.add('bi-caret-right-fill');
    txt_vol.style.display="none";
    txt_vol.style.transition="all 3s"

  }
  };