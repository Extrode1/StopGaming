//create variables
var myQuestions = [ 
    {
        //question 1 (preoccupation)
        question: "Do you think about gaming when you are not playing (e.g. when you should be focusing on other things)? ", 
        answer: {
            a: 'Yes', 
            b: 'No', 
        }, 
        correctAnswer: 'Yes'
    }, 
    {
        //question 2 (fraud)
        question: "Do you lie or try to hide how many hours you game from others? ",   
        answer: {
            a: 'Yes', 
            b: 'No', 
        }, 
        correctAnswer: 'Yes'
    }, 
    {
        //question 3 (surrender from other activities)
        question: "Have you lost interest in hobbies that you previously had? ", 
        answer: {
            a: 'Yes', 
            b: 'No', 
        }, 
        correctAnswer: 'Yes'
    }, 
    {
        //question 4 (continuation)
        question: "Do you continue to game despite knowing your life is getting worse as a result of it? ", 
        amswer: {
            a: 'Yes', 
            b: 'No', 
        }, 
        correctAnswer: 'Yes'
    }, 
    {
        //question 5 (withdrawal)
        question: "Have you experienced withdrawal symptoms when you tried to quit gaming? ", 
        answer: {
            a: 'Yes', 
            b: 'No', 
        }, 
        correctAnswer: 'Yes'
    }, 
    {
        //question 6 (lose control)
        question: "Are you unable to moderate your gaming? ", 
        answer: {
            a: 'Yes', 
            b: 'No', 
        }, 
        correctAnswer: 'Yes'
    }, 
    {
        //question 7 (escape)
        question: "Do you use gaming as an escape from reality? ", 
        answer: {
            a: 'Yes', 
            b: 'No', 
        }, 
        correctAnswer: 'Yes'
    }, 
    {
        //question 8 (tolerance)
        question: "Do you need to play more video games to get the same level of enjoyment as you used to? ", 
        answer: {
            a: 'Yes', 
            b: 'No', 
        }, 
        correctAnswer: 'Yes'
    }, 
    {
        //question 9 (negative consequences)
        question: "Have you had significant negative consequences as a result of excessive gaming (e.g. losing your job, relationships)? ", 
        answer: {
            a: 'Yes', 
            b: 'No', 
        }, 
        correctAnswer: 'Yes'
    }, 
];
//display quiz in container
var quizContainer = document.getElementById('quiz'); 
var resultsContainer = document.getElementById('results'); 
var submitButton = document.getElementById('submit'); 
//generate quiz
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton); 

function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions (questions, quizContainer) {
        //set up questions
        var output = []; 
        var answers; 
        for (var i = 0; i < questions.length; i++)
        {
            //reset answers to a blank array
            answers = []
            //iterate through all answers
            for (letter in questions[i].answers)
            {
                //add html radio button
                answers.push(
                    '<label>' + '<input type = "radio" name="question' + i + '"value="' + letter + '">' 
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>' 
                ); 
            }
            //add the question and answer to its output
            output.push(
                '<div class = "question">' + questions[i].question + '</div>'
                + '<div class = "answers">' + answers.join('') + '</div>'
            ); 
        }
        
    }
    //combine output list into one html string and put it on the page
    quizContainer.innerHTML = output.join(''); 
} 
    function showResults (questions, quizContainer, resultsContainer) {
            //show the results
            var answerContainers = quizContainer.querySelectorAll('.answers'); 
            //keep track of user's answers
            var userAnswer = ''; 
            var numCorrect = 0; 
        
            //iterate through each question
            for (var i = 0; i < questions.length; i++){

                //find selected answer
                userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked')||{}).value; 
            }
            //if answer is correct
            if (userAnswer === questions[i].answer) {
                numCorrect++; 

            }
            
    }
    if (numCorrect >= 5)
    {
        resultsContainer.innerHTML = 'You fulfilled ' + numCorrect + 'out of' + questions.length + '. This meets the criteria for video game addiction. '; 
    } 
    else
    {
        resultsContainer.innerHTML = 'You fulfilled' + numCorrect + 'out of' + questions.length + '. This does not meet the criteria for video game addiction. '; 
    }
    //show questions
    showQuestions(questions, quizContainer, resultsContainer);  

    //show results when user submits results
    submitButton.onClick = function () {
        showResults(questions, quizContainer, resultsContainer); 
    }


