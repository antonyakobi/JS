const list = document.querySelector(".list");

// Делегируем обработку кликов на уровне списка
list.addEventListener("click", function (event) {
  const targetElement = event.target;

  // Проверяем, был ли клик совершен по элементу списка (li с классом 'item')
  if (targetElement.classList.contains("item")) {
    targetElement.classList.toggle("done");
  }
});

const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.querySelector(".input");
  const text = input.value;
  input.value = "";

  const list = document.querySelector(".list");

  // Создаем новый элемент списка
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = text;

  // Добавляем новый элемент в список
  list.append(newItem);
});

const resetButton = document.querySelector("#reset-button");
let timeoutId; // Хранение идентификатора таймера
let isTimerStarted = false; // Флаг, указывающий на то, запущен ли таймер

resetButton.addEventListener("click", function () {
  if (isTimerStarted) {
    clearTimeout(timeoutId); // Отменяем таймер
    resetButton.textContent = "Сброс";
    isTimerStarted = false;
  } else {
    resetButton.textContent = "Отмена";
    isTimerStarted = true;

    timeoutId = setTimeout(function () {
      const items = document.querySelectorAll(".item");

      for (let i = 0; i < items.length; i++) {
        const listItem = items[i];

        listItem.classList.remove("done");
      }

      resetButton.textContent = "Сброс";
      isTimerStarted = false;
    }, 3000);
  }
});
