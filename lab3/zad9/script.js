const slide1 = document.getElementById('slide1')
const slide2 = document.getElementById('slide2')
const slide3 = document.getElementById('slide3')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const random = document.getElementById('random')

const slides = [slide1, slide2, slide3]
let i = 0

function swap(){
    slides[i].style.opacity = "0"
    if (this.id == "right"){
        i = (i + 1) % 3
        slides[i].style.opacity = "1"
    slides[i].animate([{transform: 'translateX(-30%'},
                    {transform: 'translateX(0)'}], {duration: 500})
    }
    if (this.id == "left"){
        i = (i + 2) % 3
        slides[i].style.opacity = "1"
        slides[i].animate([{transform: 'translateX(30%'},
                        {transform: 'translateX(0)'}], {duration: 500})
    }
    
}


function randomSlide(){
    slides[i].style.opacity = "0"
    var random = i
    while (random == i){
        random = Math.floor(Math.random() * 3)
        console.log(random)
    }
    i = random
    slides[i].style.opacity = "1"
    slides[i].animate([{transform: 'translateX(-30%)'},
                    {transform: 'translateX(0)'}], {duration: 500})
}
leftBtn.addEventListener('click', swap)
rightBtn.addEventListener('click', swap)
random.addEventListener('click', randomSlide)




