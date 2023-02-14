const field = document.getElementById('field');
const container = document.getElementById('container');

const dot = document.getElementById('dot');


function follow(e){
    e.stopPropagation();
    dot.style.left = -35 + e.clientX + "px";
    dot.style.top = -35 + e.clientY + "px";
    console.log(e.clientX, e.clientY);
}


container.addEventListener('click', function (e){

    alert("You clicked outside the field");
})
field.addEventListener('click', follow);