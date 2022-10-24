let button = document.querySelector('.buttonWathOnline');
let button2 = document.querySelector('.buttonChooseYourFavorite');
let button3 = document.querySelector('.buttonLeaveFeedback');
let button4 = document.querySelector('.buttonDonateForVolunteers');
let circlRight = document.querySelector('.circlRight');
let circlLeft = document.querySelector('.circlLeft');
let pandaPic = document.querySelector('pandaPic');
let petText = document.querySelector('.petText');
let petText2 = document.querySelector('.petText2');
let petText3 = document.querySelector('.petText3');
let petText4 = document.querySelector('.petText4');
let petText5 = document.querySelector('.petText5');
let petText6 = document.querySelector('.petText6');
let fon = document.querySelector('.fon');
let fon2 = document.querySelector('.fon2');
let fon3 = document.querySelector('.fon3');
let fon4 = document.querySelector('.fon4');
let fon5 = document.querySelector('.fon5');
let fon6 = document.querySelector('.fon6');
let pet = document.querySelector('.pet');
let pet2 = document.querySelector('.pet2');
let pet3 = document.querySelector('.pet3');
let pet4 = document.querySelector('.pet4');
let pet5 = document.querySelector('.pet5');
let pet6 = document.querySelector('.pet6');
let petCountry = document.querySelector('.petCountry');
let petCountry2 = document.querySelector('.petCountry2');
let petCountry3 = document.querySelector('.petCountry3');
let petCountry4 = document.querySelector('.petCountry4');
let petCountry5 = document.querySelector('.petCountry5');
let petCountry6 = document.querySelector('.petCountry6');
let footerCircle = document.querySelector('.footerCircle');
let footerCircle2 = document.querySelector('.footerCircle2');
let footerCircle3 = document.querySelector('.footerCircle3');
let footerCircle4 = document.querySelector('.footerCircle4');
let Facebook = document.querySelector('.Facebook');
let Twitter = document.querySelector('.Twitter');
let Instagram = document.querySelector('.Instagram');
let YouTube = document.querySelector('.YouTube');
let facebookText = document.querySelector('.facebookText');
let twitterText = document.querySelector('.twitterText');
let instagramText = document.querySelector('.instagramText');
let youtubeText = document.querySelector('.youtubeText');
let menubtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let popUpallScreen = document.querySelector('.popUpallScreen');
let texWatchYourFavoriteAnimalOnline = document.querySelector('.texWatchYourFavoriteAnimalOnline');
let off = document.querySelector('.off');
let petCard = document.querySelector('.petCard');
let petCard1 = document.querySelector('.petCard1');
let petCard2 = document.querySelector('.petCard2');
let petCard3 = document.querySelector('.petCard3');
let petCard4 = document.querySelector('.petCard4');
let petCard5 = document.querySelector('.petCard5');
let petCard6 = document.querySelector('.petCard6');
let petCard7 = document.querySelector('.petCard7');
let petCard8 = document.querySelector('.petCard8');
const outImg = document.querySelector('.slide')
const container = document.querySelector('.container')
const container1 = document.querySelector('.container1')
const container2 = document.querySelector('.container2')
let elem = document.querySelector('input[type="range"]');
let testimonialsContainer = document.querySelector('.testimonialsContainer');
let testimonialsContainer1000 = document.querySelector('.testimonialsContainer1000');
let testimonialsContainerItems1 = document.querySelector('.testimonialsContainerItems1');
let testimonialsContainerItems2 = document.querySelector('.testimonialsContainerItems2');
let testimonialsContainerItems3 = document.querySelector('.testimonialsContainerItems3');
let popUpallScreenfon = document.querySelector('.popUpallScreenfon');
let popUpallScreenfon2 = document.querySelector('.popUpallScreenfon2');
let popUpallScreenfon3 = document.querySelector('.popUpallScreenfon3');
let twoVectorsPlus = document.querySelector('.twoVectorsPlus');
let testimonialsPU1 = document.querySelector('.testimonialsPU1');

