var Questions;
var questionNumber = 0;
var Answers;

//gets the questions from the api 
$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "api/getquestions",
        contentType: "application/json",
        dataType: "json",
        success: function(data){
            Questions = data;
            RenderQuestion(Questions[0]);
        },
        error: function(err){
            alert(err.d);
        }
    });
});

//shows a question in the gui
var RenderQuestion = function(Question){
    ResetButtons();
    Answers = Question.Answers;
    let questionContainer = document.getElementById("QuestionCon");
    questionContainer.innerText = Question.Text;
    //hides 2 of the 4 answerboxes if ther is 2 or less answers
    if (Question.Answers.Length <= 2) {
        hideAnswers();
    }
    //populates the answerboxes
    for (let i = 0; i < Question.Answers.length; i++) {
        let element = Question.Answers[i];
        let AnswerBox = document.getElementById("Answer" + i);
        AnswerBox.innerText = element.Text;
    }


}

//checks if the answer is correct
function CheckForAnswer(answer) {

    if(Answers[answer].IsCorrect){
        //if the is correct show it by starting confetti and makes the button green
        document.getElementById("btnAnswer"+answer).className += " btn-success"
        RestartConfetti();
        //shows the next button
        document.getElementById("nextQuestion").hidden=false;
        //lock the answer so the user cant press a new one
        document.getElementById("btnAnswer0").disabled=true;
        document.getElementById("btnAnswer1").disabled=true;
        document.getElementById("btnAnswer2").disabled=true;
        document.getElementById("btnAnswer3").disabled=true;
    }else if (!Answers[answer].IsCorrect){
        //if it is wrong make the button red
        document.getElementById("btnAnswer"+answer).className += " btn-danger";
        document.getElementById("btnAnswer"+answer).disabled=true;
    }
}

//ressets all the buttons ready for next question
function ResetButtons(){
    document.getElementById("nextQuestion").hidden=true;

    let btn0 = document.getElementById("btnAnswer0")
    let btn1 = document.getElementById("btnAnswer1")
    let btn2 = document.getElementById("btnAnswer2")
    let btn3 = document.getElementById("btnAnswer3")
    
    let btnClassName = "btn btn-block btn-primary text-uppercase"

    btn0.disabled=false;
    btn1.disabled=false;
    btn2.disabled=false;
    btn3.disabled=false;
    //gives the buttons default class
    btn0.className = btnClassName;
    btn1.className = btnClassName;
    btn2.className = btnClassName;
    btn3.className = btnClassName;
}

//sets the next question
function NextQuestion(){
    questionNumber++;
    if (Questions.length > questionNumber) {
        //renders the new questions 
        RenderQuestion(Questions[questionNumber])
    }else{
        //show that it is completed
        document.getElementById("nextQuestion").hidden=true;
        Complete();
    }
    
}

//tells the user that they completed the questions
function Complete(){
    let questionContainer = document.getElementById("QuestionCon");
    questionContainer.innerText = "Du er færdig!";
    hideAllAnswers();
}

//hides 2 answers
function hideAnswers() {
    document.getElementById("AnswerContainer2").style.display = "none";
    document.getElementById("AnswerContainer3").style.display = "none";
}

//hides all 4 answers 
function hideAllAnswers() {
    document.getElementById("AnswerContainer0").style.display = "none";
    document.getElementById("AnswerContainer1").style.display = "none";
    document.getElementById("AnswerContainer2").style.display = "none";
    document.getElementById("AnswerContainer3").style.display = "none";
}