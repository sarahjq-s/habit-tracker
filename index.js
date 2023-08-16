let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function minus(){
   if (count > 0){
    count -= 1
    countEl.textContent = count
}

function plus(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let waterCount = count + " - "
    saveEl.textContent += waterCount
    countEl.textContent = 0
    count = 0
}

function reset(){
    saveEl.textContent = ""
   countEl.textContent = 0
    count = 0
}
