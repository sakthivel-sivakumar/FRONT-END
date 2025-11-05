
const quizData = [
    { question: "What is 5 + 5?", options: ["7", "10", "13", "4"], answer: "10" },
    { question: "Which language runs in a browser?", options: ["Java", "C", "Python", "JavaScript"], answer: "JavaScript" },
    { question: "What does CSS stand for?", options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which company developed React?", options: ["Google", "Facebook", "Microsoft", "Apple"], answer: "Facebook" },
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], answer: "Paris" },
    { question: "HTML stands for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "Hyperlinks and Text Markup Language"], answer: "Hyper Text Markup Language" },
    { question: "Which HTML tag is used for headings?", options: ["<h1>", "<head>", "<heading>", "<h>"], answer: "<h1>" },
    { question: "Inside which HTML element do we put JavaScript?", options: ["<js>", "<javascript>", "<script>", "<code>"], answer: "<script>" },
    { question: "CSS stands for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which property is used to change text color in CSS?", options: ["text-color", "color", "font-color", "text-style"], answer: "color" },
    { question: "Which operator is used for assignment in JS?", options: ["==", "=", "===", "=>"], answer: "=" },
    { question: "Which symbol is used for comments in JS?", options: ["//", "<!-- -->", "#", "/* */"], answer: "//" },
    { question: "Which company created JavaScript?", options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"], answer: "Netscape" },
    { question: "Which method converts JSON to a JS object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"], answer: "JSON.parse()" },
    { question: "Which HTML attribute is used to define inline styles?", options: ["class", "id", "style", "font"], answer: "style" },
    { question: "Which tag is used to create a table row?", options: ["<tr>", "<td>", "<table>", "<row>"], answer: "<tr>" },
    { question: "Which method adds an element at the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
    { question: "Which method removes the last element of an array?", options: ["pop()", "push()", "shift()", "unshift()"], answer: "pop()" },
    { question: "What is the value of 2 + '2' in JS?", options: ["4", "'4'", "'22'", "NaN"], answer: "'22'" },
    { question: "Which keyword declares a variable in ES6?", options: ["var", "let", "dim", "declare"], answer: "let" },
    { question: "Which HTML element is used for a paragraph?", options: ["<p>", "<para>", "<paragraph>", "<text>"], answer: "<p>" },
    { question: "Which CSS property changes the background color?", options: ["bgcolor", "background-color", "color", "background"], answer: "background-color" },
    { question: "Which JS method is used to select an element by ID?", options: ["getElementById()", "querySelector()", "getElementsByClassName()", "getElementsByTagName()"], answer: "getElementById()" },
    { question: "Which event occurs when a user clicks on an element?", options: ["onclick", "onchange", "onmouseover", "onhover"], answer: "onclick" },
    { question: "Which HTML element is used to create a link?", options: ["<link>", "<a>", "<href>", "<anchor>"], answer: "<a>" },
    { question: "Which property controls the font size in CSS?", options: ["font-style", "font-weight", "font-size", "text-size"], answer: "font-size" },
    { question: "Which JS function converts a number to a string?", options: ["toString()", "parseInt()", "String()", "Number()"], answer: "toString()" },
    { question: "Which HTML tag is used to define a list item?", options: ["<li>", "<ul>", "<ol>", "<item>"], answer: "<li>" },
    { question: "Which CSS property is used to hide an element?", options: ["display:none", "visibility:hidden", "opacity:0", "all of the above"], answer: "all of the above" },
    { question: "Which JS operator checks equality without type coercion?", options: ["==", "=", "===", "!="], answer: "===" },
    { question: "Which HTML element is used for an image?", options: ["<img>", "<image>", "<pic>", "<src>"], answer: "<img>" },
    { question: "Which HTML element is used for an image?", options: ["<img>", "<image>", "<pic>", "<src>"], answer: "<img>" },
    { question: "Which HTML element is used for an image?", options: ["<img>", "<image>", "<pic>", "<src>"], answer: "<img>" },
    { question: "Which HTML element is used for an image?", options: ["<img>", "<image>", "<pic>", "<src>"], answer: "<img>" },
    { question: "Which HTML element is used for an image?", options: ["<img>", "<image>", "<pic>", "<src>"], answer: "<img>" }
];


let currentQuestion = 0;
const userAnswers = new Array(quizData.length).fill(null); // Stores selected options

// Generate right-side question number buttons
const qncntsection = document.getElementById("question-count");
quizData.forEach((q, index) => {
    const btn = document.createElement("button");
    btn.classList.add("qnum-btn");
    btn.id = `id-${index + 1}`;
    btn.textContent = index + 1;

    // Jump to question on click
    btn.addEventListener("click", () => {
        currentQuestion = index;
        renderQuestion(currentQuestion);
    });

    qncntsection.appendChild(btn);
});

// Function to render a question and options
function renderQuestion(index) {
    const qSection = document.getElementById("question-section");
    qSection.innerHTML = ""; // Clear previous question

    // Question container
    const qDiv = document.createElement("div");
    qDiv.classList.add("question");
    const qNo = document.createElement("h5");
    qNo.textContent = `Question - ${index + 1}`;
    const qText = document.createElement("p");
    qText.textContent = quizData[index].question;
    
    qDiv.appendChild(qNo);
    qDiv.appendChild(qText);

    // Options container
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    quizData[index].options.forEach(option => {
        const optBtn = document.createElement("button");
        optBtn.classList.add("option-btn");
        optBtn.textContent = option;

        // Pre-select if already answered
        if (userAnswers[index] === option) {
            optBtn.classList.add("selected");
        }

        // Option click event
        optBtn.addEventListener("click", () => {
            // Remove selection from other options
            document.querySelectorAll(".option-btn").forEach(btn => btn.classList.remove("selected"));
            // Mark selected
            optBtn.classList.add("selected");
            // Store user answer
            userAnswers[index] = option;

            // Mark question number as answered
            const qNumBtn = document.getElementById(`id-${index + 1}`);
            qNumBtn.classList.add("answered");
        });

        optionsDiv.appendChild(optBtn);
    });

    qSection.appendChild(qDiv);
    qSection.appendChild(optionsDiv);

    // Update active question number
    document.querySelectorAll(".qnum-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`id-${index + 1}`).classList.add("active");
}

// Navigation buttons
document.getElementById("prev").addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion(currentQuestion);
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        renderQuestion(currentQuestion);
    }
});

// Initial render
renderQuestion(currentQuestion);
