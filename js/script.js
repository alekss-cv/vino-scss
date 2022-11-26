"use strict"

let stickySvgArrow = document.querySelector('.sticky__div_svg-arrow');
let stickySvgClick = document.querySelector('.sticky__div_svg-click');
const offset = 100;
function funScrollTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
    funScrollTop();
}
stickySvgArrow.addEventListener("click" , funScrollTop);

const getTop = () => {
    window.pageYOffset || document.documentElement.scrollTop;
}


window.addEventListener("scroll", function (){
    if(getTop()>offset){
        stickySvgArrow.style.display = "none"
    }else {
        stickySvgArrow.style.display = "none"
    }
})