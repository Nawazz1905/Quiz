var startButton = document.querySelector(".start");

startButton.addEventListener('click', function () {
    document.body.classList.add('fade-out'); // Apply fade-out effect
    setTimeout(() => {
        window.location.href = "quiz.html";
    }, 500);

});
