let userName = window.prompt ('Please enter you name:')

for (let i = 0; i < questions.lenght; i++) {
    let question = questions [i]
    let userAnswer = window.prompt (question.text)
    if (userAnswer === question.correctAnswer){
        userScore = userScore + 10
    }
}

window.alert ('Your Score is: '+userScore)
// Your Code Here