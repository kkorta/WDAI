var score = 0
let propagationEnabled = true
const propagationBtn = document.getElementById('propagation')
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const scoreText = document.getElementById('score')
const resetBtn = document.getElementById('reset')
const myList = document.getElementById('list')
const details = document.getElementsByClassName('details')
const reverseBtn = document.getElementById('reverse')
let reversed = false;


function add(e){
    if (!propagationEnabled){
        e.stopPropagation()
        score += parseInt(document.getElementById(this.id).getAttribute('points'))
        
        
    }
    else{
        score += parseInt(document.getElementById(this.id).getAttribute('points'))
    }

    scoreText.innerText = score
    if (score > 30){
        box2.removeEventListener('click', add)
        box2.removeEventListener('click', display)
        box2.removeEventListener('click', display, reversed)
        box2.style.backgroundColor = "gray"
    }
    if (score > 50){
        box1.removeEventListener('click', add)
        box1.removeEventListener('click', display)
        box1.removeEventListener('click', display, reversed)
        box1.style.backgroundColor = "gray"
    }
}



const stopBtn = document.getElementById('propagation')

function changePropagation(){
    if (propagationEnabled){
        propagationEnabled = false
        propagationBtn.innerText = "Start propagation"
    }
    else{
        propagationEnabled = true
        propagationBtn.innerText = "Stop propagation"
    }

}

function setUpButtons(){
    box1.addEventListener('click', add)
    box2.addEventListener('click', add)
    box3.addEventListener('click', add)
    box1.addEventListener('click', display)
    box2.addEventListener('click', display)
    box3.addEventListener('click', display)
    propagationBtn.addEventListener('click', changePropagation)
    resetBtn.addEventListener('click', reset)
    reverseBtn.addEventListener('click', reverseProp)

}

function reverseProp(){
    if (reversed){
        reversed = false
        box1.removeEventListener('click', display)
        box2.removeEventListener('click', display)
        box3.removeEventListener('click', display)
        if (score <= 30){  box2.addEventListener('click', display, reversed)}
        if (score <= 50){ box1.addEventListener('click', display, reversed)}
        box3.addEventListener('click', display, reversed)
        reverseBtn.innerText = "reverse propagation OFF"
        
    }
    else{
        reversed = true
        box1.removeEventListener('click', display)
        box2.removeEventListener('click', display)
        box3.removeEventListener('click', display)
        if (score <= 30){  box2.addEventListener('click', display, reversed)}
        if (score <= 50){ box1.addEventListener('click', display, reversed)}
        box3.addEventListener('click', display, reversed)
        reverseBtn.innerText = "reverse propagation ON"
    }
}

function reset(){
    box1.style.backgroundColor = "rgb(179, 179, 229)"
    box2.style.backgroundColor = "red"
    score = 0
    scoreText.innerText = score
    setUpButtons()
}

function display(e){
    if(!propagationEnabled){
        e.stopPropagation()
        var li = document.createElement('li')
        li.innerText= "kliknałeś przycisk" + this.id
       
        myList.appendChild(li)
    }
    else{
        var li = document.createElement('li')
       
        li.innerText= "kliknałeś przycisk" + this.id
        myList.appendChild(li)

    }
    
}
setUpButtons()