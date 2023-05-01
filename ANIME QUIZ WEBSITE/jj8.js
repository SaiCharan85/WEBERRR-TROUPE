var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "For which movie did Denzel Washington the Academy Award for the Best Lead Actor?",
    "options": [
    {
    "a": "The Flight",
    "b": "Fences",
    "c": "Philadelphia",
    "d": "Training Day"
    }
    ],
    "answer": "Training Day",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which movie won the most oscars?",
    "options": [
    {
    "a": "West Side Story",
    "b": "Slumdog Millionaire",
    "c": "Lord Of The Rings",
    "d": "The Last Emperor"
    }
    ],
    "answer": "Lord Of The Rings",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which Psychological Thriller Movie won the oscar in 1992?",
    "options": [
    {
    "a": "The Silence Of The Lambs",
    "b": "Cape Fear",
    "c": "Point Break",
    "d": "Under Suspicion"
    }
    ],
    "answer": "The Silence Of The Lambs",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which famous Mario Puzo adapted novel Movie series won oscars consecutively(1972 and 1974) for the Best Film?",
    "options": [
    {
    "a": "The Conversation",
    "b": "The French Connection",
    "c": "The Godfather",
    "d": "Casablanca"
    }
    ],
    "answer": "The Godfather",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "For which movie did Steven Spielberg win the oscar in the Best Director category for the first time?",
    "options": [
    {
    "a": "Catch Me If You Can",
    "b": "Schindler's List",
    "c": "The Terminal",
    "d": "Bridge Of Spies"
    }
    ],
    "answer": "Schindler's List",
    "score": 0,
    "status": ""
    },
    {
        "id": 6,
        "question": "Who is the director of the oscar winning movie 'Birdman'?",
        "options": [
        {
        "a": "Damien Chazelle",
        "b": "Ari Aster",
        "c": "Alejandro González Iñárritu",
        "d": "Dan Gilroy"
        }
        ],
        "answer": "Alejandro González Iñárritu",
        "score": 0,
        "status": ""
        },
        {
            "id": 7,
            "question": "How many oscars did Daniel Day-Lewis win?",
            "options": [
            {
            "a": "4",
            "b": "3",
            "c": "2",
            "d": "1"
            }
            ],
            "answer": "3",
            "score": 0,
            "status": ""
            },
            {
                "id": 8,
                "question": "Who won the oscar for the best actor in 2020?",
                "options": [
                {
                "a": "Joaquin Phoenix(Joker)",
                "b": "Adam Driver(Marriage Story)",
                "c": "Leonardo Di Caprio(Once Upon a Time in Hollywood)",
                "d": "Antonio Banderas(Pain and Glory)"
                }
                ],
                "answer": "Joaquin Phoenix(Joker)",
                "score": 0,
                "status": ""
                },
                {
                    "id": 9,
                    "question": "Who won the oscar for the best actress starring in the movie 'Room'",
                    "options": [
                    {
                    "a": "Kate Winslet",
                    "b": "Halle Berry",
                    "c": "Brie Larson",
                    "d": "Jessica Chastain"
                    }
                    ],
                    "answer": "Brie Larson",
                    "score": 0,
                    "status": ""
                    },
                    {
                        "id": 10,
                        "question": "Who won the oscar for the best supporting actor starring in the movie 'The Dark Knight'?",
                        "options": [
                        {
                        "a": "Javier Bardem",
                        "b": "Heath Ledger",
                        "c": "Joe Pesci",
                        "d": "Michael Caine"
                        }
                        ],
                        "answer": "Heath Ledger",
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