window.onload = function () {
    let infoCards = [
        {
            "img": "img/dog-1.png",
            "breed": "Айну",
            "price": "12 000₽",
            "hunter": 1,
            "companion": 1,
            "decorative": 0,
            "service": 1,
            "noFear": 0,
            "shedsLittle": 0,
            "excellentHealth": 1,
            "goodObedience": 1,
            "veryDevoted": 1
        },
        {
            "img": "img/dog-2.png",
            "breed": "Афганская борзая",
            "price": "13 000₽",
            "hunter": 1,
            "companion": 0,
            "decorative": 0,
            "service": 0,
            "noFear": 1,
            "shedsLittle": 0,
            "excellentHealth": 0,
            "goodObedience": 1,
            "veryDevoted": 0
        },
        {
            "img": "img/dog-3.png",
            "breed": "Барбет",
            "price": "14 000₽",
            "hunter": 1,
            "companion": 1,
            "decorative": 0,
            "service": 0,
            "noFear": 0,
            "shedsLittle": 0,
            "excellentHealth": 1,
            "goodObedience": 1,
            "veryDevoted": 1
        },
        {
            "img": "img/dog-4.png",
            "breed": "Бассет",
            "price": "15 000₽",
            "hunter": 1,
            "companion": 1,
            "decorative": 0,
            "service": 0,
            "noFear": 0,
            "shedsLittle": 1,
            "excellentHealth": 1,
            "goodObedience": 1,
            "veryDevoted": 1
        },
        {
            "img": "img/dog-5.png",
            "breed": "Легавой",
            "price": "16 000₽",
            "hunter": 1,
            "companion": 1,
            "decorative": 0,
            "service": 0,
            "noFear": 1,
            "shedsLittle": 1,
            "excellentHealth": 1,
            "goodObedience": 1,
            "veryDevoted": 1
        },
        {
            "img": "img/dog-6.png",
            "breed": "Веттерхун",
            "price": "17 000₽",
            "hunter": 1,
            "companion": 1,
            "decorative": 0,
            "service": 1,
            "noFear": 1,
            "shedsLittle": 0,
            "excellentHealth": 1,
            "goodObedience": 1,
            "veryDevoted": 1
        },
        {
            "img": "img/dog-7.png",
            "breed": "Древера",
            "price": "18 000₽",
            "hunter": 1,
            "companion": 1,
            "decorative": 0,
            "service": 1,
            "noFear": 1,
            "shedsLittle": 1,
            "excellentHealth": 0,
            "goodObedience": 1,
            "veryDevoted": 1
        },
        {
            "img": "img/dog-8.png",
            "breed": "Ирландский терьер",
            "price": "19 000₽",
            "hunter": 1,
            "companion": 0,
            "decorative": 0,
            "service": 1,
            "noFear": 1,
            "shedsLittle": 0,
            "excellentHealth": 1,
            "goodObedience": 0,
            "veryDevoted": 1
        },
        {
            "img": "img/dog-9.png",
            "breed": "Амереканский кокер",
            "price": "20 000₽",
            "hunter": 0,
            "companion": 1,
            "decorative": 1,
            "service": 0,
            "noFear": 0,
            "shedsLittle": 0,
            "excellentHealth": 0,
            "goodObedience": 1,
            "veryDevoted": 1
        },
        {
            "img": "img/dog-10.png",
            "breed": "Английский Кокер",
            "price": "21 000₽",
            "hunter": 0,
            "companion": 1,
            "decorative": 1,
            "service": 1,
            "noFear": 0,
            "shedsLittle": 0,
            "excellentHealth": 0,
            "goodObedience": 1,
            "veryDevoted": 1
        },
        {
            "img": "img/dog-11.png",
            "breed": "Дункер",
            "price": "22 000₽",
            "hunter": 1,
            "companion": 1,
            "decorative": 0,
            "service": 0,
            "noFear": 1,
            "shedsLittle": 1,
            "excellentHealth": 1,
            "goodObedience": 1,
            "veryDevoted": 1
        },
        {
            "img": "img/dog-12.png",
            "breed": "Спаниель",
            "price": "23 000₽",
            "hunter": 1,
            "companion": 1,
            "decorative": 0,
            "service": 1,
            "noFear": 0,
            "shedsLittle": 0,
            "excellentHealth": 1,
            "goodObedience": 1,
            "veryDevoted": 1
        }
    ]

    const randomSortCards = infoCards.sort(function () {
        return Math.random() - 0.5;
    });
    let parentItem = document.querySelector('.product-section');
    let template = document.querySelector('.product-list__item');
    const fragment = document.createDocumentFragment();
    randomSortCards.forEach((infoCards) => {
        const item = template.cloneNode(true);
        item.querySelector('img').src = infoCards.img;
        item.querySelector('.breed').textContent = infoCards.breed;
        item.querySelector('.price').textContent = infoCards.price;
        fragment.appendChild(item);
        document.querySelector('.product-section').appendChild(fragment);
    });

    console.log(parentItem);
    parentItem.removeChild(parentItem.firstElementChild);

};