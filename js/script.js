const btn = document.querySelector(".burgerNav");
const overlay = document.getElementById("navLinks");

let clickCounter = 1;

btn.addEventListener("click", () =>{
    return navState(clickCounter++);
}
);

function navState(value){ 
    if(value == 1){
        clickCounter = 0;
        return overlay.style.width = "50%";
    }else if (value == 0){
        return overlay.style.width = "0%";
    }
}
