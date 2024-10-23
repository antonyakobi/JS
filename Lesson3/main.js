// Объявляем глобальную переменную для хранения золота
let gold = 100

// Попытка построить башню
// let buildingName = 'Tower'
// let costGold = 30

// // проверяем, хватает ли нам золота для строительства
// if (gold >= costGold) {
//     // вычитаем золото
//     gold -= costGold // то же, что gold = gold - costGold
//     console.log(`${buildingName}: work complete!`);
// } else {
//     console.log(`${buildingName}: not enough resources!`);
// }

// // Попытка построить кузницу
// buildingName = 'Blacksmith'
// costGold = 140
 
// if (gold >= costGold) {
//     gold -= costGold
//     console.log(`${buildingName}: work complete!`)
// } else {
//     console.log(`${buildingName}: not enough resources!`)
// }

// function createBuilding(buildingName, costGold) {
//     // Тело функции будет реализовано на следующих шагах
//     if (gold >= costGold) {
//         gold -= costGold
//         console.log(`${buildingName}: work complete!`)
//     } else {
//         console.log(`${buildingName}: not enough resources!`)
//     }
// }

// Рефакторинг функции
function createBuilding(buildingName, costGold) {
    // Создаем переменную для проверки количества ресурса
    const hasEnoughGold = gold >= costGold

    if (hasEnoughGold) {
        gold -= costGold
        console.log(`${buildingName}: work complete!`)
    } else {
        console.log(`${buildingName}: not enough resources!`)
    }
}

// Вызов функции
createBuilding('Tower', 30) // Строим башню, золота хватает
createBuilding('Blacksmith', 140) // Строить кузницу, золота не хватает

// // Функция для увеличения ресурсов
// function increaseResource(currentAmount, increment) {
//     return currentAmount + increment
// }

// // Увеличение золота
// gold = increaseResource(gold, 50)
// console.log(`New amount of gold: ${gold}`)

// function increaseResource(currentAmount, increment) {
//     return currentAmount + increment;
// }

//   // Вызов функции без второго параметра
// gold = increaseResource(gold)
// console.log('New amount of gold: ' + gold) // New amount of gold: NaN

function increaseResource(currentAmount, increment = 10) {
    return currentAmount + increment
}

// Вызов функции без второго параметра
gold = increaseResource(gold)
console.log('New amount of gold: ' + gold) // New amount of gold: 80

// Вызов функции с параметром
gold = increaseResource(gold, 100)
console.log('New amount of gold: ' + gold) // New amount of gold: 180