const add = document.getElementById('add')
const mylist = document.getElementById('list')
const nameText = document.getElementById('input1')
const numText = document.getElementById('input2')



var num = 2

function addLi(){
    let values = readInput()
    console.log(values.name)
    
    if (checkName(values.name) && checkPhone(values.phone)){
        var elem = "elem" + num
        var li = document.createElement("li")
        var h1 = document.createElement('h4')
        var h2 = document.createElement('h4')
        var btn = document.createElement('button')
        var icon = document.createElement('i')
        icon.className = "fa fa-trash-o"
        icon.style = "font-size:24px"
        h1.setAttribute("id", "name")
        h1.innerText = values.name
        h2.setAttribute("id", "num")
        h2.innerText = values.phone
        btn.setAttribute("class", "iconBtn")
        btn.setAttribute("id", num)
        btn.appendChild(icon)
        btn.addEventListener("click", deleteLi)
        li.setAttribute("id", elem)
        li.appendChild(h1)
        li.appendChild(h2)
        li.appendChild(btn)
        num += 1
        mylist.appendChild(li)
    }
    else{
  
        alert("incorrect input")
    }
}

function readInput(){
    let name = nameText.value
    let phone = numText.value


    return{name, phone}
}



function deleteLi(){

    document.getElementById("elem" + this.id).remove()
}

function checkPhone(str){
    let x = "0123456789+- "
    counter = 0
    for (i in str){
        taken = false
        for (j in x){

            if (x.charAt(j) == str.charAt(i)){
                taken = true
                
                if (str.charAt(i) != "+" && str.charAt(i) != " " && str.charAt(i) != "-")
                {
                    counter += 1
                }
            }
        }
        if (!taken){
            alert("Wrong number!")
            return false
        }
    }
    if (counter == 12 || counter == 9){
        return true
    }
    return false
}


function checkName(name) {
    return /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(name) && capitalLetter(name);
}

function capitalLetter(name){
    if (!name){
    
        return false
    }

    if (!(name.charAt(0).toUpperCase() == name.charAt(0))){
        
        return false
    }
    for (let i = 1; i < name.length; i++){
        if ((name.charAt(i - 1) == " " || name.charAt(i - 1) == "-") && (name.charAt(i).toUpperCase() != name.charAt(i))){
        
            return false
        }
    }
    return true
}
add.addEventListener('click', addLi)

