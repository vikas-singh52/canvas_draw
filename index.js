const canvas = document.getElementById("canvas");
console.log(canvas);


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

canvas.addEventListener("mousedown",onmousedown);


let prev = [];
function onmousedown(e){
    prev = [e.clientX, e.clientY];
    canvas.addEventListener("mousemove",onmousemove);
    canvas.addEventListener("mouseup",onmouseup);
}
function onmouseup(e){
    canvas.removeEventListener("mousemove",onmousemove);
}

function onmousemove(e){
    let curr = [e.clientX, e.clientY];
    c.beginPath();
    c.moveTo(...prev);
    c.lineTo(...curr);
    c.stroke();
    c.closePath();
    prev = curr;

}






 