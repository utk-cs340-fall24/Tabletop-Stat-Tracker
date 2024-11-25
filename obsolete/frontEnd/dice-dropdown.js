// Dice roller js code
// This stuff here rn makes the box show up when user clicks the button 

document.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        document.querySelectorAll(".active").forEach(dropdown => dropdown.classList.remove("active"));
    }
});

document.addEventListener('click', (e) => {
    const isDropdownButton = document.querySelector('[data-dropdown-button]');
    const isDropdown = document.querySelector('[data-dropdown]');

    // Check if the click target is the dice button
    if (isDropdownButton.contains(e.target)) {
        isDropdown.classList.toggle('active');
        return; // Exit if the dice button was clicked
    }

    // Check if the click is outside of the dropdown and dice button
    if (!isDropdownButton.contains(e.target) && !isDropdown.contains(e.target)) {
        isDropdown.classList.remove('active');
    }
});

// Settings dropdown logic
document.addEventListener('click', (e) => {
    const settingsDropdown = document.querySelector('[data-settings-dropdown]');
    const settingsButton = document.querySelector('[data-settings-button]');

    // Check if the click target is the settings button
    if (settingsButton.contains(e.target)) {
        settingsDropdown.classList.toggle('active');
        return; // Exit if the settings button was clicked
    }

    // Check if the click is outside of the dropdown and settings button
    if (!settingsDropdown.contains(e.target) && !settingsButton.contains(e.target)) {
        settingsDropdown.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const endSessionButton = document.querySelector(".end-session");
    const confirmationDiv = document.querySelector(".end-session-confirmation");

    endSessionButton.addEventListener("click", () => {
        confirmationDiv.style.display = confirmationDiv.style.display === "none" ? "block" : "none";
    });

    // Handle Save Session
    document.querySelector(".save-session").addEventListener("click", () => {
        // Logic to save the session goes here
        alert("Session saved!");
        confirmationDiv.style.display = "none"; // Hide confirmation options.
    });

    // Handle Don't Save
    document.querySelector(".dont-save").addEventListener("click", () => {
        // Logic to end the session without saving goes here
        alert("Session ended without saving.");
        confirmationDiv.style.display = "none";
    });

    // Handle Cancel, nothing happens. 
    document.querySelector(".cancel-end-session").addEventListener("click", () => {
        confirmationDiv.style.display = "none";
    });
});