let elements = document.querySelectorAll('*');
let countElements = elements.length;
let randomNumber;
let red;
let green;
let blue;
let randomColor;
let style = document.createElement('style');


let randomColorResult = () => {
    red = Math.floor(Math.random() * (255 - 1) + 1);
    green = Math.floor(Math.random() * (255 - 1) + 1);
    blue = Math.floor(Math.random() * (255 - 1) + 1);
    randomColor = 'rgb(' + red + ',' + green + "," + blue + ')';
};

let randomElement = () => {
    randomNumber = Math.floor(Math.random() * (countElements - 1) + 1);
};

setInterval(() => {
    randomElement();
    randomColorResult();
    style.innerHTML = `.cssClass { background-color: ${randomColor};}`;
    elements[randomNumber].classList.add('cssClass');
    document.getElementsByTagName('head')[0].appendChild(style);

}, 2000);

setInterval(() => {
    randomElement();
    elements[randomNumber].classList.remove('cssClass');
    }, 2000);


