const F_img = document.querySelector('#Follow-img')
const img_bg = document.querySelector('#img-bg')

function ShowBox(){
    F_img.style.display = 'block';
}
function HideBox(){
    F_img.style.display = 'none';
}

function FollowMouse(){
    F_img.style.left = positionLeft - 10 + "px";
    F_img.style.left = positionTop - 10 + "px";
}

img_bg.addEventListener('mouseover',ShowBox)
img_bg.addEventListener('mouseout',HideBox)
F_img.addEventListener('mousemove',FollowMouse)