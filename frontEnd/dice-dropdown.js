/* dice roller js code
this stuff here rn makes the box show up when user clicks the button 
*/
document.addEventListener('click', e =>  {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown == currentDropdown) return
        dropdown.classList.remove('active')
    })
})

let dice = document.getElementById('dice-input').value //assigns user input to 'dice'