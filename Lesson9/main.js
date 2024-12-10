const favoriteBooks = [
  {
    id: 1,
    title: "Head First JavaScript Programming",
    author: "Eric Freeman",
    price: 29.99,
    genre: "Programming",
  },
  {
    id: 2,
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    price: 39.99,
    genre: "Programming",
  },
  {
    id: 3,
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    price: 49.99,
    genre: "Programming",
  },
  {
    id: 4,
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    price: 29.99,
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "The Witcher",
    author: "Andrzej Sapkowski",
    price: 19.99,
    genre: "Fantasy",
  },
];

// Функция, которая принимает массив книг и выводит в консоль их авторов.

function printBookAuthors(books) {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    console.log(book.author);
  }
}
printBookAuthors(favoriteBooks);

// Функция в выражении:

// const printBookAuthors = function (books) {
//   for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     console.log(book.author);
//   }
// };

// // Стрелочная функция:

// const printBookAuthors = (books) => {
//   for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     console.log(book.author);
//   }
// };

// // напишем функцию, которая принимает массив книг и выводит в консоль цену и названия дешёвых книг (стоимостью меньше 30)

// const printCheapBooks = (books) => {
//   for (let i = 0; i < books.length; i++) {
//     const book = books[i];

//     if (book.price < 30) {
//       console.log(`${book.title} - ${book.price}`);
//     }
//   }
// };

// printCheapBooks(favoriteBooks);

// // напишем функцию, которая перебирает массив, и передадим в неё другую функцию, которая будет что-то делать с каждым элементом массива.

// const processBooks = (books, callback) => {
//   for (let i = 0; i < books.length; i++) {
//     const book = books[i];

//     callback(book);
//   }
// };

// // Теперь используем эту функцию для вывода авторов и поиска дешёвых книг:

// const logAuthor = (book) => {
//   console.log(book.author);
// };

// const logCheapBooks = (book) => {
//   if (book.price < 30) {
//     console.log(`${book.title} - ${book.price}`);
//   }
// };
// // Использование функции processBooks с разными колбэками
// processBooks(favoriteBooks, logAuthor); // Выводит авторов всех книг
// processBooks(favoriteBooks, logCheapBooks); // Выводит названия и цены дешёвых книг

// // forEach — метод массива, который вызывает, переданную в параметре, функцию один раз для каждого элемента.
// const logAuthor = (book) => {
//   console.log(book.author);
// };

// const logCheapBooks = (book) => {
//   if (book.price < 30) {
//     console.log(`${book.title} - ${book.price}`);
//   }
// };

// favoriteBooks.forEach(logAuthor);
// favoriteBooks.forEach(logCheapBooks);

// // Очень часто колбэки определяются прямо в самом методе forEach с использованием лаконичного синтаксиса стрелочных функций:
// favoriteBooks.forEach((book) => {
//   console.log(book.author);
// });

// favoriteBooks.forEach((book) => {
//   if (book.price < 30) {
//     console.log(`${book.title} - ${book.price}`);
//   }
// });

// // В итерационных методах колбэки также могут принимать вторым параметром индекс текущего элемента:
// favoriteBooks.forEach((book, index) => {
//   console.log(book.author, index);
// });

// // filter — используется для создания нового массива, содержащего только те элементы из исходного массива, которые удовлетворяют определённому условию, заданному в колбэке.

// const programmingBooks = favoriteBooks.filter((book) => {
//   return book.genre === "Programming";
// });
// // или сокращённо:
// // const programmingBooks = favoriteBooks.filter(book => book.genre === 'Programming')
// // В данном примере filter перебирает каждый элемент массива favoriteBooks и применяет к нему функцию, которая возвращает true или false. Если функция возвращает true, элемент добавляется в новый массив programmingBooks.

// // map — преобразует каждый элемент массива с помощью колбэка. Возвращает новый массив, где каждый элемент был преобразован указанной функцией.

// // Давайте используем map для создания списка названий книг из нашего массива favoriteBooks. Это типичный пример использования map для извлечения определённой информации из массива объектов:
// const bookTitles = favoriteBooks.map((book) => {
//   return book.title;
// });

// // или сокращённо:
// // const bookTitles = favoriteBooks.map(book => book.title)

// console.log(bookTitles);

// // Метод sort меняет порядок элементов в исходном массиве . По умолчанию, sort сортирует элементы как строки в лексикографическом порядке (по алфавиту):
 
// const numbers = [10, 5, 100, 2, 1000]
// numbers.sort()
// console.log(numbers) // [10, 100, 1000, 2, 5]

// // Функция сравнения принимает два аргумента (два элемента массива) и возвращает
// numbers.sort((prev, next) => {
//   if (prev > next) {
//     return 1 // элементы меняются местами
//   } else if (prev === next) {
//     return 0
//   } else {
//     return -1
//   }
// })
// // ИЛИ сокращённый вариант 
// numbers.sort((prev, next) => {
//   return prev - next
// })

// // Сортируем книги по цене: 

// favoriteBooks.sort((prev, next) => {
//   return prev.price - next.price
// })
 
// console.log(favoriteBooks)
 
// // Или сокращённый вариант
// // favoriteBooks.sort((prev, next) => prev.price - next.price)


// // Существует также совсем новый метод toSorted. Он работает как метод sort, но возвращает новый массив, не меняя исходный. 