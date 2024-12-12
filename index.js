const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { Text: "Venus", correct: false },
            { Text: "Mars", correct: true },
            { Text: "Jupiter", correct: false },
            { Text: "Saturn", correct: false },
        ]
    },

    {
        question: "Who wrote the play Romeo and Juliet?",
        answers: [
            { Text: "Charles Dickens", correct: false },
            { Text: "Mark Twain", correct: false },
            { Text: "William Shakespeare", correct: true }, 
            { Text: "Jane Austen", correct: false },
        ]
    },

    {
        question: "What is the capital city of Australia?",
        answers: [
            { Text: "Sydney", correct: false },
            { Text: "Melbourne", correct: false },
            { Text: "Brisbane", correct: false },
            { Text: "Canberra", correct: true }, 
        ]
    }
];

const questionBox = document.querySelector('#question');
const answersBox = document.querySelector('#ans');
const nextButton = document.querySelector('#nextbutton');

let questionIndex = 0;
let mark = 0;

function start() {
    questionIndex = 0;
    mark = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionBox.innerHTML = questionNo + ". " + currentQuestion.question; 

    
    answersBox.innerHTML = '';

    currentQuestion.answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.innerHTML = ans.Text;
        btn.classList.add("button");
        btn.addEventListener('click', () => {
            if (ans.correct) {
                mark++;
                btn.style.backgroundColor = 'green'; 
            } else {
                btn.style.backgroundColor = 'red'; 
            }
            setTimeout(nextQuestion, 1000);

        });
        answersBox.appendChild(btn);
         
    });
}

function nextQuestion() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionBox.innerHTML = `Quiz complete! Your score is ${mark} out of ${questions.length}.`;
    answersBox.innerHTML = '';
    nextButton.innerHTML = "Restart";
    nextButton.addEventListener('click', start);
}

start();


