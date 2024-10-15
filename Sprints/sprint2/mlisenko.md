- Name: Michael Lisenko
- Github ID: mikelisenko
- Group: Tabletop-Stat-Tracker

## Issues I planned to fix:
- Scroll functionality for each player box [#29](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/29)
- Front end for initiative tracker [#28](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/28)
- Be able to choose specific attributes to remove with a button [#20](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/20)
- Make adding/removing inventory items work the same way the updated attribute system works [#26](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/26)
- Make pop-up window for selecting player icons [#27](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/27)


## What I did not do:
- None of these were defined issues for this sprint but things that I worked on but didn't perfect/finish are:
- Upload image box
- Button that adds drap and drop functionality to the player boxes so you could reorganize them

## Problems I encountered:
- I need to learn how to dynamically resize certain divs/elements so that when the window is minimized things will resize with it
- Displaying pngs/jpegs on the page

## Issues I worked on:
- All the issues above are the ones I worked on

## Files I worked on:
- RetroRoller/web/hostview/hostView2.html
- RetroRoller/web/hostview/hostView_stylesheet2.css

## What I accomplished:
- I reworked the layout of the player boxes so it's more convenient to add/remove attributes and inventory items
- Now when one player adds more things to their box, they will be able to scroll in their box and all the other player boxes will remain the same size
- I added more customization to the player icons. Now players can click on the icon and a pop-up will open with more icons. I only added three for the purposes of the demo but more will be added later
- The initiative tracker in the top-left of the site will show the players the turn order, formatted as a list of comma separated names, and they will know it's their turn when their box is highlighted. The game host can go forward or backwards in the turn order with buttons.
