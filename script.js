// ================================
// 1. CONFIRM THAT JAVASCRIPT LOADED
// ================================
console.log("Portfolio loaded successfully!");

// ================================
// 2. UPDATE THE FOOTER YEAR
// ================================
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent = `© ${new Date().getFullYear()} Alex Carter. Example portfolio.`;
}

// ================================
// 3. WELCOME MESSAGE WHEN PAGE LOADS
// ================================
window.addEventListener("load", () => {
    console.log("Welcome to Alex Carter's example portfolio!");
});

// ================================
// 4. PROJECT BUTTON INTERACTION
// ================================
const exploreButton = document.querySelector('#home > a');

if (exploreButton) {
    exploreButton.addEventListener("click", () => {
        console.log("Exploring the featured projects!");
    });
}

// ================================
// 5. DISPLAY THE CURRENT TIME IN THE CONSOLE
// ================================
function showTime() {
    const currentTime = new Date().toLocaleTimeString();
    console.log("Current time:", currentTime);
}

showTime();

// ================================
// 6. DETECT THE SCREEN SIZE
// ================================
function checkScreenSize() {
    if (window.innerWidth <= 600) {
        console.log("Mobile screen detected.");
    } else {
        console.log("Desktop or tablet screen detected.");
    }
}

checkScreenSize();
window.addEventListener("resize", checkScreenSize);
