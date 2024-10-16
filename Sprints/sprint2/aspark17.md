- Name: Aaron Sparks
- GitHub ID: aspark17
- Group: Tabletop-Stat-Tracker(Retro Roller)

## Issues I planned to fix:
- Add Password / Token Functionality to Player / Host Logins. Issue #6 [https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/6]
- Convert C++ libhttp code to Node.js for increased functionality. Issue #25 [https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/25]
- Display Local I.P Address for ease of use. Issue #17 [https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/17]
- Create a system of sharing information between the front-end and back-end. Issue #4 [https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/4]

## What I did not do:
- As with Sprint 1, the most difficult issue (information sharing / client sync) was not finished. This will be the main focus of Sprint 3, as it will require far greater integration across the Front-End and Back-End to get running. However, we did do some planning and discussion this sprint, and I believe we have an idea for how to accomplish this data sharing. This method was used to do the randomly generated token passwords in Issue #6.

## Problems I encountered:
- While there is a lot of good information on Node.js, Javascript, and HTML, it can be a bit hard for me to read and code it as I am more used to C++. 

## Issues I worked on:
-  I worked on and completed all the issues above (aside from #4). Additionally, we spent time cleaning up and organizing our github, as well as planning for Sprint 3. 

## Files I worked on:
Tabletop-Stat-Tracker/RetroRoller/server.js
Tabletop-Stat-Tracker/RetroRoller/runserver.bat
Tabletop-Stat-Tracker/RetroRoller/hostview/hostView2.html
Tabletop-Stat-Tracker/RetroRoller/startup/playerlogin.html
Tabletop-Stat-Tracker/RetroRoller/startup/hostlogin.html

## What I accomplished:
- I was able to set up a Node.js based server, instead of the old C++ one. This will increase functionality and make it far easier to develop the application. 
- Additionally, I added increased user-friendliness to this new Node.js server. It is launchable from windows using a .bat file, and will display the host's IP as well as copy it to clipboard for easy sharing. It also randomly generates token codes and passes it down to the HTML code. 