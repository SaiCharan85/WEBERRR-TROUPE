var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the musical score of Pulp Fiction's famous dance sequence with John Travolta and Uma Thurman?",
    "options": [
    {
    "a": "You Never Can Tell",
    "b": "What Is Love(Baby Don't Hurt Me)",
    "c": "Never Gonna Give You Up",
    "d": "Smooth Criminal"
    }
    ],
    "answer": "You Never Can Tell",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Who are the couple in the starting sequence who commit robbery?",
    "options": [
    {
    "a": "Pumpkin and Honey Baby",
    "b": "Dumpling and Honey Boo",
    "c": "Pumpkin and Honey Bunny",
    "d": "Dumpling and Haley Berry"
    }
    ],
    "answer": "Pumpkin and Honey Bunny",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "In which car were Jules and Vega wandering in the second sequence?",
    "options": [
    {
    "a": "94' Chevy",
    "b": "74' Chevy",
    "c": "76' Ferrari",
    "d": "63' Impala"
    }
    ],
    "answer": "74' Chevy",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which word Jules double dares Brett to say again so as to shoot him?",
    "options": [
    {
    "a": "Who",
    "b": "What",
    "c": "WTF",
    "d": "Where"
    }
    ],
    "answer": "What",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Who is Marsellus Wallace's Wife?",
    "options": [
    {
    "a": "Trinity Wallace",
    "b": "Mary Wallace",
    "c": "Cynthia Wallace",
    "d": "Mia Wallace"
    }
    ],
    "answer": "Mia Wallace",
    "score": 0,
    "status": ""
    },
    {
        "id": 6,
        "question": "Who enacted the role 'Butch Coolidge'?",
        "options": [
        {
        "a": "Jason Statham",
        "b": "Samuel Jackson",
        "c": "John Travolta",
        "d": "Bruce Willis"
        }
        ],
        "answer": "Bruce Willis",
        "score": 0,
        "status": ""
        },
        {
            "id": 7,
            "question": "What was Fabienne going to order for the breakfast?",
            "options": [
            {
            "a": "Blueberry Pancakes",
            "b": "Lemon Pie",
            "c": "Raspberry Pancakes",
            "d": "Croissant"
            }
            ],
            "answer": "Blueberry Pancakes",
            "score": 0,
            "status": ""
            },
            {
                "id": 8,
                "question": "Who was shot in the face accidently by Vincent Vega?",
                "options": [
                {
                "a": "Brett",
                "b": "Pumpkin",
                "c": "Marvin",
                "d": "Roger"
                }
                ],
                "answer": "Marvin",
                "score": 0,
                "status": ""
                },
                {
                    "id": 9,
                    "question": "I'm _____, I solve problems.",
                    "options": [
                    {
                    "a": "Winston Wolfe",
                    "b": "Jules Winnfield",
                    "c": "Jimmie Dimmick",
                    "d": "Captain Koons"
                    }
                    ],
                    "answer": "Astronaut",
                    "score": 0,
                    "status": ""
                    },
                    {
                        "id": 10,
                        "question": "Who is the director of 'Pulp Fiction'?",
                        "options": [
                        {
                        "a": "Christopher Nolan",
                        "b": "Quentin Tarantino",
                        "c": "Mel Gibson",
                        "d": "Anton Fuqua"
                        }
                        ],
                        "answer": "Quentin Tarantino",
                        "score": 0,
                        "status": ""
                        }
    ]
}
var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentquestion = 0;
    var totalquestions = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentquestion = cque;
    if (this.currentquestion < totalquestions) {
    $("#tque").html(totalquestions);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentquestion].id + '.');
    $("#question").html(quiz.JS[this.currentquestion].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentquestion].options[0]) {
    if (quiz.JS[this.currentquestion].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentquestion].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentquestion].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentquestion <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentquestion >= totalquestions) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalquestions; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalquestions + "</h1>");
    for (var j = 0; j < totalquestions; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentquestion].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentquestion].answer) {
    if (quiz.JS[this.currentquestion].score == "") {
    quiz.JS[this.currentquestion].score = 1;
    quiz.JS[this.currentquestion].status = "correct";
    }
    } else {
    quiz.JS[this.currentquestion].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentquestion = this.currentquestion + cque;
    this.displayQuiz(this.currentquestion);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });