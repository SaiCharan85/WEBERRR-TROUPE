var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Who is the protagonist of Demon Slayer Series?",
    "options": [
    {
    "a": "Tanjiro Kamado",
    "b": "Inosuke Hashibira",
    "c": "Zenitsu Agatsuma",
    "d": "Muichiro Tokito"
    }
    ],
    "answer": "Tanjiro Kamado",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Who is Tanjiro's sister?",
    "options": [
    {
    "a": "Nezuko Kamado",
    "b": "Kanao Tsuyuri",
    "c": "Shinobu Kocho",
    "d": "Aoi Kanzaki"
    }
    ],
    "answer": "Nezuko Kamado",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Who is the Upper Moon one?",
    "options": [
    {
    "a": "Akaza",
    "b": "Gyokko",
    "c": "Doma",
    "d": "Kokushibo"
    }
    ],
    "answer": "Kokushibo",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "What are the types of Breathing styles Tanjiro can use while fighting?",
    "options": [
    {
    "a": "Mist and Love Breathing",
    "b": "Fire and Sun Breathing",
    "c": "Water and Sun Breathing",
    "d": "Sound and Stone Breathing"
    }
    ],
    "answer": "Water and Sun Breathing",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Who is the legendary demon slayer defeated Muzan almost 500 years before the current Taisho era?",
    "options": [
    {
    "a": "Michikatsu Tsugikuni",
    "b": "Yoriichi Tsugikuni",
    "c": "Sakonji Urokodaki",
    "d": "Kyojuro Rengoku",
    }
    ],
    "answer": "Yoriichi Tsugikuni",
    "score": 0,
    "status": ""
    },
    {
        "id": 6,
        "question": "What is the breathing style used by Uzui Tengen?",
        "options": [
        {
        "a": "Thunder",
        "b": "Beast",
        "c": "Fire",
        "d": "Sound"
        }
        ],
        "answer": "Sound",
        "score": 0,
        "status": ""
        },
        {
            "id": 7,
            "question": "Who is famous as Water Hashira?",
            "options": [
            {
            "a": "Giyu Tomioka",
            "b": "Obanai Iguro",
            "c": "Gyomei Himejima",
            "d": "Mitsuri Kanroji"
            }
            ],
            "answer": "Giyu Tomioka",
            "score": 0,
            "status": ""
            },
            {
                "id": 8,
                "question": "Who uses Insect Breathing?",
                "options": [
                {
                "a": "Mitsuri Kanroji",
                "b": "Sanemi Shinazugawa",
                "c": "Shinobu Kocho",
                "d": "Genya Shinazugawa"
                }
                ],
                "answer": "Shinobu Kocho",
                "score": 0,
                "status": ""
                },
                {
                    "id": 9,
                    "question": "Who kills Rengoku in the 'Mugen Train Arc'?",
                    "options": [
                    {
                    "a": "Kokushibo",
                    "b": "Enmu",
                    "c": "Hantengu",
                    "d": "Akaza"
                    }
                    ],
                    "answer": "Akaza",
                    "score": 0,
                    "status": ""
                    },
                    {
                        "id": 10,
                        "question": "Who is the head of the Demon Slayer Corps?",
                        "options": [
                        {
                        "a": "Shinjuro Rengoku",
                        "b": "Jigoro Kuwajima",
                        "c": "Kagaya Ubuyashiki",
                        "d":"Tecchin Tecchikawahara"
                        }
                        ],
                        "answer": "Kagaya Ubuyashiki",
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