document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    console.log()
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
    }
}