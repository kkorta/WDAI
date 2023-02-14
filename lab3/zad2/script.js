const slide1 = document.getElementById('slide1')
const slide2 = document.getElementById('slide2')
const slide3 = document.getElementById('slide3')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


const slides = [slide1, slide2, slide3]
let i = 0

function swap(){
    console.log(this.id)
}


leftBtn.addEventListener('click', swap)

