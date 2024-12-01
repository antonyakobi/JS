// Оператор typeof
// Напишите функцию checktype, которая принимает один аргумент и возвращает его тип данных. Используйте typeof внутри функции. 

const checktype = (val) => {
    return typeof val
}
console.log(checktype(1));

// Возьми объект person и функцию. Необходимо проконсолить через forin все типы, которые лежат в ключах. 

const  person = {
    name: "Alice",
    age: 30,
    isEmployed: true
};

const foo = (person) => {
    for (const key in person) {
        console.log(typeof person[key])
    }
}
foo(person)

// Напишите функцию isString, которая принимает один аргумент и возвращает true, если тип аругмента - строка, и false в противном случае. 

const isString = (val) => {
    return typeof val === 'string'
}
console.log(isString(2));
console.log(isString("ser"));

// Используйте цикл, чтобы пройтись по массиву и вывести тип каждого элемента. 
const arr = ['apple', 'orange', 100200, true, 200100300]

const foot = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(typeof arr[i]);
    }
}
foot(arr)

// Напишите функцию chechUndefined, которая принимает массив и возвращает количество элементов, равных undefined

const chechUndefined = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
            count++
        }
    }
    return count
}
console.log(chechUndefined([1, undefined, 3, undefined, 5]));

// Создайте функцию replaceNull, которая принимает объект и заменяет все значения null на строку "No value". 

const replaceNull = (obj) => {
    for (const key in obj) {
        if (obj[key] === null) {
            obj[key] = "No value"
        }
    }
    return obj
}
console.log(replaceNull({a: null, b: 2, c: null}));

// Создайте функцию filterNullUndefined, которая принимает массив и возвращает новый массив, содержащий только элементы, котораые не равны null или undefined. 

const filterNullUndefined = (arr) => {
    return arr.filter(el => el !== null && el !== undefined)
}
console.log(filterNullUndefined([1, null, 2, undefined, 3]));

// NaN
console.log(isNaN(1 + '1')) //false '11'
console.log(isNaN(1 + 1)) //false 
console.log(isNaN(1 / 0)) //false, так как выдаст infinity (бесконечность), а это число
console.log(isNaN('abs')) //true, так как не сможет его проеобразовать в число

// Напишите функцию sumExceptNaN, которая принимает массив чисел и возвращает их сумму, игнорируя NaN значения. 

const sumExceptNaN = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            sum += arr[i]
        }
    }
    return sum
}
console.log(sumExceptNaN([1, NaN, 2, NaN, 3]))

// Создайте функцию isReallyNaN, которая принимает значение и возвращает true, если оно является NaN. Используйте Number.isNaN()

const isReallyNaN = (val) => {
    return Number.isNaN(val)
}
console.log(isReallyNaN(NaN));
console.log(isReallyNaN('NaN'));

// Напишите Функцию compareNumberAndString, которая принимает число и строку, и возвращает true, если они равны при нестрогом сравнеии, и false в противном случае. 

const compareNumberAndString = (num, str) => {
    return num == str
}
console.log(compareNumberAndString(5, '5'));
console.log(compareNumberAndString(5, 'five'));

// Напишите функцию numberString, которая принимает число и возвращает его строковое представление. 

const numberString = (num) => {
    return String(num)
}
console.log(numberString(123));
console.log(numberString(0));

// Напишите функцию canBeConvertedToNumber, которая принимает строку и возвращает true, если она может быть преобразована в число, и false в противном случае. 

const canBeConvertedToNumber = (val) => {
    return !isNaN(val)
}
console.log(canBeConvertedToNumber("123"));
console.log(canBeConvertedToNumber("abc"));

// Псевдоистина и псевдоложь 

function checkTruthyFalsy(value) {
    if (value) {
        console.log('Значение является всевдоистинным (truthy)');
    } else {
        console.log('Значение является всевдоложным (falsy)')
    }
}
checkTruthyFalsy(null)
checkTruthyFalsy(NaN)
checkTruthyFalsy(' ')
checkTruthyFalsy(0)
checkTruthyFalsy('Hello')

// slice и splice 

// slice
// •    Назначение: Извлекает часть массива и возвращает новый массив.
// •    Изменяет оригинальный массив: Нет, slice не изменяет исходный массив.
// •    Аргументы:
// •    start: начальный индекс (включительно).
// •    end: конечный индекс (не включая).
// const array = [1, 2, 3, 4, 5];
// const slicedArr = array.slice(1, 4) //[2,3,4]
// console.log(slicedArr);

// const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig']
// Через slice
// const res = fruits.slice(1, 3)
// console.log(res);

// Через цикл фор (подобие Слайс)
// const res = (fruits, start, end) => {
//     const resArr = []
//     for (let i = start; i < end; i++) {
//         resArr.push(fruits[i])
//     }
//     return resArr
// }
// console.log(res(fruits, 1, 3));

// 2ой способ. 
// const res = (fruits, start, end) => {
//     const arr = []
//     fruits.map((element, index) => {
//         if (index >= start && index < end) {
//             arr.push(element)
//         }
//     })
//     return arr
// }
// console.log(res(fruits, 1, 3));

// Метод reduce просто.

// const arrr = [1, 2, 3, 4]
// const ress = (arrr) => {
//     return arrr.reduce((el, acc) => {
//         return acc += el
//     }, 0)
// }
// console.log(ress(arrr));

// 3ий способ через reduse

// const res = (fruits, start, end) => {
//     return fruits.reduce((acc, el, i) => {
//         if (i >= start && i < end) {
//             acc.push(el)
//         }
//         return acc
//     }, [])
// }
// console.log(res(fruits, 1, 3));


// splice
// •    Назначение: Изменяет содержимое массива, удаляя или добавляя элементы.
// •    Изменяет оригинальный массив: Да, splice изменяет исходный массив.
// •    Аргументы:
// •    start: начальный индекс для изменения.
// •    deleteCount: количество элементов для удаления.
// •    items: элементы для добавления (необязательно).
// const array = [1, 2, 3, 4, 5];
// array.splice(1, 2, 'a', 'b', )
// console.log(array);

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig']
// Через обычный splice
// fruits.splice(1, 2, 'new', 'new')
// console.log(fruits);

// Полифил через reduse 
// const res = (fruits, start, count, changeArr) => {
//     return fruits.reduce((acc, el, i) => {
//         if (i >= start && i < count + start) {
//             acc.push(changeArr[i - start])
//         } else {
//             acc.push(el)
//         }
//         return acc
//     }, [])
// }
// console.log(res(fruits, 1, 2, ['new1', 'new2']));

// Полифил через for 
const res = (fruits, start, count, changeArr) => {
    const newArr = []
    for (let i = 0; i < fruits.length; i++) {
        if (i >= start && i < count + start) {
            newArr.push(changeArr[i - start])
        } else {
            newArr.push(fruits[i])
        }
    }
    return newArr
}

console.log(res(fruits, 1, 2, ['new1', 'new2']));

// Напишите функцию findCharacterIndex, которая принимает строку и символ, и возвращает индекс первого вхождения этого симовола в строку. Если символ не найден, функция должна возвращать -1

const findCharacterIndex = (str, char) => {
    return str.indexOf(char)
}

console.log(findCharacterIndex("holle", "e"));
console.log(findCharacterIndex("hrllo", "a"));

// Создайте функцию containSubstring, которая принимает строку и подстроку, и возвращает true, если подстрока найдена в строке, и false в противном случае. 

const containSubstring = (str, key) => {
    return str.indexOf(key) !== -1
}

console.log(containSubstring("hello world", "world"));
console.log(containSubstring("hello world", "planet"));



