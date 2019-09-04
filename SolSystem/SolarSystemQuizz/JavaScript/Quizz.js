var Questions;
var questionNumber = 0;

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


function hideAnswers() {
    document.getElementById("AnswerContainer2").style.display = "none";
    document.getElementById("AnswerContainer3").style.display = "none";

}