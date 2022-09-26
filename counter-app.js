let count = document.getElementById('count');
let result = document.getElementById('display');
let counter = 0;

function countIncreament() {
    counter += 1
    count.textContent = counter;
}

function save() {
    result.textContent += counter + " - " 
    counter = 0
    count.textContent = 0
}
