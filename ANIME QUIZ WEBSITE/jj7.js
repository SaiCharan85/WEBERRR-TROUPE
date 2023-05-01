var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Which time travel movie is a cult class of all time?",
    "options": [
    {
    "a": "The Time Machine",
    "b": "Hot Tub Time Machine",
    "c": "Back To The Future",
    "d": "Tron:Legacy"
    }
    ],
    "answer":"Back To The Future",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Who directed the movie 'Memento'?",
    "options": [
    {
    "a": "Rob Reiner",
    "b": "Martin Scorsese",
    "c": "Christopher Nolan",
    "d": "Denzel Washington"
    }
    ],
    "answer": "Christopher Nolan",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which of the following is one of the greatest action movies ever made?",
    "options": [
    {
    "a": "John Wick 4",
    "b": "Interstellar",
    "c": "Ford vs Ferrari",
    "d": "1917"
    }
    ],
    "answer": "John Wick 4",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "What is Martin Scorsese's cult classic film starring just Robert de Niro?",
    "options": [
    {
    "a": "Taxi Driver",
    "b": "Raging Bull",
    "c": "Shutter Island",
    "d": "The Wolf Of The Wall STreet"
    }
    ],
    "answer": "Taxi Driver",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Who is the main lead in the film 'Fences' who is also the director of the movie?",
    "options": [
    {
    "a": "Leonardo Di Caprio",
    "b": "Javier Bardem",
    "c": "Denzel Washington",
    "d": "Mahershala Ali"
    }
    ],
    "answer": "Denzel Washington",
    "score": 0,
    "status": ""
    },
    {
        "id": 6,
        "question": "Who among the following didn't act as The Batman?",
        "options": [
        {
        "a": "Christian Bale",
        "b": "Val Kilmer",
        "c": "Michael Keaton",
        "d": "Jonah Hill"
        }
        ],
        "answer": "Jonah Hill",
        "score": 0,
        "status": ""
        },
        {
            "id": 7,
            "question": "Who are the lead actors in the Ocean Movie Series?",
            "options": [
            {
            "a": "George Clooney and Gerard Butker",
            "b": "George Clooney and Brad Pitt",
            "c": "Brad Pitt and Gary Oldman",
            "d": "Brad Pitt and Jason Statham"
            }
            ],
            "answer": "George Clooney and Brad Pitt",
            "score": 0,
            "status": ""
            },
            {
                "id": 8,
                "question": "What is the second rule of Fight Club?",
                "options": [
                {
                "a": "Someone yells 'Stop!', goes limp, taps out, the fight is over",
                "b": "Only two guys to a fight.",
                "c": "YOU DO NOT. TALK. ABOUT FIGHT CLUB!",
                "d": "You do not talk about Fight Club"
                }
                ],
                "answer": "YOU DO NOT. TALK. ABOUT FIGHT CLUB!",
                "score": 0,
                "status": ""
                },
                {
                    "id": 9,
                    "question": "Which Hollywood Director has the mentorship of Satyajit Ray",
                    "options": [
                    {
                    "a": "Wes Anderson",
                    "b": "Tim Burton",
                    "c": "Ridley Scott",
                    "d": "Kathryn Bigelow"
                    }
                    ],
                    "answer": "Wes Anderson",
                    "score": 0,
                    "status": ""
                    },
                    {
                        "id": 10,
                        "question": "Who is Leonardo's co-star in Titanic?",
                        "options": [
                        {
                        "a": "Michelle Williams",
                        "b": "Kate Winslet",
                        "c": "Charlize Theron",
                        "d": "Halle Berry"
                        }
                        ],
                        "answer": "Kate Winslet",
                        "score": 0,
                        "status": ""
                        },
                        {
                            "id": 11,
                            "question": "Which movie is directed by Spike Lee starring Jodie Foster?",
                            "options": [
                            {
                            "a": "He Got Game",
                            "b": "Malcolm X",
                            "c": "Inside Man",
                            "d": "Old Boy"
                            }
                            ],
                            "answer": "Inside Man",
                            "score": 0,
                            "status": ""
                            },
                            {
                                "id": 12,
                                "question": "Which Steven Spielberg movie is an ocean thriller?",
                                "options": [
                                {
                                "a": "ET",
                                "b": "Jaws",
                                "c": "Indiana Jones Series",
                                "d": "Jurassic Park"
                                }
                                ],
                                "answer": "Jaws",
                                "score": 0,
                                "status": ""
                                },
                                {
                                    "id": 13,
                                    "question": "Who enacts the role 'Patrick Bateman'?",
                                    "options": [
                                    {
                                    "a": "Matt Damon",
                                    "b": "Christian Bale",
                                    "c": "Ryan Gosling",
                                    "d": "Josh Brolin"
                                    }
                                    ],
                                    "answer": "Christian Bale",
                                    "score": 0,
                                    "status": ""
                                    },
                                    {
                                        "id": 14,
                                        "question": "Which movie stars Jake Gyllenhaal as 'Louis Bloom'?",
                                        "options": [
                                        {
                                        "a": "Nightcrawler",
                                        "b": "Source Code",
                                        "c": "Donnie Darko",
                                        "d": "Brokeback Mountain"
                                        }
                                        ],
                                        "answer": "Nightcrawler",
                                        "score": 0,
                                        "status": ""
                                        },
                                        {
                                            "id": 15,
                                            "question": "Who is 'The Scarface'?",
                                            "options": [
                                            {
                                            "a": "Clint Eastwood",
                                            "b": "Paul Newman",
                                            "c": "Marlon Brando",
                                            "d": "Al Pacino"
                                            }
                                            ],
                                            "answer": "Al Pacino",
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