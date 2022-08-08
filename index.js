"use strict"

const mypopbutton= document.getElementById("popbutton");
const mypopfon= document.getElementById("popFon");
const mainpop= document.getElementById("mainPop");
const signbutton= document.getElementById("signin");
const signupbutton= document.getElementById("signup");

const regButton=document.getElementById("registration");
const inputButton=document.getElementById("login");

mypopbutton.addEventListener('click', ()=>{
    mypopfon.classList.add('dispshow');
   
})

mypopfon.addEventListener('click',(event)=>{
  if(event.target.classList.contains('pop-fon')){
    mypopfon.classList.remove('dispshow');
    document.getElementById("email").value="";
    document.getElementById("pass").value="";
  }
})


signbutton.addEventListener('click', ()=>{
  alert(`Your e-mail ${document.getElementById("email").value}`);
  alert(`Your password ${document.getElementById("pass").value}`);
  document.getElementById("email").value="";
  document.getElementById("pass").value="";
})

signupbutton.addEventListener('click', ()=>{
  alert(`Your e-mail ${document.getElementById("email").value}`);
  alert(`Your password ${document.getElementById("pass").value}`);
  document.getElementById("email").value="";
  document.getElementById("pass").value="";
})
regButton.onclick= ()=>{
    document.querySelectorAll(".create").forEach(element => element.classList.toggle('dispReg'));
    document.querySelectorAll(".pInPopUp").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".sotialButtonFacebook").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".sotialButtonGoogle").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".popUpLine").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".forgotPass").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".doNotHave").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".haveAcc").forEach(element => element.classList.toggle('dispReg'));
    document.querySelectorAll(".pop-up").forEach(element => element.classList.toggle('popSmall'));
    document.querySelectorAll(".signButton").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".signButtonUp").forEach(element => element.classList.toggle('dispReg'));
    document.getElementById("email").value="";
    document.getElementById("pass").value="";
  }
  
  inputButton.onclick=()=>{
    document.querySelectorAll(".create").forEach(element => element.classList.toggle('dispReg'));
    document.querySelectorAll(".pInPopUp").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".sotialButtonFacebook").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".sotialButtonGoogle").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".popUpLine").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".forgotPass").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".doNotHave").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".haveAcc").forEach(element => element.classList.toggle('dispReg'));
    document.querySelectorAll(".pop-up").forEach(element => element.classList.toggle('popSmall'));
    document.querySelectorAll(".signButton").forEach(element => element.classList.toggle('dispNo'));
    document.querySelectorAll(".signButtonUp").forEach(element => element.classList.toggle('dispReg'));
    document.getElementById("email").value="";
    document.getElementById("pass").value="";
  }









const iconMenu= document.querySelector('.burger');
const menuBody= document.querySelector('.nav');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}



