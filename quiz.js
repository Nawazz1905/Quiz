let data = [
    { question: "What is the world's fastest bird?", options: ["Peacock", "Crow", "Vulture", "Peregrine Falcon"], answer: 3 },
    { question: "What is the name of the planet with the Great Red Spot?", options: ["Earth", "Sun", "Jupiter", "Pluto"], answer: 2 },
    { question: "What is the force that keeps planets in orbit?", options: ["Centrifugal Force", "Gravity", "Universal Force", "Potential Energy"], answer: 1 },
    { question: "What's the national flower of Japan?", options: ["Lotus", "Rose", "Cherry Blossom", "Spider Lily"], answer: 2 },
    { question: "Who invented the World Wide Web?", options: ["Jackie Chan", "Donald Trump", "Tim Berners-Lee", "Mark Zuckerberg"], answer: 2 },
];

let currentIndex = 0;
let selectedAnswers = [];
let question = document.querySelector(".question");
let options = document.querySelectorAll(".option");
let prevButton = document.querySelector(".prevbtn");
let nextButton = document.querySelector(".nextbtn");
let resetButton = document.querySelector(".tores");
let submitButton = document.querySelector(".tosub");
let scoreBox = document.querySelector(".score-box");
let scoreP = document.querySelector(".score-content p");
let scorePage = document.querySelector(".score-page")



// FUNCTION TO DISPLAY QUESTION
function DisplayQuestion() {
    question.innerText = data[currentIndex].question;
    DisplayOptions();
}

// FUNCTION TO DISPLAY OPTIONS
function DisplayOptions() {
    data[currentIndex].options.forEach((option, index) => {
        options[index].innerText = option;
        options[index].style.backgroundColor = ""; // Reset styles
        options[index].style.color = "";

        if (selectedAnswers[currentIndex] === index) {
            options[index].style.backgroundColor = "black"; // Selected option styling
            options[index].style.color = "white";
        }
    });
}

// ADD CLICK EVENT TO OPTIONS
options.forEach((option, index) => {
    option.addEventListener("click", () => {
        selectedAnswers[currentIndex] = index; // Store selected answer
        DisplayOptions(); // Refresh UI
    });
});

// FUNCTION TO MOVE TO PREVIOUS QUESTION
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        DisplayQuestion();
    }
});

// FUNCTION TO MOVE TO NEXT QUESTION
nextButton.addEventListener("click", () => {
    if (currentIndex < data.length - 1) {
        currentIndex++;
        DisplayQuestion();
    }
});

// FUNCTION TO RESET QUIZ
resetButton.addEventListener("click", () => {
    selectedAnswers = [];
    currentIndex = 0;
    DisplayQuestion();
    scoreBox.innerText = " ";
    scoreP.innerText = " ";
    scorePage.style.display = "none";
});

// FUNCTION TO SUBMIT QUIZ
submitButton.addEventListener("click", () => {
    let score = 0;
    data.forEach((question, index) => {
        if (selectedAnswers[index] === question.answer) {
            score++;
        }
    });


    scorePage.style.display = "flex";
    displayScore(score);

    

    // Smoothly scroll to the score page
    document.querySelector(".score-page").scrollIntoView({ behavior: "smooth" });
});

// FUNCTION TO DISPLAY SCOREEE
function displayScore(score){
    scoreBox.innerText = `${score}/5`; 
if (score === 5) {
    scoreP.innerText = "Congrats, You are a topper";
} else if (score > 2) { 
    scoreP.innerText = "Keep learning, you are close!";
} else {
    scoreP.innerText = "Need some work, but you'll get there.";
}   
}


DisplayQuestion();
