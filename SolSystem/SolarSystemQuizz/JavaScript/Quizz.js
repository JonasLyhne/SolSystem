var Questions;
var questionNumber = 0;
var Answers;

$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "api/getquestions", //remenber to change!
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


var RenderQuestion = function(Question){
    ResetButtons();
    Answers = Question.Answers;
    let questionContainer = document.getElementById("QuestionCon");
    questionContainer.innerText = Question.Text;
    if (Question.Answers.Length <= 2) {
        hideAnswers();
    }
    for (let i = 0; i < Question.Answers.length; i++) {
        let element = Question.Answers[i];
        let AnswerBox = document.getElementById("Answer" + i);
        AnswerBox.innerText = element.Text;
    }


}

function CheckForAnswer(answer) {
    if(Answers[answer].IsCorrect){
        document.getElementById("btnAnswer"+answer).className += " btn-success"
    }else if (!Answers[answer].IsCorrect){
        document.getElementById("btnAnswer"+answer).className += " btn-danger"
    }
    document.getElementById("nextQuestion").hidden=false;
    document.getElementById("btnAnswer0").disabled=true;
    document.getElementById("btnAnswer1").disabled=true;
    document.getElementById("btnAnswer2").disabled=true;
    document.getElementById("btnAnswer3").disabled=true;
}

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
    btn0.className = btnClassName;
    btn1.className = btnClassName;
    btn2.className = btnClassName;
    btn3.className = btnClassName;
}

function NextQuestion(){
    questionNumber++;
    if (Questions.length > questionNumber) {
        RenderQuestion(Questions[questionNumber])
    }else{
        document.getElementById("nextQuestion").hidden=true;
        Complete();
    }
    
}

function Complete(){

    let questionContainer = document.getElementById("QuestionCon");
    questionContainer.innerText = "Du er færdig!";
    hideAllAnswers();
}

function hideAnswers() {
    document.getElementById("AnswerContainer2").style.display = "none";
    document.getElementById("AnswerContainer3").style.display = "none";
}

function hideAllAnswers() {
    document.getElementById("AnswerContainer0").style.display = "none";
    document.getElementById("AnswerContainer1").style.display = "none";
    document.getElementById("AnswerContainer2").style.display = "none";
    document.getElementById("AnswerContainer3").style.display = "none";
}