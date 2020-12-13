export default function () {

    let infoCards = [
        {
            "img": "img/dog-1.png",
            "breed": "Айну",
            "price": "12 000₽",
            "hunter": "hunter",
            "companion": "companion",
            "decorative": 0,
            "service": 0,
            "noFear": 0,
            "shedsLittle": 0,
            "excellentHealth": 0,
            "goodObedience": 0,
            "veryDevoted": 0
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
    ];

    const menuFilter = document.createElement("div");
    menuFilter.classList.add('menuFilter');
    let filterCount = 0;
    let buttonFilter = document.createElement("span");
    buttonFilter.classList.add('buttonFilter');
    buttonFilter.textContent = 'Показать';
    menuFilter.textContent = `Найдено совпадений: ${filterCount} `;
    menuFilter.appendChild(buttonFilter);
    let allCheckboxLabel = document.querySelectorAll('.label');
    let allCheckbox = document.querySelectorAll('.checkbox');


    function init() {

        const handler1 = (event) => {
            menuFilter.style.display = 'none';
            event.path[2].appendChild(menuFilter);
            setTimeout(() => {
                menuFilter.style.display = 'block';
            }, 600);
        };
        allCheckboxLabel.forEach(elem => {
                elem.addEventListener('click', handler1);
            }
        )

        const handler2 = () => {
            let hitCounter = 0;
            let n = 0;
            let checkboxCount = 0;
            allCheckbox.forEach(elem => {
                if (elem.checked) {
                    console.log(elem.id);
                    infoCards.forEach(card => {
                        if (card.hunter === elem.id ||
                            card.companion === elem.id ||
                            card.decorative === elem.id ||
                            card.service === elem.id ||
                            card.noFear === elem.id ||
                            card.shedsLittle === elem.id ||
                            card.excellentHealth === elem.id ||
                            card.goodObedience === elem.id ||
                            card.veryDevoted === elem.id) {
                            console.log('Совпадение');
                            n = 1;
                        } else {
                            n = 0;
                        }
                        hitCounter=hitCounter+n;
                        console.log('Всего совпадений: ' + hitCounter);
                    });
                    checkboxCount++;
                }
            });
            hitCounter=0;
            console.log('отмечено чекбоксов: ' + checkboxCount)
        };
        allCheckboxLabel.forEach(elem => {
                elem.addEventListener('click', handler2);
            }
        );
    }

    init();
}
