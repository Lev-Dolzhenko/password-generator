const allSymbols = {
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    lowerCase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    digits: '0123456789'.split(''),
    anotherSymbols: '!№;%:?*()_+="'.split('')
}



const input = document.querySelector('.input-password')
const lengthPassword = document.querySelector('.input-length');

const firstInput = document.querySelector('.first-input');
// lengthPassword.textContent = 2;
let pass = '';
let arr = [];

let list = document.createElement('ul');


list.classList.add('passwords-list')



const container = document.querySelector('.container-password');


// for (let i = 0; i < 3; i++) {
//     let elem = document.createElement('li');
//     list.appendChild(elem);
// }
container.appendChild(list)


const buttonGenerate = document.querySelector('.button-generate')
// ganeratePassword(3, [upperCase, lowerCase, digits])
function ganeratePassword(length, symbolsSets) {
    let availibleSymbolsSets = '';
    for (let symbolsSet of symbolsSets) {
        availibleSymbolsSets += (symbolsSet);
    }
    availibleSymbolsSets = availibleSymbolsSets.split(',');
    console.log(availibleSymbolsSets)

    for (let j = 0; j < 6; j++) {
        for (let i = 0; i < length; i++) {
            pass += (availibleSymbolsSets[Math.floor(Math.random() * availibleSymbolsSets.length)]);
        }
        console.log(pass);
        arr.push(pass);
        firstInput.value = pass
        /*----------------------------- */
        // if (j == 0) {
        //     input.value = pass;
        //     continue;
        // }

        let elem = document.createElement('li');
        elem.classList.add('password-item')
        let title = document.createElement('input');
        title.classList.add('input-password');
        title.classList.add('input-password--sup');
        title.value = pass;

        let copyButton = document.createElement('button');

        // Устанавливаем класс для кнопки
        copyButton.className = 'copy';

        // Создаем внутреннее содержимое кнопки, используя SVG-код
        copyButton.innerHTML = `
    <?xml version="1.0" encoding="utf-8"?>
    <svg width="40px" height="40px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.94605 4.99995L13.2541 4.99995C14.173 5.00498 15.0524 5.37487 15.6986 6.02825C16.3449 6.68163 16.7051 7.56497 16.7001 8.48395V12.716C16.7051 13.6349 16.3449 14.5183 15.6986 15.1717C15.0524 15.825 14.173 16.1949 13.2541 16.2H8.94605C8.02707 16.1949 7.14773 15.825 6.50148 15.1717C5.85522 14.5183 5.495 13.6349 5.50005 12.716L5.50005 8.48495C5.49473 7.5658 5.85484 6.6822 6.50112 6.0286C7.1474 5.375 8.0269 5.00498 8.94605 4.99995Z"
            stroke="rgb(201, 131, 1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.1671 19H14.9371C17.4857 18.9709 19.5284 16.8816 19.5001 14.333V9.666" stroke="rgb(201, 131, 1)"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    `
            ;

        elem.appendChild(title);
        elem.appendChild(copyButton);
        list.appendChild(elem);
        pass = '';
        // list.innerHTML += 
        // `
        // <li class="password-item ">
        //         <p class="input-password" style="width: 92.5%;">${pass}</p>
        //         <button class = 'copy'>
        //             <?xml version="1.0" encoding="utf-8"?>
        //             <svg width="40px" height="40px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path fill-rule="evenodd" clip-rule="evenodd"
        //                     d="M8.94605 4.99995L13.2541 4.99995C14.173 5.00498 15.0524 5.37487 15.6986 6.02825C16.3449 6.68163 16.7051 7.56497 16.7001 8.48395V12.716C16.7051 13.6349 16.3449 14.5183 15.6986 15.1717C15.0524 15.825 14.173 16.1949 13.2541 16.2H8.94605C8.02707 16.1949 7.14773 15.825 6.50148 15.1717C5.85522 14.5183 5.495 13.6349 5.50005 12.716L5.50005 8.48495C5.49473 7.5658 5.85484 6.6822 6.50112 6.0286C7.1474 5.375 8.0269 5.00498 8.94605 4.99995Z"
        //                     stroke="rgb(201, 131, 1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        //                 <path d="M10.1671 19H14.9371C17.4857 18.9709 19.5284 16.8816 19.5001 14.333V9.666" stroke="rgb(201, 131, 1)"
        //                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        //             </svg>
        //         </button>
        //     </li>
        // `
        /*----------------------------- */

        
        // input.textContent = pass;
        // arr.push(pass);
        // pass = ''
    }
    // for (let str of arr) {
    //     console.log(str)
    // }
    // const allPasswords = document.querySelectorAll('.input-password')
    // console.log(allPasswords)
    // const allButtonsCopy = document.querySelectorAll('.copy')
    // console.log(allButtonsCopy)
    // for (let i = 0; i < allButtonsCopy.length; i++) {
    //     allButtonsCopy[i].addEventListener('click', function() {
    //         allPasswords[i].select();
    //         document.execCommand('copy');
    //         window.getSelection().removeAllRanges();
    //         console.log('Текст успешно скопирован!');
    //     })
    // }

    const allButtonsCopy = document.querySelectorAll('.copy');
    const allPasswords = document.querySelectorAll('.input-password');

    allButtonsCopy.forEach((button, index) => {
        button.addEventListener('click', function () {
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = allPasswords[index].value;
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextarea);
            console.log('Текст успешно скопирован!');
        });
    });
}




const options = document.querySelectorAll('.options input')
let accessArr = [];

function accessOptions(option, id) {
    if (option.checked) {
        accessArr.push(allSymbols[id]);
    } else {
        accessArr = accessArr.filter((elem) => elem !== allSymbols[id]);
    }
    console.log(accessArr);
}
let tempArr = '';
options.forEach(option => {
    option.addEventListener('change', function () {
        tempArr += (accessOptions(option, option.id));
    })
})



buttonGenerate.addEventListener('click', function () {
    input.value = ''
    console.log(ganeratePassword(lengthPassword.value, accessArr));
})


window.addEventListener('load', function() {
    firstInput.value = '';
});

