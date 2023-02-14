const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')


button1.addEventListener('click', show1)
button2.addEventListener('click', show2)
setTimeout(checkUppercase, 500)
setTimeout(checkDigit, 500)
setTimeout(checkSpecial, 500)
setTimeout(checkLength, 500)
setTimeout(check, 500)

function show1(){
    const passwordInput = document.getElementById('password-1')
    const icon = document.getElementById('btn1')
    if (passwordInput.type === "password"){
        passwordInput.type = "text"
        icon.className = "fa fa-eye-slash"
    }
    else{
        passwordInput.type = "password"
        icon.className = "fa fa-eye"
    }
}  

function show2(){
    const passwordInput = document.getElementById('password-2')
    const icon = document.getElementById('btn2')
    if (passwordInput.type === "password"){
        passwordInput.type = "text"
        icon.className = "fa fa-eye-slash"
    }
    else{
        passwordInput.type = "password"
        icon.className = "fa fa-eye"
    }
}


function checkUppercase(){
    const passwordInput = document.getElementById('password-1')
    const icon = document.getElementById('uppercase')
    const circle = document.getElementById('circle3')
    if (passwordInput.value.toLowerCase() == passwordInput.value){
        circle.style.backgroundColor = "red"
        icon.className = "fa fa-close"
        
    }
    else{
        circle.style.backgroundColor = "greenyellow"
        icon.className = "fa fa-check"
    }
    setTimeout(checkUppercase, 500)
    
}

function containsNumbers(str) {
    return /\d/.test(str);
  }

function checkDigit(){
    const passwordInput = document.getElementById('password-1')
    const icon = document.getElementById('digit')
    const circle = document.getElementById('circle4')
    if (!containsNumbers(passwordInput.value)){
        circle.style.backgroundColor = "red"
        icon.className = "fa fa-close"
        
    }
    else{
        circle.style.backgroundColor = "greenyellow"
        icon.className = "fa fa-check"
    }
    setTimeout(checkDigit, 500)

}

function isSpecial(str){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    return specialChars.test(str)

}
function checkSpecial(){
    const passwordInput = document.getElementById('password-1')
    const icon = document.getElementById('special')
    const circle = document.getElementById('circle2')
    if (!isSpecial(passwordInput.value)){
        circle.style.backgroundColor = "red"
        icon.className = "fa fa-close"
        
    }
    else{
        circle.style.backgroundColor = "greenyellow"
        icon.className = "fa fa-check"
    }
    setTimeout(checkSpecial, 500)

}

function checkLength(){
    const passwordInput = document.getElementById('password-1')
    const icon = document.getElementById('characters')
    const circle = document.getElementById('circle1')
    if (passwordInput.value.length < 8){
        circle.style.backgroundColor = "red"
        icon.className = "fa fa-close"
        
    }
    else{
        circle.style.backgroundColor = "greenyellow"
        icon.className = "fa fa-check"
    }
    setTimeout(checkLength, 500)

}

function check(){
    const passwordInput1 = document.getElementById('password-1')
    const passwordInput2 = document.getElementById('password-2')
    const warning = document.getElementById('check')


    if (passwordInput1.value != passwordInput2.value){
        warning.style.opacity = "1"
    }
    else{
        warning.style.opacity = ""
    }
    setTimeout(check, 500)
}