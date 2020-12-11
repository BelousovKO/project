window.onload = function () {
    let elements = document.querySelectorAll('*');
    let countElements = elements.length;
    let randomNumber;
    let red;
    let green;
    let blue;
    let randomColor;
    let numberOfColor = 50;
    let i = 0;
    let stylesArray = [];

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
        if (i < numberOfColor) {
            randomElement();
            randomColorResult();
            if (!stylesArray[i]) {
                stylesArray[i] = document.createElement('style');
                document.getElementsByTagName('head')[0].appendChild(stylesArray[i]);
            }
            stylesArray[i].innerHTML = `.myClass${i} { background-color: ${randomColor};}`;
            let foundClass;
            const elementClassList = elements[randomNumber].classList;
            for (let i = 0; i < elementClassList.length; i++) {
                if (elementClassList.item(i).includes('myClass')) {
                    foundClass = elementClassList.item(i);
                    break;
                }
            }
            if (foundClass) {
                elementClassList.remove(foundClass);
            }
            elements[randomNumber].classList.add(`myClass${i}`);
            i++;
        } else {
            i = 0;
        }
    }, 2000);

    setInterval(() => {
        randomElement();
        let foundClass;
        const elementClassList = elements[randomNumber].classList;
        for (let i = 0; i < elementClassList.length; i++) {
            if (elementClassList.item(i).includes('myClass')) {
                foundClass = elementClassList.item(i);
                break;
            }
        }
        if (foundClass) {
            elementClassList.remove(foundClass);
            console.log('removed ', foundClass);
        }
    }, 2000);
};