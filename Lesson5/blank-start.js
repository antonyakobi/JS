// Дайте имя вашему виртуальному питомцу
let name = 'Strider'
// Состояние питомца
let happiness = 50
let hunger = 50

// Функция приветствиия
function sayHi () {
    console.log('Meow!')
}

// Функция для проверки состояния питомца
function checkStatus() {
    console.log(`Счастье: ${happiness}, Голод: ${hunger}`)
}

// Функция для кормления питомца
function feedPet(foodQuantity) {
    hunger -= foodQuantity // // то же самое, что и hunger = hunger - foodQuantity

    if (hunger < 0) {
    hunger = 0
}
console.log('Питомец покормлен!')
}