const imgEl = document.querySelector("img")
console.log(imgEl);
imgEl.addEventListener("click", function (){
    console.log("clicked");
    
    imgEl.src = "./img/yellow_lamp.png"
})