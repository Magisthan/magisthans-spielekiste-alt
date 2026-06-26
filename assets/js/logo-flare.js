document.addEventListener('DOMContentLoaded',()=>{
 const g=document.querySelector('#flare');
 if(!g) return;
 const svg=g.ownerSVGElement;
 const vb=svg.viewBox.baseVal.width;
 function run(){
   g.animate([
     {transform:'translateX(-120px)',opacity:0},
     {offset:.08,opacity:.85},
     {transform:`translateX(${vb+120}px)`,opacity:.85},
     {offset:.11,opacity:0},
     {transform:`translateX(${vb+120}px)`,opacity:0}
   ],{duration:18000,iterations:1,easing:'linear'});
 }
 setTimeout(run,2000);
 setInterval(run,20000);
});
