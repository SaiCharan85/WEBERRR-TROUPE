var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Who is Monica's husband?",
    "options": [
    {
    "a": "Joey Tribbiani",
    "b": "Richard Burke",
    "c": "Fun Bobby",
    "d": "Chandler Bing"
    }
    ],
    "answer": "Chandler Bing",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "What does Joey buy in the auction?",
    "options": [
    {
    "a": "A Boat",
    "b": "A car",
    "c": "An Apothecary Table",
    "d": "A restaurant"
    }
    ],
    "answer": "Janice",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Who gave birth to Frank's Triplets?",
    "options": [
    {
    "a": "Rachel",
    "b": "Monica",
    "c": "Emily",
    "d": "Phoebe"
    }
    ],
    "answer": "Phoebe",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Who quotes the dialogue 'I'm Hopless And Awkward And desperate for Love'?",
    "options": [
    {
    "a": "Ross",
    "b": "Joey",
    "c": "Gunther",
    "d": "Chandler"
    }
    ],
    "answer": "Chandler",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Who gets married and divorced 3 times and also dates a student?",
    "options": [
    {
    "a": "Chandler",
    "b": "Joey",
    "c": "Ross",
    "d": "Tag"
    }
    ],
    "answer": "Ross",
    "score": 0,
    "status": ""
    },
    {
        "id": 6,
        "question": "Who teaches Ben practical jokes?",
        "options": [
        {
        "a": "Elizabeth",
        "b": "Rachel",
        "c": "Monica",
        "d": "Phoebe"
        }
        ],
        "answer": "Rachel",
        "score": 0,
        "status": ""
        },
        {
            "id": 7,
            "question": "What is Rachel's answer to 'What does Chandler do for a living'?",
            "options": [
            {
            "a": "Transponster",
            "b": "Tourist boy",
            "c": "Transporter",
            "d": "Travester"
            }
            ],
            "answer": "Transponster",
            "score": 0,
            "status": ""
            },
            {
                "id": 8,
                "question": "What is it that Joey doesn't share?",
                "options": [
                {
                "a": "'Joey doesn't share cars'",
                "b": "'Joey doesn't share money'",
                "c": "'Joey doesn't share gadgets'",
                "d": "'Joey doesn't share food'"
                }
                ],
                "answer": "'Joey doesn't share food'",
                "score": 0,
                "status": ""
                },
                {
                    "id": 9,
                    "question": "Who is the actor who enacts the role of Phoebe's husband(Mike Hannigan)?",
                    "options": [
                    {
                    "a": "Van Damme",
                    "b": "Paul Rudd",
                    "c": "Bruce Willis",
                    "d": "Brad Pitt"
                    }
                    ],
                    "answer": "Paul Rudd",
                    "score": 0,
                    "status": ""
                    },
                    {
                        "id": 10,
                        "question": "Where do the friends usually hangout?",
                        "options": [
                        {
                        "a": "At The Bar",
                        "b": "At The Mall",
                        "c": "At The Park",
                        "d":"At The Coffee Shop"
                        }
                        ],
                        "answer": "At The Coffee Shop",
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