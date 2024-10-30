- Name: Michael Lisenko
- Github ID: mikelisenko
- Group: Tabletop-Stat-Tracker

## Issues I planned to fix:
- Create new png icons for the dice in the dropdown and display their numerical value [#36](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/36)
- Create elements and stylings of "dummy card" displayed on player's client [#37](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/37)
- Create functions for creating, updating, and deleting dummy cards on player's client [#38](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/38)


## What I did not do:
- I did all my assigned issues but I should have contributed more to the visual side of the enemy class. But that's okay because it wasn't a main concern for this sprint.

## Problems I encountered:
- I encountered some problems testing as I was working on some code that worked along with the server (the dummy card functions) and since I am less familiar with the server side of our code, it made it difficult to test and see what I needed to fix on my own

## Issues I worked on:
- All of the issue above EXCEPT [#39](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/39)

## Files I worked on:
- RetroRoller/web/playerview/hostView_stylesheet2.css
- RetroRoller/web/playerview/playerview2.html
- frontEnd/hostView2_consoleLog.html
- RetroRoller/web/hostview/hostView2.html
- frontEnd/d4.png
- frontEnd/d6.png
- frontEnd/d8.png
- frontEnd/d10.png
- frontEnd/d12.png
- frontEnd/d20.png

## What I accomplished:
- I accomplished making the dice roller look better with our own icons instead of using pngs from the internet that weren't ours (the previous place we used those as a placeholder).
- I accomplished creating the look of the dummy cards that get dynamically updated on the player view end. I will keep improving the look for the next sprint but for not it accomplishes its basic goal.
- I accomplished making functions for creating, updating, and deleting the dummy cards. This code works in tandem with the server code as the dummy card class is sent across the local server to be displayed on the player's device.
- The dummy card function code was the most involved code for me this sprint as I was working with a team member in charge of the server side of the code so we had to work together to get it working properly.
