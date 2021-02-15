document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById('mycanvas');
    canvasEl.width = 1000;
    canvasEl.height = 1000;
    const ctx = canvasEl.getContext('2d');
    let color = 'red';
    
    // function fillShape() {
    //     ctx.clearRect(0, 0, 1000, 1000);
    //     if (color === 'red'){
    //         ctx.fillStyle = 'black';
    //         ctx.fillRect(0, 0, 300, 300);
    //         color = 'black';
    //     } else {
    //         ctx.fillStyle = 'red';
    //         ctx.fillRect(0, 0, 300, 300);
    //         color = 'red';
    //     }
    // }
    
    function fillShape() {
        let j = 0;
        ctx.clearRect(0, 0, 1000, 800);
        for (let i = 0; i < 299; i++){
            if (color === 'green'){
                ctx.fillStyle = 'black';
                ctx.fillRect(j, 0, 40, 800);
                color = 'black';
            } else if (color === 'black') {
                ctx.fillStyle = 'red';
                ctx.fillRect(j, 0, 20, 800);
                color = 'red';
            } else {
                ctx.fillStyle = 'green';
                ctx.fillRect(j, 0, 20, 800);
                color = 'green';
            }
            j += 10
        }
    }

    setInterval(fillShape, 200);
    

    // let j = 0
    // for (let i = 0; i < 300; i++) {
    //     if (i % 2 === 0) {
    //         ctx.fillStyle = 'black';
    //         ctx.fillRect(j, 0, 10, 1000);
    //         // j += 10
    //     } else {
    //         ctx.fillStyle = 'green';
    //         ctx.fillRect(j, 0, 10, 1000);
    //     }
    //     j += 10
    // }


});