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

//set up score
let currentQuestion = 0; 
let score = 0; 
//function to display question
function showQuestion() {
    //set question to current question via array
    const question = myQuestions[currentQuestion]; 
    questionElement.innerText = question.question; 

    optionsElement.innerHTML = ""; 
    //loop through the questions with a forEach loop
    question.options.forEach(option => {
        const button = document.createElement("button"); 
        button.innerText = option; 
        optionsElement.appendChild(button); 
        button.addEventListener("click", selectAnswer); 
    }); 
} 
//select question
function selectAnswer(e) {
    const selectedButton = e.target; 
    const answer = myQuestions[currentQuestion].answer; 
    //increment score if it is correct
    if (selectedButton.innerText === answer) {
        score++; 
    }
    //g to next question
    currentQuestion++; 
    //show question if the questions are not finished, or show result if all the questions are done
    if (currentQuestion < myQuestions.length) {
        showQuestion(); 
    }
    else {
        showResult(); 
    }
}
//show final result depending on whether or not the person is addicted (need to meet at least 5 criteria to be classified as addiction)
function showResult () {
    if (score >= 5)
        quiz.innerHTML = ` <h1> Quiz completed! </h1> 
        <p> Your score: ${score}/${myQuestions.length} <br></br>
        You are most likely addicted to gaming. 
        `; 
    else 
    quiz.innerHTML = ` <h1> Quiz completed! </h1> 
        <p> Your score: ${score}/${myQuestions.length} <br></br>
        You are most likely not addicted to gaming, but you still might have problematic gaming behaviours. 
        `;  
        
    }

    showQuestion(); 

