function calculateAverage(scores) {
    let sum = 0 // Инициализируем переменную для суммы оценок

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i] // Добавляем каждую оценку к сумме
    }

    // Возвращаем средний балл округленный до ближайшего целого
    return Math.round(sum / scores.length)
}

function classifyScores(scores) {
    const classifiedScores = []

    for (let i = 0; i < scores.length; i++) {
        let grade // Переменная для хранения оценки
        const score = scores[i]

        if (score >= 90) {
            grade = 'A'
        } else if (score >= 80) {
            grade = 'B'
        } else if (score >= 70) {
            grade = 'C'
        } else if (score >= 50) {
            grade = 'D'
        } else {
            grade = 'F'
        }

    classifiedScores.push(grade)
    }

    return classifiedScores
}

const myScores = [82, 75, 91, 85, 93, 88, 99]

const average = calculateAverage(myScores)
console.log(`Средний балл студента: ${average}`) // Выведет средний балл

const classifiedScores = classifyScores(myScores)
console.log(`Classified scores: ${classifiedScores}`)