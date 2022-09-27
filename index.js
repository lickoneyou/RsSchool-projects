console.log(" 1:10 \n 2:20 \n 3:48 \n 4:12 \n 5:20");
console.log(" 'Travel2' \n 1:48 \n 2:15 \n 3:20")

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.burger-menu_overlay');


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let login = document.querySelector('.Login');
let popup = document.querySelector('.popup');
let fon = document.querySelector('.popUpallScreen');
let emailInp = document.querySelector('.emailInp');
let passlInp = document.querySelector('.passlInp');
let siIn = document.querySelector('.siIn');


login.addEventListener('click', function(){
	popup.classList.toggle('active');
    fon.classList.toggle('active');
})

fon.addEventListener('click', function(event){
	if(event.target.classList.contains('popUpallScreen')) {
	popup.classList.toggle('active');
    fon.classList.toggle('active');

    }
})

siIn.addEventListener('click', function(event){
	alert('E-mail: '+ emailInp.value + '\n' + 'Password: ' + passlInp.value)
})

let butText = document.querySelector('.butText');
let popUpMini = document.querySelector('.popUpMini');
let butTextMini = document.querySelector('.butTextMini');
let popUpallScreenMini = document.querySelector('.popUpallScreenMini');

butText.addEventListener('click', function(event){
	popup.classList.toggle('active');
    popUpMini.classList.toggle('active');
    fon.classList.toggle('active');
    popUpallScreenMini.classList.toggle('active');

})

butTextMini.addEventListener('click', function(event){
	popup.classList.toggle('active');
    popUpMini.classList.toggle('active');
    fon.classList.toggle('active');
    popUpallScreenMini.classList.toggle('active');
})

popUpallScreenMini.addEventListener('click', function(event){
	if(event.target.classList.contains('popUpallScreenMini')) {
    popUpMini.classList.toggle('active');
    popUpallScreenMini.classList.toggle('active');

    }
})


let siInMini = document.querySelector('.siInMini');
let emailInpMini = document.querySelector('.emailInpMini');
let passlInpMini = document.querySelector('.passlInpMini');

siInMini.addEventListener('click', function(eventmini){
    alert('E-mail: '+ emailInpMini.value + '\n' + 'Password: ' + passlInpMini.value)
})

let accMenu = document.querySelector('#accMenu');
accMenu.addEventListener('click', function(){
	popup.classList.toggle('active');
    fon.classList.toggle('active');
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})


let offset = 0;
const destina = document.querySelector('.destina');
const spainjpg = document.querySelector('.spainjpg');
const japanjpg = document.querySelector('.japanjpg');
const usajpg = document.querySelector('.usajpg');

spainjpg.addEventListener('click', function(){
	offset = offset - 860;
    if (offset < 0) {
        offset = 860;
        circleright.style.background = '#F2785C';
        circlemidle.style.background = 'rgba(242, 120, 92, 0.5)';
    }

    else if (offset === 0) {
        offset = 860;
    }
    destina.style.left = offset + 'px';
});

japanjpg.addEventListener('click', function(){
	offset = offset - 860;
    if(offset === -860) {
        offset = 0;
    }
    else if (offset < 0) {
        offset = 860;
        
    }
    destina.style.left = offset + 'px';
    circleright.style.background = 'rgba(242, 120, 92, 0.5)';
    circlemidle.style.background = '#F2785C';
    circleleft.style.background = 'rgba(242, 120, 92, 0.5)';
});

usajpg.addEventListener('click', function(){
	offset = offset - 860;
    if (offset < 0) {
        offset = 860;
    }
    
    else if (offset === 0) {
        offset = 860;
    }
    destina.style.left = -offset + 'px';
    circlemidle.style.background = 'rgba(242, 120, 92, 0.5)';
    circleleft.style.background = '#F2785C';
});

let circleright = document.querySelector('.circleright');
let circlemidle = document.querySelector('.circlemidle');
let circleleft = document.querySelector('.circleleft');


let vectorleft = document.querySelector('.vectorleft');
let vectorright = document.querySelector('.vectorright');
let slidermob = document.querySelector('.slidermob');
let circlerightmob = document.querySelector('.circlerightmob');
let circlemidlemob = document.querySelector('.circlemidlemob');
let circleleftmob = document.querySelector('.circleleftmob');

vectorleft.addEventListener('click', function(){
	offset = offset + 383;
    if(offset > 0) {
        offset = 383;
        circlerightmob.style.background = '#F2785C';
        circlemidlemob.style.background = 'rgba(242, 120, 92, 0.5)';
        vectorleft.style.borderTop = '4px solid rgba(242, 120, 92, 0.5)';
        vectorleft.style.borderRight = '4px solid rgba(242, 120, 92, 0.5)';
    }

    if(offset === 0) {
        circlerightmob.style.background = 'rgba(242, 120, 92, 0.5)';
        circlemidlemob.style.background = '#F2785C';
        circleleftmob.style.background = 'rgba(242, 120, 92, 0.5)';
        vectorright.style.borderTop = '4px solid #F2785C';
        vectorright.style.borderRight = '4px solid #F2785C';
    }

    slidermob.style.left = offset + 'px';
});

vectorright.addEventListener('click', function(){
	offset = offset - 383;

    if(offset === 0) {
        circlerightmob.style.background = 'rgba(242, 120, 92, 0.5)';
        circlemidlemob.style.background = '#F2785C';
        vectorleft.style.borderTop = '4px solid #F2785C';
        vectorleft.style.borderRight = '4px solid #F2785C';
    
    }
    
    if(offset < 0) {
        offset = -383;
        circlemidlemob.style.background = 'rgba(242, 120, 92, 0.5)';
        circleleftmob.style.background = '#F2785C';
        circlerightmob.style.background = 'rgba(242, 120, 92, 0.5)';
        vectorright.style.borderTop = '4px solid rgba(242, 120, 92, 0.5)';
        vectorright.style.borderRight = '4px solid rgba(242, 120, 92, 0.5)';
    }
    
    slidermob.style.left = offset + 'px';
    
});



