const numbers = [1, 2, 3, 4]

const newNumbers = [...numbers, 5]
console.log(newNumbers) // [1, 2, 3, 4, 5]

const neo = {
    name: 'Neo',
    age: 85
}

const evan = {
    ...neo,
    name: 'Evan' // name을 덮어쓴다
}

console.log(evan)