const menuLinks = document.querySelectorAll('.nav-link[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
           
            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

/*
var slideIndex = 1;
showSlides (slideIndex);
function plusSlides (n) {
    showSlides(slideIndex += n);
}
function currentSlide (n) {
    showSlides(slideIndex = n);
}
function showSlides (n) {
    var i;
    var slides = document.getElementsByClassName("div-destination");
    var dots = document.getElementsByClassName("spoints");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+= "active";
}
*/
/*
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;
const timeout = 800;
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
    
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
          popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e){
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
if (lockPadding.length > 0){
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }}
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}
function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0){
        for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
    }}
    body.style.paddingRight = '0px';
    body.classList.add('lock');
     }, timeout);
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}
document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = this.doctype.querySelector('.popup.open');
    
    }
});
*/

//Slider Big

let slides = document.querySelectorAll(".imgdestination");
let goun = document.querySelectorAll(".div-destination");
let bigSlider=[];
let mylabel=["SPAIN", "JAPAN", "USA"];

let circle0=document.getElementById("point-1");
let circle1=document.getElementById("point-2");
let circle2=document.getElementById("point-3");

let dotposition=1;



for( let i = 0; i < 3 ;i++){
  bigSlider[i]=slides[i].src;
  slides[i].remove();
  goun[i].remove();
}

circle1.classList.remove("spoints");
circle1.classList.add("circleStyleCenter");


let rightElement=0;
let leftElement=2;


function meElementAdd(k, x){
  let img = document.createElement('img');
  img.src=bigSlider[k];
  img.classList.add("imgdestination");
  document.querySelector(".destination").append(img);

  let myp= document.createElement('p');
  myp.textContent=mylabel[k];
  myp.classList.add("p-destination");
  document.querySelector(".destination").append(myp);


  let div=document.createElement('div');
  div.classList.add("div-destination");
  div.style.left=-1400+x*860+'px';
  document.querySelector(".destination").append(div);
  document.querySelectorAll(".div-destination")[x].append(img);
  document.querySelectorAll(".div-destination")[x].append(myp);
}


function meElementAdd2(k, x){
  let img = document.createElement('img');
  img.src=bigSlider[k];
  img.classList.add("imgdestination");
  document.querySelector(".destination").append(img);

  let myp= document.createElement('p');
  myp.textContent=mylabel[k];
  myp.classList.add("p-destination");
  document.querySelector(".destination").append(myp);


  let div=document.createElement('div');
  div.classList.add("div-destination");
  div.style.left='-1500px';
  document.querySelector(".destination").prepend(div);
  document.querySelectorAll(".div-destination")[x].append(img);
  document.querySelectorAll(".div-destination")[x].append(myp);
}


let j=2;

for(let i=0; i< 5; i++){
  if(j>=3){j=0}
   meElementAdd(j,i);
   j++;
}
statFunction()


function statFunction(){
  let work=document.querySelectorAll(".imgdestination")
  for(let key of work){
    key.classList.remove("rightbutton");
    key.classList.remove("leftbutton");
  }
document.querySelectorAll(".imgdestination")[1].classList.add("leftbutton");
document.querySelectorAll(".imgdestination")[3].classList.add("rightbutton");
}


function drowDot(x){
  circle0.classList.remove("circleStyleCenter","spoints");
  circle1.classList.remove("circleStyleCenter","spoints");
  circle2.classList.remove("circleStyleCenter","spoints");
  
  switch(x){
    case 0:{
      circle0.classList.add("circleStyleCenter");
      circle1.classList.add("spoints");
      circle2.classList.add("spoints")
    };break;
    case 1:{
      circle1.classList.add("circleStyleCenter");
      circle0.classList.add("spoints");
      circle2.classList.add("spoints")
    };break;
    case 2:{
      circle2.classList.add("circleStyleCenter");
      circle1.classList.add("spoints");
      circle0.classList.add("spoints")
    };break;
}

}


function runleft(ind){
  let x=0;
  let realmas=document.querySelectorAll(".div-destination");
  for(let i of realmas){
    i.style.left=-2260+x*860+'px';
    x++;
  }
  realmas[0].remove();
  realmas.push(meElementAdd(ind, 4));
  
 
}

function runright(ind){
  
    let realmas=document.querySelectorAll(".div-destination");
    let x=realmas.length-1;
    
    for(let i=realmas.length-1; i>=0; i--){
      realmas[i].style.left=-540+x*860+'px';
      x--;
    }
    realmas[4].remove();
    realmas.unshift(meElementAdd2(ind, 0));
    
}

const batton=document.querySelector(".destination");

batton.addEventListener('click',(event)=>{  
 
  statFunction();

  if(event.target.classList.contains("rightbutton")){
   

    leftElement=leftElement +1;

    if(leftElement===3){
      leftElement=0;
    };

    rightElement=rightElement +1;

    if(rightElement===3){
      rightElement=0;
    };

    dotposition=dotposition +1;

    if(dotposition===3){
      dotposition=0;
    };
  
    drowDot(dotposition);
    runleft(rightElement);
  }
  
  if(event.target.classList.contains("leftbutton")){
    
    rightElement=rightElement-1;

    if(rightElement===-1){
      rightElement=2;
    };
  
    leftElement=leftElement-1;

    if(leftElement===-1){
      leftElement=2;
    };

    dotposition=dotposition -1;

    if(dotposition===-1){
      dotposition=2;
    };

    drowDot(dotposition);
    runright(leftElement);
  }
});

circle0.addEventListener('click',(event)=>{
  statFunction();

  if(!circle0.classList.contains("circleStyleCenter")){
    if(circle1.classList.contains("circleStyleCenter")){
      rightElement=rightElement-1;

    if(rightElement===-1){
      rightElement=2;
    };
  
    leftElement=leftElement-1;

    if(leftElement===-1){
      leftElement=2;
    };

    dotposition=dotposition -1;

    if(dotposition===-1){
      dotposition=2;
    };

    drowDot(dotposition);
    runright(leftElement);
    }
    else{
      leftElement=leftElement +1;

      if(leftElement===3){
        leftElement=0;
      };
  
      rightElement=rightElement +1;
  
      if(rightElement===3){
        rightElement=0;
      };
  
      dotposition=dotposition +1;
  
      if(dotposition===3){
        dotposition=0;
      };
    
      drowDot(dotposition);
      runleft(rightElement);

    }
    
  }
})


circle1.addEventListener('click',(event)=>{
  statFunction();

  if(!circle1.classList.contains("circleStyleCenter")){
    if(circle0.classList.contains("circleStyleCenter")){
      leftElement=leftElement +1;

      if(leftElement===3){
        leftElement=0;
      };
  
      rightElement=rightElement +1;
  
      if(rightElement===3){
        rightElement=0;
      };
  
      dotposition=dotposition +1;
  
      if(dotposition===3){
        dotposition=0;
      };
    
      drowDot(dotposition);
      runleft(rightElement);
    }
    else{
      rightElement=rightElement-1;

      if(rightElement===-1){
        rightElement=2;
      };
    
      leftElement=leftElement-1;
  
      if(leftElement===-1){
        leftElement=2;
      };
  
      dotposition=dotposition -1;
  
      if(dotposition===-1){
        dotposition=2;
      };
  
      drowDot(dotposition);
      runright(leftElement);

    }
    
  }
})


circle2.addEventListener('click',(event)=>{
  statFunction();

  if(!circle2.classList.contains("circleStyleCenter")){
    if(circle1.classList.contains("circleStyleCenter")){
      leftElement=leftElement +1;

      if(leftElement===3){
        leftElement=0;
      };
  
      rightElement=rightElement +1;
  
      if(rightElement===3){
        rightElement=0;
      };
  
      dotposition=dotposition +1;
  
      if(dotposition===3){
        dotposition=0;
      };
    
      drowDot(dotposition);
      runleft(rightElement);
    }
    else{
      rightElement=rightElement-1;

      if(rightElement===-1){
        rightElement=2;
      };
    
      leftElement=leftElement-1;
  
      if(leftElement===-1){
        leftElement=2;
      };
  
      dotposition=dotposition -1;
  
      if(dotposition===-1){
        dotposition=2;
      };
  
      drowDot(dotposition);
      runright(leftElement);

    }
    
  }
})