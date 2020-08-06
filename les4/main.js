let text = document.querySelector('.text').textContent;

console.log(text.replace(/'/g, '"')); //Задание 1. Заменяет все одинарные кавычки двойными.

console.log(text.replace(/\B'/g, '"')); //Задание 2. Не заменяет одинарную кавычку внутри слова двойной.

//Задание 3
const name = document.getElementById('nameInput');
let regExp = new RegExp('[^a-z ]', 'g');
name.addEventListener('blur', function () {
    if (name.value.search(regExp) !== -1) {
        alert('Имя должно содержать только буквы');
    } else {
        console.log('Имя введено корректно');
    }

});