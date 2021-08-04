const F_img = document.querySelector('#Follow-img')
const img_bg = document.querySelector('#img-bg')

function ShowBox(){
    F_img.style.display = 'block';
}
function HideBox(){
    F_img.style.display = 'none';
}

function FollowMouse(e){
    F_img.style.left = e.clientX +"px";
    F_img.style.top = e.clientY +"px";
}

img_bg.addEventListener('mouseover',ShowBox)
F_img.addEventListener('mouseover',ShowBox)
img_bg.addEventListener('mouseout',HideBox)
F_img.addEventListener('mouseout',HideBox)


img_bg.addEventListener('mousemove',FollowMouse)
F_img.addEventListener('mousemove',FollowMouse)

// 슬라이더
let slideIndex = 1;
showSlides(slideIndex);

// 이전/다음 조작
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// 현재 순서
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}