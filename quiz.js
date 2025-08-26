//create variables
const myQuestions = [ 
    {
        //question 1 (preoccupation)
        question: "Do you think about gaming when you are not playing (e.g. when you should be focusing on other things)? ", 
        options: ["Yes", "No"],
        answer: "Yes"
    }, 
    {
        //question 2 (fraud)
        question: "Do you lie or try to hide how many hours you game from others? ",   
        options: ["Yes", "No"],
        answer: "Yes"
    }, 
    {
        //question 3 (surrender from other activities)
        question: "Have you lost interest in hobbies that you previously had? ", 
        options: ["Yes", "No"],
        answer: "Yes"
    }, 
    {
        //question 4 (continuation)
        question: "Do you continue to game despite knowing your life is getting worse as a result of it? ", 
        options: ["Yes", "No"],
        answer: "Yes"
    }, 
    {
        //question 5 (withdrawal)
        question: "Have you experienced withdrawal symptoms when you tried to quit gaming? ", 
        options: ["Yes", "No"],
        answer: "Yes"
    }, 
    {
        //question 6 (lose control)
        question: "Are you unable to moderate your gaming? ", 
        options: ["Yes", "No"],
        answer: "Yes"
    }, 
    {
        //question 7 (escape)
        question: "Do you use gaming as an escape from reality? ", 
        options: ["Yes", "No"],
        answer: "Yes"
    }, 
    {
        //question 8 (tolerance)
        question: "Do you need to play more video games to get the same level of enjoyment as you used to? ", 
        options: ["Yes", "No"],
        answer: "Yes"
    }, 
    {
        //question 9 (negative consequences)
        question: "Have you had significant negative consequences as a result of excessive gaming (e.g. losing your job, relationships)? ", 
        options: ["Yes", "No"],
        answer: "Yes"
    }
];
//display quiz in container
const questionElement = document.getElementById("question"); 
const optionsElement = document.getElementById("options"); 
const submitButton = document.getElementById("submit"); 

//set up score
let currentQuestion = 0; 
let score = 0; 

function showQuestion() {
    const question = myQuestions[currentQuestion]; 
    questionElement.innerText = question.question; 

    optionsElement.innerHTML = ""; 
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

    showQuestion(); 

