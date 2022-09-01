const containerElement = document.querySelector(".container");
let mouseX = document.querySelector(".X");
let mouseY = document.querySelector(".Y");
window.addEventListener('mousemove', (event) =>{
    mouseX.innerHTML = event.screenX;
    mouseY.innerHTML = event.screenY;
});