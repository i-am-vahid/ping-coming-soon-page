let user_email = document.querySelector('.container__form--email')
let btn = document.querySelector('.container__form--submit')
let erroe_msg = document.querySelector('.container__form--error-msg')

let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

btn.addEventListener("click", ()=>{
    if (!email_regex.test(user_email.value)){
        if (window.innerWidth > 710){
            erroe_msg.style.display = 'block'
            user_email.style.borderColor = 'red'
    
        }else{
            user_email.style.marginBottom = '40px'
            erroe_msg.style.display = 'block'
            user_email.style.borderColor = 'red'
        }
    }
})