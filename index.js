const snakeNames = require('snake-names')
let snakeName = snakeNames.random()

let femaleSnakeNames = snakeNames.female
let randomIndex = Math.floor(Math.random() * femaleSnakeNames.length)

console.log('This is the random snake name.', snakeName)

console.log('A great female snake name is:', femaleSnakeNames[randomIndex])



