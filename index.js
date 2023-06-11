for(var i=0;i< document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",buttonclick)
}
function buttonclick(){
    var button=this.innerHTML;
    sound2(button);
    animationbutton(button);
    
}
document.addEventListener("keypress",function(event){
    sound2(event.key);
    animationbutton(event.key);
});
function sound2(key){
    switch(key){
        case "w":
            var sound1=new Audio ("sounds/tom-1.mp3");
            sound1.play();
            break;
        case "a":
            var sound1=new Audio ("sounds/tom-2.mp3");
            sound1.play();
            break;
        case "s":
            var sound1=new Audio ("sounds/tom-3.mp3");
            sound1.play();
            break;
         case "d":
            var sound1=new Audio ("sounds/tom-4.mp3");
            sound1.play();
            break;
        case "j":
            var sound1=new Audio ("sounds/snare.mp3");
            sound1.play();
            break;
        case "k":
            var sound1=new Audio ("sounds/kick-bass.mp3");
            sound1.play();
            break;
         case "l":
            var sound1=new Audio ("sounds/crash.mp3");
            sound1.play();
            break;
        default :
           break;
    }
   
}
function animationbutton(currvalue){
    var currentkey = document.querySelector("."+currvalue);
    currentkey.classList.add("pressed");
    setTimeout(function(){
        currentkey.classList.remove("pressed"); 
    },100)
}