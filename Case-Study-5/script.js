
let questions = [
    {
        question: "Which language is used to structure web pages?",
        options: ["Python", "HTML", "Java", "C"],
        answer: "HTML"
    },
    {
        question: "Which language is used to style web pages?",
        options: ["CSS", "C++", "Python", "SQL"],
        answer: "CSS"
    },
    {
        question: "Which language adds interactivity to websites?",
        options: ["HTML", "CSS", "JavaScript", "XML"],
        answer: "JavaScript"
    },
    {
        question: "Which tag creates a hyperlink?",
        options: ["<link>", "<href>", "<a>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which symbol is used for an ID selector in CSS?",
        options: [".", "#", "*", "&"],
        answer: "#"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

function loadQuestion() {
    selectedAnswer = "";

    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML = q.question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(function(option) {
        let button = document.createElement("div");

        button.className = "option";
        button.innerHTML = option;

        button.onclick = function() {
            selectedAnswer = option;

            document.querySelectorAll(".option").forEach(function(item) {
                item.style.backgroundColor = "#f0f4f8";
            });

            button.style.backgroundColor = "#cce5ff";
        };

        optionsDiv.appendChild(button);
    });
}

document.getElementById("nextBtn").onclick = function() {

    if (currentQuestion >= questions.length) {
        return;
    }

    if (selectedAnswer === "") {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerHTML = "Quiz Completed!";
        document.getElementById("options").innerHTML = "";

        document.getElementById("result").innerHTML =
            "Your Score: " + score + " / " + questions.length;

        document.getElementById("nextBtn").innerHTML = "Completed";
    }
};

loadQuestion();
