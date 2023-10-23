addEventListener("load", function(){
    this.document.querySelector("#location").innerHTML = "Ingolstadt";
    console.log("page fully loaded");
})

function retrieveData(){
    
}

document.addEventListener("click", function(event){
    animateButtons(event.target.className);
})

function animateButtons(pressedButton){
    var animator = document.querySelector("."+pressedButton);
    animator.classList.add("pressed");
    setTimeout(function(){
        animator.classList.remove("pressed");
    }, 100)

}