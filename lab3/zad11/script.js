const url = "https://restcountries.com/v3.1/all";
const a = document.getElementById('a');
var clicked = new Array(25).fill(false);
const buttons = document.getElementById('buttons');
const numBtns = 5;
let currPage = 0;

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    x = uniqueArray(data);
    

  
    loadSubregions(data);
    setButtons();
    displayCurrent();
 
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

function uniqueArray(data){
    let x = [];
    for (elem of data){
        x.push(elem.subregion);
    }
    let unique = x.filter(onlyUnique);
    return unique;
}

function loadSubregions(data){
    let x = uniqueArray(data);
 
    let subCounter = 1;
    let counter = 0;
    for (elem of x){
        let divHeader = document.createElement('h1');
      
        divHeader.innerText = elem;
        divHeader.setAttribute('id', counter)
        divHeader.setAttribute('class', "subregions")
        a.appendChild(divHeader);
        let c = data.filter(sub => sub.subregion == elem);
        let ul = document.createElement('ul');
        ul.setAttribute('id', 'expand' + counter);
        ul.setAttribute('class', 'expand');
        addOnClick(divHeader, ul);
        let area = 0;
        let population = 0;
        createFirstLi(ul);
        for (i of c){
          
            area += i.area;
            population += i.population;
            createLi(counter, i, ul, subCounter - 1);
            a.appendChild(ul);
            subCounter++;
        }
        divHeader.innerText = elem + " " + "Population: " + population + " "+ "Area: " + area; 

        counter++;
        

    }

}
function createLi(n, elem, parentUl, counter){
    let ul = document.createElement('ul');
    ul.setAttribute('class', "countries");
    ul.setAttribute('id', 'countries' + counter);
    let liName = document.createElement('li');
    let liCapital = document.createElement('li');
    let liPopulation = document.createElement('li');
    let liArea = document.createElement('li');
    liName.setAttribute('id','name'+ n);
    liCapital.setAttribute('id','capital'+ n);
    liPopulation.setAttribute('id','population'+ n);
    liArea.setAttribute('id','area'+ n);
    liName.innerText = elem.name.common;
    liCapital.innerText = elem.capital;
    liPopulation.innerText = elem.population;
    liArea.innerText = elem.area;

    ul.appendChild(liName);
    ul.appendChild(liCapital);
    ul.appendChild(liPopulation);
    ul.appendChild(liArea);
    parentUl.appendChild(ul);
}
getData();

function addOnClick(h1, expand){
    h1.addEventListener('click', function(){
        if (clicked[this.id]){
            expand.style = "none";
            clicked[this.id] = false;
        }
        else{
            expand.style.display = "inline";
            clicked[this.id] = true;
        }
    })
}

function setButtons(){
    for (let i = 0; i < numBtns; i++){
        let btn = document.createElement('button');
        btn.setAttribute('id', 'btn' + i);
        btn.innerText = i;
        btn.addEventListener('click', function(){
            earaseEarlier();
            currPage = i;
            displayCurrent();})
        a.appendChild(btn);
    }
    const firstBtn = document.getElementById('btn0');
    firstBtn.style.marginLeft = "38vw";
}

function displayCurrent(){

    for (let i = currPage * 5; i < currPage * 5 + 5; i++){
        document.getElementById(i).style.display = "flex";
        console.log(document.getElementById(i));    
    }
    let curr = document.getElementById('btn' + currPage);
    curr.style.backgroundColor = "red";
    
}

function earaseEarlier(){
    for (let i = currPage * 5; i < currPage * 5 + 5; i++){
        document.getElementById(i).style.display = "none";
        console.log(document.getElementById(i));
        let expand = document.getElementById('expand' + i);
        if (clicked[i]){
            expand.style = "none";
            clicked[i] = false;
        }            
    }
    let curr = document.getElementById('btn' + currPage);
    curr.style.backgroundColor = "";
    
    
}

function createFirstLi(ul){
    let liName = document.createElement('li');
    let liCapital = document.createElement('li'); 
    let liPopulation = document.createElement('li'); 
    let liArea = document.createElement('li');
    liName.innerText = "Name";
    liCapital.innerText = "Capital";
    liPopulation.innerText = "Population";
    liArea.innerText = "Area";
    ul.appendChild(liName);
    ul.appendChild(liCapital);  
    ul.appendChild(liPopulation);  
    ul.appendChild(liArea);    
    
}