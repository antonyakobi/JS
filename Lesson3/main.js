// Объявляем глобальную переменную для хранения золота
let gold = 100

// Попытка построить башню
let buildingName = 'Tower'
let costGold = 30

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