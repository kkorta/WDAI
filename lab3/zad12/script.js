const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const collisionCanvas = document.getElementById('collisionCanvas');
const collisionCtx = collisionCanvas.getContext('2d');
collisionCanvas.width = window.innerWidth;
collisionCanvas.height = window.innerHeight;
const healthImg = document.getElementById('health');
const startBtn = document.getElementById('play');
const startDiv = document.getElementById('log-in');
const endDiv = document.getElementById('end');
const restartBtn = document.getElementById('restart');
const nickName = document.getElementById('nickname');
const url = 'http://jsonblob.com/1041837885258743808';





ctx.font = '50px Impact';
let timeToNextZombie = 0;
let interval = 500;
let lastTime = 0;
let score = 0;
let zombies = [];
let health = 3;
let gameOver = false;
class Zombie{
    constructor(){
        this.spriteWidth = 200;
        this.spriteHeight = 312;
        this.size = Math.random() * 0.6 + 0.4;
        this.width = this.spriteWidth * this.size;
        this.height = this.spriteHeight * this.size;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = Math.random() * 4 + 1;
        this.toDelete = false;
        this.image = new Image();

        this.image.src = 'images/walkingdead.png';
        this.animationTime = 0;
        this.animationInterval = Math.random() * 50 + 50;
        this.frame = 0;
        this.maxFrame = 8;
        this.randomColors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
        this.color = 'rgb(' + this.randomColors[0] + ',' + this.randomColors[1] + ',' + this.randomColors[2] + ')';
       
    }

    update(delta){
        this.x -= this.speed;
        if (this.x < 0 - this.width){
            health--;
            this.toDelete = true;
            if (health == 0){
                gameOver = true;
            }
        }
        this.animationTime += delta;
        if (this.animationTime > this.animationInterval){
            if (this.frame > this.maxFrame){this.frame = 0;}
            else {this.frame++;}
            this.animationTime = 0;
        }

    }
    draw(){
        collisionCtx.fillStyle = this.color;
        collisionCtx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

const zombie = new Zombie();
function animate(timestamp){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    collisionCtx.clearRect(0, 0, this.width, this.height);
    let delta = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextZombie += delta;
    if (timeToNextZombie > interval){
        zombies.push(new Zombie());
        timeToNextZombie = 0;
        zombies.sort(function(a,b){
            return a.width - b.width;
        });
    }
    drawScore();
   
    [...zombies].forEach(object => object.update(delta));
    [...zombies].forEach(object => object.draw());
    zombies = zombies.filter(object => !object.toDelete)
    if (!gameOver) {requestAnimationFrame(animate);}
    else{
        drawGameOver();
    }
    drawHealth();

    
}

function drawScore(){
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score, canvas.width - 300, 70);
    ctx.fillText("Nickname: " + nickName.value, 300, 70);
}

function drawHealth(){
    for (let i = 0; i < health; i++){
        ctx.drawImage(healthImg, (50 * i) + 20, 20, 50, 50);
    }
    
    
}

window.addEventListener('click', function(e){
    const detectPixelColor = collisionCtx.getImageData(e.x, e.y, 1, 1)

    const pc = detectPixelColor.data;

    var shot = false;
    zombies.forEach(object => {if (object.randomColors[0] === pc[0] && object.randomColors[1] === pc[1] && object.randomColors[2] === pc[2])
    {
        object.toDelete = true;
        score += 12;
        shot = true;
    }
    })
 
    if (!shot){
        score -= 6;
    }



});

function drawGameOver(){
    ctx.fillStyle = 'black';
    endDiv.style.display = "flex"

}

function start(e){
    e.stopPropagation();
    if (!nickName.value){
        alert("Incorrect Nickname");
    }
    else{
        startDiv.style.display = "none";
        endDiv.style.display = "none"
        timeToNextZombie = 0;
        interval = 500;
        lastTime = 0;
        score = 0;
        zombies = [];
        health = 3;
        gameOver = false;
        animate(0);
    }
}


startBtn.addEventListener('click', start);
restartBtn.addEventListener('click', start);



