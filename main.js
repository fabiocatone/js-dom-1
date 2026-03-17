const imgEl = document.querySelector("img")
const buttEl = document.querySelector ("button")
console.log(imgEl);
console.log(buttEl);



buttEl.addEventListener("click", function () {
     console.log("clicked");
    if (buttEl.innerHTML.includes("Accendi")) {
       imgEl.src = "./img/yellow_lamp.png";
    buttEl.innerHTML = "Spegni"} 
       else if (buttEl.innerHTML = "Spegni") {
        imgEl.src = "./img/white_lamp.png";
        buttEl.innerHTML = "Accendi"
       }
    }
     )
