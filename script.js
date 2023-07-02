// All animations will take exactly 1000ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

// Slide 1 
const slider1 = document.querySelector('.slider');
const prevBtn1 = document.querySelector('.prev-bttn');
const nextBtn1 = document.querySelector('.next-bttn');

let slideIndex1 = 0;

prevBtn1.addEventListener('click', () =>{
    slideIndex1--;
    if(slideIndex1 < 0){
    slideIndex1 = Math.floor((slider1.childElementCount - 1) / 4);
    }
    updateSliderPosition1();
});

nextBtn1.addEventListener('click', () =>{
    slideIndex1++;
    if(slideIndex1 > Math.floor((slider1.childElementCount - 1) / 4)){
    slideIndex1 = 0;
    }
    updateSliderPosition1();
});

function updateSliderPosition1(){
    const slideWidth = slider1.clientWidth / 4;
  const slideOffset = slideWidth * slideIndex1 * -4;
  slider1.style.transform = `translateX(${slideOffset}px)`;
};

// Slide 2

const slider2 = document.querySelector('.slide');
const prevBtn2 = document.querySelector('.prev-btn');
const nextBtn2 = document.querySelector('.next-btn');

let slideIndex2 = 0;

prevBtn2.addEventListener('click', () =>{
    slideIndex2--;
    if(slideIndex2 < 0){
    slideIndex2 = slider2.childElementCount - 1;
    }
    updateSliderPosition2();
});

nextBtn2.addEventListener('click', () =>{
    slideIndex2++;
    if(slideIndex2 === slider2.childElementCount){
    slideIndex2 = 0;
    }
    updateSliderPosition2();
});

function updateSliderPosition2(){
    const slideWidth = slider2.clientWidth;
    slider2.style.transform = `translateX(-${slideWidth * slideIndex2}px)`;
};