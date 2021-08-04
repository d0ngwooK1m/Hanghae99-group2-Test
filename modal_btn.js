const signup_modalOn = document.querySelector("#SU_modal_btn")
const signup_modalOff = document.querySelector("#SU_cancel")
const modal_bg = document.querySelector('#SU_modal_Background')

function modalOn(){
    document.querySelector('#SU_modal_Background').style.display ='block';
    document.querySelector('#SU_modal_wrap').style.display ='block';
}
function modalOff(){
    document.querySelector('#SU_modal_Background').style.display ='none';
    document.querySelector('#SU_modal_wrap').style.display ='none';
}

signup_modalOn.addEventListener("click", modalOn)
signup_modalOff.addEventListener("click", modalOff)
modal_bg.addEventListener("click", modalOff)