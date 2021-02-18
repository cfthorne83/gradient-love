let colorInput = document.querySelector('#colorpicker')
let hexInput = document.querySelector('#hex')
const body = document.body

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
});

let colors = [];
let colorOne; 
let colorTwo;
let colorThree;

colorInput.addEventListener('blur', () => {
    let color = colorInput.value;
    colors.push(color);
    // hexInput.value = color;
    // document.body.style.backgroundColor = color;
    const div = document.createElement('div');
    div.class = 'selecteCd-color'
    div.style.backgroundColor = color;
    div.style.width = '50px';
    div.style.height = '50px';

    body.append(div);
});

let background = document.querySelector('.background')
// colors.forEach(color => {
//     background.style.backgroundImage = linearGradient()
// });

