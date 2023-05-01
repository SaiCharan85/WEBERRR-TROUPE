var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Which year did the Colossal Titan attack the Shiganshina district for the first time?",
    "options": [
    {
    "a": "847",
    "b": "845",
    "c": "850",
    "d": "852"
    }
    ],
    "answer": "845",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Who is the greatest and most powerful among the Survey Corps of all time?",
    "options": [
    {
    "a": "Levi Ackerman",
    "b": "Mikasa Ackerman",
    "c": "Ermin Smith",
    "d": "Hange Zoe"
    }
    ],
    "answer": "Levi Ackerman",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Who is from the Royal bloodline?",
    "options": [
    {
    "a": "Ymir Fritz",
    "b": "Historia Reiss",
    "c": "Annie Leonhart",
    "d": "Sasha Blouse"
    }
    ],
    "answer": "Historia Reiss",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which is the Titan form of Eren Jaeger?",
    "options": [
    {
    "a": "Attack Titan",
    "b": "Armored Titan",
    "c": "Beast Titan",
    "d": "Cart Titan"
    }
    ],
    "answer": "Attack Titan",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Who is Eren Jaeger's bestfriend?",
    "options": [
    {
    "a": "Jean Kirschtein",
    "b": "Reiner Braun",
    "c": "Bertolt Hoover",
    "d": "Armin Arlert",
    }
    ],
    "answer": "Armin Arlert",
    "score": 0,
    "status": ""
    },
    {
        "id": 6,
        "question": "Who was the commander of the Survey Corps before the Beast Titan menace?",
        "options": [
        {
        "a": "Hange Zoe",
        "b": "Keith Sadies",
        "c": "Ermin Smith",
        "d": "Oruo Bozad"
        }
        ],
        "answer": "Erwin Smith",
        "score": 0,
        "status": ""
        },
        {
            "id": 7,
            "question": "Who is the latest Jaw Titan?",
            "options": [
            {
            "a": "Porco Galliard",
            "b": "Theo Magath",
            "c": "Falco Grice",
            "d": "Tom Xaver"
            }
            ],
            "answer": "Falco Grice",
            "score": 0,
            "status": ""
            },
            {
                "id": 8,
                "question": "Whose equipment is removed forcefully leading to his/her death in the Battle of Trost?",
                "options": [
                {
                "a": "Annie Leonhart",
                "b": "Connie Springer",
                "c": "Thomas Wagner",
                "d": "Marco Bodt"
                }
                ],
                "answer": "Marco Bodt",
                "score": 0,
                "status": ""
                },
                {
                    "id": 9,
                    "question": "Who is Zeke Yeager's father?",
                    "options": [
                    {
                    "a": "Grisha Jaeger",
                    "b": "Eren Jaeger",
                    "c": "Eren Kruger",
                    "d": "Dhalis Zachary"
                    }
                    ],
                    "answer": "Grisha Jaeger",
                    "score": 0,
                    "status": ""
                    },
                    {
                        "id": 10,
                        "question": "Who loves Eren Jaeger the most?",
                        "options": [
                        {
                        "a": "Peick Finger",
                        "b": "Gabi Braun",
                        "c": "Historia Reiss",
                        "d":"Mikasa Ackerman"
                        }
                        ],
                        "answer": "Mikasa Ackerman",
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