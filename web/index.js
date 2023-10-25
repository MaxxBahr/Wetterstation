addEventListener("load", function(){
    this.document.querySelector("#location").innerHTML = "Ingolstadt";
    console.log("page fully loaded");
})

function retrieveData(){
    
}

$(".dashcontainer>div").click(function(event){
    event.currentTarget.classList.add("pressed");
    setTimeout(() =>{
        event.currentTarget.classList.remove("pressed");
    }, 300);
})



$(".data").on("click", function(e){
    e.preventDefault();
    $(".database").slideToggle();
})