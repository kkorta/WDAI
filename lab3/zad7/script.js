const uri = 'http://localhost:3000/cities';
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');

async function loadCities() {
    const response = await fetch(uri);
    const data = await response.json();

    lesserPolandCities(data);
    doubleA(data);
    fifthDensity(data);
    cityOver100000(data);
    moreOrLess(data);
    averageArea(data);
    pomerian(data);
}

function lesserPolandCities(data){
    for (let elem of data){
        if (elem.province == 'małopolskie'){
            let li = document.createElement('li');
            li.innerText = elem.name;
            a.appendChild(li);

        }
    }
   
}

function doubleA(data){
    for (let elem of data){
        counter = 0
        for(let name of elem.name){
            if (name.toLowerCase() == "a"){
                counter++;
            }
        }
        if (counter == 2){
            let li = document.createElement('li');
            li.innerText = elem.name;
            b.appendChild(li);
        }
        
    }
}

function fifthDensity(data){
    data.sort( (c1, c2) => c2.dentensity - c1.dentensity )
    let li = document.createElement('li');
    li.innerText = data[4].name;
    c.appendChild(li);
}

function cityOver100000(data){
    for (elem of data){
        if (elem.people > 100000){
            let li = document.createElement('li');
            li.innerText = elem.name + "City";
            d.appendChild(li)
        }
    }
}

function moreOrLess(data){
    let more = 0;
    let less = 0;
    for (elem of data){
        if (elem.people > 80000){
            more++;
        }
        else{less++;}
    }
    let li = document.createElement('li');
    if (less > more){
        li.innerText = "Jest więcej miast o liczbie mieszkańców poniżej 80000";
    }
    else{
        li.innerText = "Jest więcej miast o liczbie mieszkańców powyżej 80000";
    }
    e.appendChild(li);
    let liMore = document.createElement('li');
    liMore.innerText = "Liczba miast, gdzie jest więcej niż 80000 mieszkańców: " + more;
    let liLess = document.createElement('li');
    liLess.innerText = "Liczba miast, gdzie jest mniej niż 80000 mieszkańców: " + less;
    e.appendChild(liMore);
    e.appendChild(liLess);
}

function averageArea(data){
    let areaSum = 0;
    let counter = 0;
    for (elem of data){
        if (elem.township.charAt(0).toLowerCase() === "p"){
            areaSum += elem.area;
            counter++;
        
        }
    }
    console.log(counter)
    let li = document.createElement('li');
    li.innerText = areaSum/counter;
    f.appendChild(li);
}


function pomerian(data){
    let counter = 0;
    let all = true;
    for (elem of data){
       if (elem.province === 'pomorskie'){
            if (elem.people > 5000){
                counter++;
            }
            else{
                all = false;
            }
       } 
    }
    let li = document.createElement('li');
    if (all){
        li.innerText = "Wszystkie miasta w województwie pomorskim mają więcej niż 5000 osób i takich miast jest: " + counter;
    }
    else{
        li.innerText = "Nie wszystkie miasta w województwie pomorskim mają więcej niż 5000 osób. Liczba miast z ilościa większą niż 5000: " + counter;
    }

    g.appendChild(li);

}


loadCities();