var i = 0;
var checked = false;

function reset(){
    checked = false;
    document.getElementById("counter").textContent("Licznik wyłaczony")
    i = 0;

}

function add(){
    checked = true;
    
}

function increment(){
    i += 1;
}

function goal(){
    if (checked){
        document.getElementById("counter").textContent(i);
    }
}