
    var quiz = {
        "JS": [
        {
        "id": 1,
        "question": "Who craves for his mother's approval intensively?",
        "options": [
        {
        "a": "Raj",
        "b": "Leonard",
        "c": "Sheldon",
        "d": "Howard"
        }
        ],
        "answer": "Leonard",
        "score": 0,
        "status": ""
        },
        {
        "id": 2,
        "question": "Who is Sheldon Cooper's favorite fictional character?",
        "options": [
        {
        "a": "Captain James Kirk",
        "b": "The Batman",
        "c": "Indiana Jones",
        "d": "Spock"
        }
        ],
        "answer": "Spock",
        "score": 0,
        "status": ""
        },
        {
        "id": 3,
        "question": "Who is the Indian among the gang?",
        "options": [
        {
        "a": "Rajesh Koothrapalli",
        "b": "Rajeev Singh",
        "c": "Mayank Sharma",
        "d": "Mrinal Varma"
        }
        ],
        "answer": "Rajesh Koothrapalli",
        "score": 0,
        "status": ""
        },
        {
        "id": 4,
        "question": "Which university do the four friends work at?",
        "options": [
        {
        "a": "Texas",
        "b": "Caltech",
        "c": "Stanford",
        "d": "Columbia"
        }
        ],
        "answer": "Caltech",
        "score": 0,
        "status": ""
        },
        {
        "id": 5,
        "question": "Who is the microbiologist in The Series?",
        "options": [
        {
        "a": "Bernadette Rostenkowski-Wolowitz",
        "b": "Amy Farrah Fowler",
        "c": "Penny Hofstadter",
        "d": "Emily Sweeney"
        }
        ],
        "answer": "Bernadette Rostenkowski-Wolowitz",
        "score": 0,
        "status": ""
        },
        {
            "id": 6,
            "question": "What is Raj Koothrapalli's profession?",
            "options": [
            {
            "a": "Aerospace Engineer",
            "b": "Astrologist",
            "c": "Astrophysicist",
            "d": "Astronaut"
            }
            ],
            "answer": " Astrophysicist",
            "score": 0,
            "status": ""
            },
            {
                "id": 7,
                "question": "Who owns a comic book shop?",
                "options": [
                {
                "a": "Stuart Bloom",
                "b": "Wil Wheaton",
                "c": "Zack Johnson",
                "d": "Bert Kibbler"
                }
                ],
                "answer": "Stuart Bloom",
                "score": 0,
                "status": ""
                },
                {
                    "id": 8,
                    "question": "Who is Sheldon's neighbor?",
                    "options": [
                    {
                    "a": "Amy",
                    "b": "Penny",
                    "c": "Priya",
                    "d": "Bernadette"
                    }
                    ],
                    "answer": "Penny",
                    "score": 0,
                    "status": ""
                    },
                    {
                        "id": 9,
                        "question": "What job is assigned to Howard Wolowitz right after his marriage?",
                        "options": [
                        {
                        "a": "Aeronautics",
                        "b": "Computer Scientist",
                        "c": "Experimental Physicist",
                        "d": "Astronaut"
                        }
                        ],
                        "answer": "Astronaut",
                        "score": 0,
                        "status": ""
                        },
                        {
                            "id": 10,
                            "question": "Who wins the Nobel prize along with Amy Farah Fowler?",
                            "options": [
                            {
                            "a": "Raj Koothrapalli",
                            "b": "Howard Wolowitz",
                            "c": "Sheldon Cooper",
                            "d": "Leonard Hofstadter"
                            }
                            ],
                            "answer": "Sheldon Cooper",
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