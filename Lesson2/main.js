let userChoice // Выбор пользователя
let computerChoice // Выбор компьютера
let isWinner = false // Флаг для определения наличия победителя
 
while (!isWinner) {
  userChoice = prompt('Выбери камень, ножницы или бумага:')
  userChoice = userChoice.toLowerCase()
 
  let randomNum = Math.floor(Math.random() * 3) // Генерация случайного числа от 0 до 2
  if (randomNum === 0) {
    computerChoice = 'камень'
  } else if (randomNum === 1) {
    computerChoice = 'ножницы'
  } else {
    computerChoice = 'бумага'
  }
 
  if (
    userChoice === 'камень' ||
    userChoice === 'ножницы' ||
    userChoice === 'бумага'
  ) {
    alert('Компьютер выбрал: ' + computerChoice)
 
    if (userChoice === computerChoice) {
      alert('Ничья, играем ещё раз!')
    } else if (
      (userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага') ||
      (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
      alert('Ты выиграл!')
      isWinner = true
    } else {
      alert('Ты проиграл!')
      isWinner = true
    }
  } else {
    alert('Пожалуйста, введи корректный ход: камень, ножницы или бумага.')
  }
}