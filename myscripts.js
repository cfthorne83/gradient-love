let colorInput = document.querySelector('#colorpicker')
let hexInput = document.querySelector('#hex')
const body = document.body

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
    document.body.style.backgroundColor = color;
    // const div = document.createElement('div');
    // div.innerText = "hello";
    // div.style.color = color;
    // body.append(div);
});

colorInput.addEventListener('blur', () => {
    // let color = colorInput.value;
    // hexInput.value = color;
    // document.body.style.backgroundColor = color;
    const div = document.createElement('div');
    div.innerText = "hello";
    div.style.color = color;
    body.append(div);
});

// function handleBlur() {
//     const div = document.createElement('div');
//     div.innerText = "hello";
//     div.style.color = color;
//     body.append(div);
// }
