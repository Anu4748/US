// Select elements
const surpriseButton = document.getElementById("surpriseButton");
const countdownContainer = document.getElementById("countdownContainer");
const countdownDisplay = document.getElementById("countdown");
const bgMusic = document.getElementById("bgMusic");

// Automatically play music on page load
bgMusic.volume = 0.5; // Adjust volume
bgMusic.play().catch(() => {
    console.log("Autoplay blocked, user interaction required");
});

// Start a countdown timer
let countdown;
function startCountdown() {
    countdownContainer.classList.remove("hidden");
    let timeLeft = 10; // 10 seconds countdown

    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            countdownDisplay.textContent = "It's Time! 🎉";
            showSurpriseMessage();
        } else {
            countdownDisplay.textContent = `${timeLeft} seconds remaining...`;
            timeLeft--;
        }
    }, 1000);
}

// Show a surprise message
function showSurpriseMessage() {
    alert("Surprise! Just wanted to remind you how much I love you. 🥰");
}

// Add event listener to button
surpriseButton.addEventListener("click", () => {
    startCountdown();
    bgMusic.play(); // Ensure music plays if paused
});
