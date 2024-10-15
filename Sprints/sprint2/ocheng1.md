# Sprint 2

Olivia Cheng, oliviaccheng, Tabletop-Stat-Tracker

### What I planned to do
* Create Drop-down menu for the dice roller function [#22](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/22) Pop-down menu for dice roller
* Revise/add graphic design features [#24](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/24) Fine-tune graphic design 
* Create a profile management system for the host [#11](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/11) Profile Management - Host
* Rework login pages for session codes [#23](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/23) Adjust login/register to reflect server hosting/joining

### What I did not do
* Create a profile management system for the host or player. 

### What problems I encountered
* I had/still have difficulty with the dice roller functionality and linking it with the backend. It works, but is a bit clunky. 

### Issues I worked on
* Create Drop-down menu for the dice roller function [#22](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/22) Pop-down menu for dice roller
* Revise/add graphic design features [#24](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/24) Fine-tune graphic design 
* Rework login pages for session codes [#23](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/23) Adjust login/register to reflect server hosting/joining

### Files I worked on
* frontend/dice-dropdown.js
* frontend/hostview.html
* frontend/hostView_stylesheet.css
* RetroRoller/web/startup/hostlogin.css
* RetroRoller/web/startup/hostlogin.html
* RetroRoller/web/startup/playerlogin.css
* RetroRoller/web/startup/playerlogin.html
* RetroRoller/web/startup/register.css
* RetroRoller/web/startup/register.html
* RetroRoller/web/startup/type.html
* RetroRoller/web/startup/type.css
* RetroRoller/web/startup/welcome.html
* RetroRoller/web/startup/welcome.css

### What you accomplished
I reworked all of my previous login pages. I reformatted them and the JavaScript to take in a session code and username instead of a username and password. We did
this to move away from creating user accounts to just joining a session. I also created the basic dropdown menu for the dice roller. The user (for now) inputs
how many dice they want and how many sides and it returns a randomized roll for them. I'm going to improve this interface moving forward. I'm proud of the dropdown menu, as it moves/transitions smoothly into the host dashboard and collapses easily. 
