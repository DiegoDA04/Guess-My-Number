// ===== Game Logic =====

const score = document.getElementById('score-number'),
    message = document.getElementById('message'),
    checkButton = document.getElementById('check-button'),
    checkInput = document.getElementById('check-input')

// Number to Guess

let guessNumber = Math.floor(Math.random() * 20 + 1)

let scoreBase = 0
let guessedNumbers = 0

function updateScore() {
    scoreBase += 5
    guessedNumbers++
    score.textContent = scoreBase.toString()
}

function updateGuessNumber() {
    guessNumber = Math.floor(Math.random() * 20 + 1)
}

function displayMessage(text) {
    message.textContent = text
}

function showGuessNumber() {
    document.querySelector('.guess').classList.add('correct')
    document.querySelector('.guess').textContent = guessNumber.toString()
}

function hideGuessNumber() {
    document.querySelector('.guess').classList.remove('correct')
    document.querySelector('.guess').textContent = "?"
    displayMessage('Start guessing')
}

checkButton.addEventListener('click', () => {

    const checkNumber = Number(checkInput.value)

    if(checkNumber === guessNumber) {
        displayMessage('Correct Number')
        updateScore()
        showGuessNumber()
        setTimeout(hideGuessNumber,2000)
        updateGuessNumber()
    }
    else if(checkNumber > guessNumber) {
        displayMessage('Too high')
    }
    else {
        displayMessage('Too low')
    }
})