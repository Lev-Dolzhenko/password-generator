/*-----Set of data-----*/

const allSymbols = {
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    lowerCase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    digits: '0123456789'.split(''),
    anotherSymbols: '!№;%:?*()_+="'.split('')
}

/*-----/Set of data-----*/

/*-----VARS----- */

const input = document.querySelector('.input-password')
const lengthPassword = document.querySelector('.input-length');
const firstInput = document.querySelector('.first-input');
const buttonGenerate = document.querySelector('.button-generate')
const allLabels = document.querySelectorAll('label')
const container = document.querySelector('.container-password');
const options = document.querySelectorAll('.options input');
const copyInfo = document.querySelector('.copy-info');
const showPopup = document.querySelector('.show-popup');
const hidePopup = document.querySelector('.hide-popup');

let accessArr = [];
let pass = '';
let arr = [];
let tempArr = '';

/*-----VARS----- */

/*-----CREATE-ELEMENT-----*/

let list = document.createElement('ul');
list.classList.add('passwords-list')
container.appendChild(list)

/*-----CREATE-ELEMENT-----*/


//ADD CLASS TO CHEKED OPTIONS
for (let i = 0; i < allLabels.length; i++) {
    const currLabel = allLabels[i];
    currLabel.addEventListener('click', function(event) {
        if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
            if (event.target.checked) {
                currLabel.classList.add('input-checked')
            } else {
                currLabel.classList.remove('input-checked')
            }
        }
    });
}

//GENERATE PASSWORDS
function ganeratePassword(length, symbolsSets) {
    let availibleSymbolsSets = '';
    for (let symbolsSet of symbolsSets) {
        availibleSymbolsSets += (symbolsSet);
    }
    availibleSymbolsSets = availibleSymbolsSets.split(',');

    for (let j = 0; j < 6; j++) {
        for (let i = 0; i < length; i++) {
            pass += (availibleSymbolsSets[Math.floor(Math.random() * availibleSymbolsSets.length)]);
        }
        arr.push(pass);
        firstInput.value = pass


        let elem = document.createElement('li');
        elem.classList.add('password-item')
        let title = document.createElement('input');
        title.readOnly = true;
        title.classList.add('input-password');
        title.classList.add('input-password--sup');
        title.value = pass;

        let copyButton = document.createElement('button');

        copyButton.className = 'copy';

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

    }


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
            copyInfo.classList.add('show-popup')
            setTimeout(function() {
                copyInfo.classList.remove('show-popup');    
            }, 2000);
        });
    });
}


//CHOSE OPTIONS FOR YOUR PASSWORD
function accessOptions(option, id) {
    if (option.checked) {
        accessArr.push(allSymbols[id]);
    } else {
        accessArr = accessArr.filter((elem) => elem !== allSymbols[id]);
    }
}

options.forEach(option => {
    option.addEventListener('change', function () {
        tempArr += (accessOptions(option, option.id));
    })
})

//BUTTON GENERATE
buttonGenerate.addEventListener('click', function () {
    input.value = ''
    console.log(ganeratePassword(lengthPassword.value, accessArr));
})


//AFTER REPEAT WEB INPUT CLEAR
window.addEventListener('load', function () {
    firstInput.value = '';
});
