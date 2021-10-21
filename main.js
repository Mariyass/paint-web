var mouseEvent="empty"
var last_x,last_y;
var color="black";
var width_of_line=1;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    mouseEvent="mouseDown";
    width_of_line=document.getElementById("width_of_line").value;
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX - canvas.offsetLeft;
    current_y=e.clientY - canvas.offsetTop;

    if(mouseEvent=="mouseDown"){

        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;

}
 canvas.addEventListener("mouseup",my_mouseup);

 function my_mouseup(){
     mouseEvent="mouseUp";

 }
 canvas.addEventListener("mouseleave",my_mouseleave);

 function my_mouseleave(){
     mouseEvent="mouseleave"
 }
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}