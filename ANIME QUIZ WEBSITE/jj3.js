var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is latest Ryan Gosling movie starring Margot Robbie?",
    "options": [
    {
    "a": "Blade Runner 2049",
    "b": "Blue Valentine",
    "c": "Barbie",
    "d": "Stay"
    }
    ],
    "answer": "Barbie",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which movie starring Ryan Gosling won 6 Academy Awards?",
    "options": [
    {
    "a": "La La Land",
    "b": "The United States of Leland",
    "c": "Song to Song",
    "d": "Only God Forgives"
    }
    ],
    "answer": "La La Land",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which movie starring Mr.Gosling is a cult classic?",
    "options": [
    {
    "a": "The Place Beyond The Pines",
    "b": "Drive",
    "c": "Fracture",
    "d": "Gangster Squad"
    }
    ],
    "answer": "Drive",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which is the most famous romantic drama movie of Ryan Gosling?",
    "options": [
    {
    "a": "The Notebook",
    "b": "All Good Things",
    "c": "Crazy, Stupid, Love",
    "d": "Blue Valentine"
    }
    ],
    "answer": "The Notebook",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which movie stars both Ryan Gosling and Denzel Washington?",
    "options": [
    {
    "a": "First Man",
    "b": "The Big Short",
    "c": "The Believer",
    "d": "Remember The Titans"
    }
    ],
    "answer": "Remember The Titans",
    "score": 0,
    "status": ""
    },
    {
        "id": 6,
        "question": "Which Ryan Gosling movie is about 2008 financial crisis?",
        "options": [
        {
        "a": "The Believer",
        "b": "Margin Call",
        "c": "The Big Short",
        "d": "Inside Job"
        }
        ],
        "answer": "The Big Short",
        "score": 0,
        "status": ""
        },
        {
            "id": 7,
            "question": "Which rom-com movie stars both Ryan Gosling and Steve Carell?",
            "options": [
            {
            "a": "The 40 year old virgin",
            "b": "Beautiful Boy",
            "c": "Evan Almighty",
            "d": "Crazy, Stupid, Love"
            }
            ],
            "answer": "Crazy, Stupid, Love",
            "score": 0,
            "status": ""
            },
            {
                "id": 8,
                "question": "Which actress co-starred with Ryan Gosling?",
                "options": [
                {
                "a": "Emma Watson",
                "b": "Rachel McAdams",
                "c": "Ana de Armas",
                "d": "Emma Stone"
                }
                ],
                "answer": "Emma Stone",
                "score": 0,
                "status": ""
                },
                {
                    "id": 9,
                    "question": "Which Director directed Ryan Gosling's Blade Runner 2049?",
                    "options": [
                    {
                    "a": "Denis Villeneuve",
                    "b": "Damien Chazelle",
                    "c": "Adam McKay",
                    "d": "Nick Cassavetes"
                    }
                    ],
                    "answer": "Denis Villeneuve",
                    "score": 0,
                    "status": ""
                    },
                    {
                        "id": 10,
                        "question": "Who is Ryan Gosling's Wife?",
                        "options": [
                        {
                        "a": "Emma Stone",
                        "b": "Eva Mendes",
                        "c": "Rachel McAdams",
                        "d":"Jullianne Moore"
                        }
                        ],
                        "answer": "Eva Mendes",
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