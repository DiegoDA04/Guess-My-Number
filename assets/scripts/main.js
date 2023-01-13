// ===== Game Logic =====

const score = document.getElementById('score-number'),
    message = document.getElementById('message'),
    checkButton = document.getElementById('check-button'),
    checkInput = document.getElementById('check-input')

// Number to Guess

const guessNumber = Math.floor(Math.random() * 20 + 1)

let scoreBase = 0

checkButton.addEventListener('click', () => {

    const checkNumber = Number(checkInput.value)

    // When player wins
    if(checkNumber === guessNumber) {
        message.textContent = 'Correct Number'
        scoreBase += 5
        score.textContent = scoreBase.toString()
    }
    else if(checkNumber > guessNumber) {
        message.textContent = 'Too high'
    }
    else {
        message.textContent = 'Too low'
    }
})