testimonialsContainerItems1.addEventListener('click', function () {
    popUpallScreenfon.style.display = 'inline'
})

testimonialsContainerItems2.addEventListener('click', function () {
    popUpallScreenfon2.style.display = 'inline'
})

testimonialsContainerItems3.addEventListener('click', function () {
    popUpallScreenfon3.style.display = 'inline'
})

popUpallScreenfon2.addEventListener('click', function () {
    popUpallScreenfon2.style.display = 'none'
})

popUpallScreenfon3.addEventListener('click', function () {
    popUpallScreenfon3.style.display = 'none'
})

twoVectorsPlus.addEventListener('click', function () {
    popUpallScreenfon3.style.display = 'none'
})

twoVectorsPlus.addEventListener('click', function () {
    popUpallScreenfon2.style.display = 'none'
})


twoVectorsPlus.addEventListener('click', function () {
    popUpallScreenfon.style.display = 'none'
})

popUpallScreenfon.addEventListener('click', function () {
    popUpallScreenfon.style.display = 'none'
})




let rangeValue = function(){
    let newValue = elem.value;
    testimonialsContainer.style.marginLeft = -298* elem.value + 'px'

  }
  
  elem.addEventListener("input", rangeValue);

  let rangeValue1 = function(){
    let newValue = elem.value;
    testimonialsContainer1000.style.marginLeft = -323* elem.value + 'px'

  }
  
  elem.addEventListener("input", rangeValue1);


const art1 = 'container'
const art2 = 'container1'
const art3 = 'container2'


const images = [art1, art2, art3]

let i = 0

circlLeft.onclick = () =>{

    if(i === 0){
        outImg.appendChild(container)
        outImg.removeChild(container)
        outImg.appendChild(container1)
        outImg.removeChild(container1)
        outImg.appendChild(container2)
    }
    if(i === -1 || i === 2){
        outImg.removeChild(container2)
        outImg.appendChild(container1)
        outImg.appendChild(container2)
    }
    if(i === -2){
        outImg.appendChild(container)
        outImg.removeChild(container1)
        outImg.removeChild(container2)
        i = i+3
    }

    if(i == 1){
        outImg.appendChild(container)
        outImg.appendChild(container1)
        outImg.removeChild(container1)
        outImg.appendChild(container2)
        outImg.removeChild(container2)
        i = 1
    }
    i--
    console.log(i)
}

circlRight.onclick = () =>{

    if(i === 0){
        outImg.appendChild(container)
        outImg.removeChild(container)
        outImg.appendChild(container2)
        outImg.removeChild(container2)
        outImg.appendChild(container1)
    }
    if(i === 1 || i == -2){
        outImg.removeChild(container1)
        outImg.appendChild(container2)
    }
    if(i === 2 || i == -1){
        outImg.removeChild(container2)
        outImg.appendChild(container)
        outImg.appendChild(container1)
        outImg.appendChild(container2)
        i = -1
    }
    i++
    console.log(i)
}




menubtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    popUpallScreen.classList.toggle('active');
    texWatchYourFavoriteAnimalOnline.classList.toggle('active');
})

off.addEventListener('click', function () {
    menu.classList.toggle('active');
    popUpallScreen.classList.toggle('active');
    texWatchYourFavoriteAnimalOnline.classList.toggle('active');
})

popUpallScreen.addEventListener('click', function () {
    menu.classList.toggle('active');
    popUpallScreen.classList.toggle('active');
    texWatchYourFavoriteAnimalOnline.classList.toggle('active');
})

button.addEventListener('click', function () {
    button.classList.toggle('buttonJs');
})

button2.addEventListener('click', function () {
    button2.classList.toggle('buttonJs');
})

button3.addEventListener('click', function () {
    button3.classList.toggle('buttonJs');
})

button4.addEventListener('click', function () {
    button4.classList.toggle('buttonJs');
})

