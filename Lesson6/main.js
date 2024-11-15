const title = document.getElementById('course-title')
title.textContent = 'Обновленное содержание курса 📘'
title.classList.remove('title')

const colorButton = document.querySelector('#color-button')
colorButton.setAttribute('title', 'Сгенерировать случайные цвета')
colorButton.style.padding ='5px 10px'
colorButton.style.color = 'gray'
colorButton.style.backgroundColor = 'lightblue'
colorButton.addEventListener('click', function() {
    const items = list.querySelectorAll('.item')
    for (let item of items) {
        item.style.color = getRandomColor()
    }
})

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
}

const list = document.querySelector('.list')

const domItem = list.querySelector('#dom')
domItem.innerHTML = '<a href="https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction">Взаимодействие с DOM ⬅</a>'
domItem.classList.add('current')

const items = list.querySelectorAll('.item')