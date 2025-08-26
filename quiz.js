//create variables
const myQuestions = [ 
    {
        //question 1 (preoccupation)
        question: "Do you think about gaming when you are not playing (e.g. when you should be focusing on other things)? ", 
        options: {
            a: 'Yes', 
            b: 'No', 
        }, 
        answer: 'a'
    }, 
    {
        //question 2 (fraud)
        question: "Do you lie or try to hide how many hours you game from others? ",   
        options: {
            a: 'Yes', 
            b: 'No', 
        }, 
        answer: 'a'
    }, 
    {
        //question 3 (surrender from other activities)
        question: "Have you lost interest in hobbies that you previously had? ", 
        options: {
            a: 'Yes', 
            b: 'No', 
        }, 
        answer: 'a'
    }, 
    {
        //question 4 (continuation)
        question: "Do you continue to game despite knowing your life is getting worse as a result of it? ", 
        options: {
            a: 'Yes', 
            b: 'No', 
        }, 
        answer: 'a'
    }, 
    {
        //question 5 (withdrawal)
        question: "Have you experienced withdrawal symptoms when you tried to quit gaming? ", 
        options: {
            a: 'Yes', 
            b: 'No', 
        }, 
        answer: 'a'
    }, 
    {
        //question 6 (lose control)
        question: "Are you unable to moderate your gaming? ", 
        options: {
            a: 'Yes', 
            b: 'No', 
        }, 
        answer: 'a'
    }, 
    {
        //question 7 (escape)
        question: "Do you use gaming as an escape from reality? ", 
        options: {
            a: 'Yes', 
            b: 'No', 
        }, 
        answer: 'a'
    }, 
    {
        //question 8 (tolerance)
        question: "Do you need to play more video games to get the same level of enjoyment as you used to? ", 
        options: {
            a: 'Yes', 
            b: 'No', 
        }, 
        answer: 'a'
    }, 
    {
        //question 9 (negative consequences)
        question: "Have you had significant negative consequences as a result of excessive gaming (e.g. losing your job, relationships)? ", 
        options: {
            a: 'Yes', 
            b: 'No', 
        }, 
        answer: 'a'
    }
];
//display quiz in container
const quizContainer = document.getElementById("question"); 
const resultsContainer = document.getElementById("options"); 
const submitButton = document.getElementById("submit"); 

//set up score
let question = 0; 
let score = 0; 

function showQuestion() {
    const question = myQuestions[currentQuestion]; 
    questionElement.innerText = question.question; 

    optionElement.innerHTML = ""; 
    question.options.forEach(option => {
        const button = document.createElement("button"); 
        button.innerText = option; 
        optionsElement.appendChild(button); 
        button.addEventListener("click", selectAnswer); 
    }); 
} 

function selectAnswer(e) {
    const selectedButton = e.target; 
    const answer = myQuestions[currentQuestion].answer; 

    if (selectedButton.innerText === answer) {
        score++; 
    }

    currentQuestion++; 

    if (currentQuestion < myQuestions.length) {
        showQuestion(); 
    }
    else {
        showResult(); 
    }
}
    function showResult () {
        quiz.innerHTML = ' <h1> Quiz completed! </h1> <p> Your score: ${score}/${quiz.length} </p>'; 
    }

