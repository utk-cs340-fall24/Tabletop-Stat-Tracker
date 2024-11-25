// Dice roller js code
// This stuff here rn makes the box show up when user clicks the button
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document
      .querySelectorAll(".active")
      .forEach((dropdown) => dropdown.classList.remove("active"));
  }
});

document.addEventListener("click", (e) => {
  const isDropdownButton = document.querySelector("[data-dropdown-button]");
  const isDropdown = document.querySelector("[data-dropdown]");
  // Check if the click target is the dice button
  if (isDropdownButton.contains(e.target)) {
    isDropdown.classList.toggle("active");
    return; // Exit if the dice button was clicked
  }
  // Check if the click is outside of the dropdown and dice button
  if (!isDropdownButton.contains(e.target) && !isDropdown.contains(e.target)) {
    isDropdown.classList.remove("active");
  }
});

// Settings dropdown logic
document.addEventListener("click", (e) => {
  const settingsDropdown = document.querySelector("[data-settings-dropdown]");
  const settingsButton = document.querySelector("[data-settings-button]");
  // Check if the click target is the settings button
  if (settingsButton.contains(e.target)) {
    settingsDropdown.classList.toggle("active");
    return; // Exit if the settings button was clicked
  }
  // Check if the click is outside of the dropdown and settings button
  if (
    !settingsDropdown.contains(e.target) &&
    !settingsButton.contains(e.target)
  ) {
    settingsDropdown.classList.remove("active");
  }
});



