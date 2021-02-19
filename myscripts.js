let colorInput = document.querySelector('#colorpicker')
let hexInput = document.querySelector('#hex')
const body = document.body

let colors = [];

colorInput.addEventListener('blur', () => {
    let color = colorInput.value;
    colors.push(color);
    hexInput.value = color;
    // document.body.style.backgroundColor = color;
    const div = document.createElement('div');
    div.class = 'selecteCd-color'
    div.style.backgroundColor = color;
    div.style.width = '50px';
    div.style.height = '50px';

    body.append(div);
});

let colorOne = document.querySelector('.color1') 
let colorTwo = document.querySelector('.color2')





