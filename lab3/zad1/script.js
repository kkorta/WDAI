function setText(){
    var name = window.prompt("wpiszz swoje imie");

    var ajdi = document.getElementById("text");
    var len = name.length - 1;
    if (name.charAt(len) == "a"){
        ajdi.textContent = "Witam pania" + name;
    } 
    else{
        ajdi.textContent = "witam pana to" + name;}
}