// const pet = {
//     name: 'Strider',
//     happiness: 50,
//     hunger: 50,
// }
//   // К свойствам объекта можно обратится с помощью точечной нотации
//   console.log(pet.hunger) // 50

  // Метод для приветствия
  const pet = {
    name: 'Strider',
    happiness: 50,
    hunger: 50,
    health: {
      hygiene: 75,
      energy: 50,
      dental: 100,
      coat: 30,
    },
    sayHi() {
      console.log('Meow!')
    },
    checkStatus() {
      console.log(`Счастье: ${this.happiness}, Голод: ${this.hunger}`)
    },
    feedPet(foodQuantity) {
      this.hunger -= foodQuantity
      if (this.hunger < 0) {
        this.hunger = 0;
      }
      console.log(`Питомец покормлен! Текущий голод: ${this.hunger}`)
    }
  }
   
  pet.sayHi() // 'Meow!'
  pet.checkStatus()
  pet.feedPet(20)
  console.log(pet);

  function generateHealthReport(pet) {
    console.log(`Отчет о здоровье ${pet.name}:`)
    const health = pet.health
   
    for (const key in health) {
      console.log(`${key}: ${health[key]}`)
    }
  }
   
  generateHealthReport(pet)
  
  
