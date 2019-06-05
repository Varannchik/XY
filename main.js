//повторяет
let el=document.querySelector('.sq');
let dot=document.querySelector('.dot');
let x=0;
let y=0;
el.onmousemove = function(e) {
    x=e.pageX;
    y=e.pageY;      
    dot.style.top=y+220+'px';
    dot.style.left=x+'px'; 
}

//зеркальное 
let sq2=document.querySelector('.sq_z');
let dot_z=document.querySelector('.dot_z');
let x1=0;
let y1=0;
sq2.onmousemove = function(e) {
    x1=e.pageX;
    y1=e.pageY;      
    dot_z.style.top=-y1+460+'px';
    dot_z.style.left=x1+'px'; 
}



