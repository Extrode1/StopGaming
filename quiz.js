function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions (questions, quizContainer) {
        //set up questions
    }
    function showResults (questions, quizContainer, resultsContainer) {
            //show the results

    }

    //show questions
    showQuestions(questions, quizContainer, resultsContainer); 

    //show results when user submits results
    submitButton.onClick = function () {
        showResults(questions, quizContainer, resultsContainer); 
    }


}