circlRight.addEventListener('click', function () {
    circlRight.classList.toggle('buttonJs');
})

circlLeft.addEventListener('click', function () {
    circlLeft.classList.toggle('buttonJs');
})

fon.addEventListener('mouseover', function () {
    petText.classList.toggle('petTextUp');
    pet.classList.toggle('petUp');
    petCountry.classList.toggle('petCountryUp');
})

fon.addEventListener('mouseout', function () {
    petText.classList.toggle('petTextUp');
    pet.classList.toggle('petUp');
    petCountry.classList.toggle('petCountryUp');
})

fon2.addEventListener('mouseover', function () {
    petText2.classList.toggle('petTextUp');
    pet2.classList.toggle('petUp');
    petCountry2.classList.toggle('petCountryUp');
})

fon2.addEventListener('mouseout', function () {
    petText2.classList.toggle('petTextUp');
    pet2.classList.toggle('petUp');
    petCountry2.classList.toggle('petCountryUp');
})

fon3.addEventListener('mouseover', function () {
    petText3.classList.toggle('petTextUp');
    pet3.classList.toggle('petUp');
    petCountry3.classList.toggle('petCountryUp');
})

fon3.addEventListener('mouseout', function () {
    petText3.classList.toggle('petTextUp');
    pet3.classList.toggle('petUp');
    petCountry3.classList.toggle('petCountryUp');
})

fon4.addEventListener('mouseover', function () {
    petText4.classList.toggle('petTextUp');
    pet4.classList.toggle('petUp');
    petCountry4.classList.toggle('petCountryUp');
})

fon4.addEventListener('mouseout', function () {
    petText4.classList.toggle('petTextUp');
    pet4.classList.toggle('petUp');
    petCountry4.classList.toggle('petCountryUp');
})

fon5.addEventListener('mouseover', function () {
    petText5.classList.toggle('petTextUp');
    pet5.classList.toggle('petUp');
    petCountry5.classList.toggle('petCountryUp');
})

fon5.addEventListener('mouseout', function () {
    petText5.classList.toggle('petTextUp');
    pet5.classList.toggle('petUp');
    petCountry5.classList.toggle('petCountryUp');
})

fon6.addEventListener('mouseover', function () {
    petText6.classList.toggle('petTextUp');
    pet6.classList.toggle('petUp');
    petCountry6.classList.toggle('petCountryUp');
})

fon6.addEventListener('mouseout', function () {
    petText6.classList.toggle('petTextUp');
    pet6.classList.toggle('petUp');
    petCountry6.classList.toggle('petCountryUp');
})

Facebook.addEventListener('mouseover', function () {
    footerCircle.classList.toggle('footerCircleUp');
    facebookText.classList.toggle('allTextUp');
})

Facebook.addEventListener('mouseout', function () {
    footerCircle.classList.toggle('footerCircleUp');
    facebookText.classList.toggle('allTextUp');
})

Twitter.addEventListener('mouseover', function () {
    footerCircle2.classList.toggle('footerCircleUp');
    twitterText.classList.toggle('allTextUp');
})

Twitter.addEventListener('mouseout', function () {
    footerCircle2.classList.toggle('footerCircleUp');
    twitterText.classList.toggle('allTextUp');
})

Instagram.addEventListener('mouseover', function () {
    footerCircle3.classList.toggle('footerCircleUp');
    instagramText.classList.toggle('allTextUp');
})

Instagram.addEventListener('mouseout', function () {
    footerCircle3.classList.toggle('footerCircleUp');
    instagramText.classList.toggle('allTextUp');
})

YouTube.addEventListener('mouseover', function () {
    footerCircle4.classList.toggle('footerCircleUp');
    youtubeText.classList.toggle('allTextUp');
})

YouTube.addEventListener('mouseout', function () {
    footerCircle4.classList.toggle('footerCircleUp');
    youtubeText.classList.toggle('allTextUp');
})
