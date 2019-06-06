
let el=document.querySelector('.sq');
let dot=document.querySelector('.dot');
let dot_z=document.querySelector('.dot_z');
let x=0;
let y=0;
el.onmousemove = function(e) {
 
    if(e.target.closest('.sq')){
        let target = e.target.closest('.sq'); 
        let targetC = target.getBoundingClientRect();
         x = e.clientX - targetC.left;
         y = e.clientY - targetC.top;
         
         dot.style.top=y+20+'px';
         dot.style.left=x+240+'px'; 
         dot_z.style.top=-y+440+'px';
         dot_z.style.left=x+20+'px'; 
        
      }
}






