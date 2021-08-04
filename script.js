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
