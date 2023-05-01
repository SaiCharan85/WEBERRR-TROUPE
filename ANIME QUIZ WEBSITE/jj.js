var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Who is Naruto's Father?",
    "options": [
    {
    "a": "Hiruzen Sarutobi",
    "b": "Minato Namikaze",
    "c": "Kakashi Hatake",
    "d": "Madara Uchiha"
    }
    ],
    "answer": "Minato Namikaze",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "What is Sasuke's most powerful 'Jutsu'?",
    "options": [
    {
    "a": "Susano",
    "b": "Chidori",
    "c": "Amaterasu",
    "d": "Indra's Arrow"
    }
    ],
    "answer": "Indra's Arrow",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What is the 8 tails beast called?",
    "options": [
    {
    "a": "Isobu",
    "b": "Gyuki",
    "c": "Son Goku",
    "d": "Kurama"
    }
    ],
    "answer": "Gyuki",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Who is the second 'Hokage'?",
    "options": [
    {
    "a": "Kakashi Hatake",
    "b": "Hashirama Senju",
    "c": "Tobirama Senju",
    "d": "Tsunade Senju"
    }
    ],
    "answer": "Tobirama Senju",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "What is Pain's Original Name?",
    "options": [
    {
    "a": "Nagato",
    "b": "Yahiko",
    "c": "Konan",
    "d": "Shikamaru",
    }
    ],
    "answer": "Nagato",
    "score": 0,
    "status": ""
    },
    {
        "id": 6,
        "question": "Who murders Azuma Sarutobi?",
        "options": [
        {
        "a": "Hidan",
        "b": "Sasori",
        "c": "Deidara",
        "d": "Kakuzu"
        }
        ],
        "answer": "Hidan",
        "score": 0,
        "status": ""
        },
        {
            "id": 7,
            "question": "Which clan has the reputation of the most powerful visual prowess?",
            "options": [
            {
            "a": "The Hyuga Clan",
            "b": "The Senju Clan",
            "c": "The Nara Clan",
            "d": "The Uchiha Clan"
            }
            ],
            "answer": "The Uchiha Clan",
            "score": 0,
            "status": ""
            },
            {
                "id": 8,
                "question": "Who declares war against the Shinobi World?",
                "options": [
                {
                "a": "Obito Uchiha",
                "b": "Itachi Uchiha",
                "c": "Orochimaru",
                "d": "Jiraiya"
                }
                ],
                "answer": "Obito Uchiha",
                "score": 0,
                "status": ""
                },
                {
                    "id": 9,
                    "question": "Who is called 'THE GHOST OF UCHIHA'?",
                    "options": [
                    {
                    "a": "Madara Uchiha",
                    "b": "Itachi Uchiha",
                    "c": "Obito Uchiha",
                    "d": "Sasuke Uchiha"
                    }
                    ],
                    "answer": "Madara Uchiha",
                    "score": 0,
                    "status": ""
                    },
                    {
                        "id": 10,
                        "question": "Who makes Kabuto undo the 'Edo Tensei' Jutsu?",
                        "options": [
                        {
                        "a": "Killer Bee",
                        "b": "Onoki",
                        "c": "Itachi Uchiha",
                        "d":"A"
                        }
                        ],
                        "answer": "Itachi Uchiha",
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