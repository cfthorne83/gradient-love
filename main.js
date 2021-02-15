document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById('mycanvas');
    canvasEl.width = 1000;
    canvasEl.height = 1000;
    const ctx = canvasEl.getContext('2d');
    
    let color = 'red';
    function draw() {
        let j = 0;
        ctx.clearRect(0, 0, 1000, 800);
        for (let i = 0; i < 299; i++){
            if (color === 'green'){
                ctx.fillStyle = 'rgb(182, 220, 253)';
                ctx.fillRect(j, 0, 20, 1000);
                color = 'black';
            } else if (color === 'black') {
                ctx.fillStyle = 'rgb(124, 191, 250)';
                ctx.fillRect(j, 0, 20, 1000);
                color = 'red';
            } else {
                ctx.fillStyle = 'rgb(194, 194, 194)';
                ctx.fillRect(j, 0, 20, 1000);
                color = 'green';
            }
            j += 20
            // ctx.fillStyle = 'pink';
            // ctx.fillRect(0, 0, 1000, 1000);
        }
    }
    
    setInterval(draw, 500);

    var opacity=0; 
    var intervalID=0; 
    window.onload=fadeout; 
        function fadeout(){ 
               setInterval(hide, 200); 
        } 
    function hide(){ 
          var body=document.getElementById("splatter"); 
          opacity = 
    Number(window.getComputedStyle(body).getPropertyValue("opacity")) 
  
            if(opacity>0){ 
                   opacity=opacity-0.1; 
                           body.style.opacity=opacity 
            } 
            else{ 
                clearInterval(intervalID);  
            } 
        }  
});