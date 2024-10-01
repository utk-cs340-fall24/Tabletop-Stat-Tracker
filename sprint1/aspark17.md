# Sprint 1

### What I planned to do
- Create a system of sharing information between the front-end and back-end [#4](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/4)
- Integrate HTML/CSS/JavaScript onto the webserver [#5](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/5)
- Add functionality to allow users to sign in as DM or Player[#6](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/6)

### What I did not do
-I was not able to work on issues 4 or 6 due to the time it took to implement issue 5. Additionally, issues 4 and 6 will require more of a group effort between front-end, back-end, and myself to set it up correctly. Right now our biggest hurdle is issue 4, as we need to research how to send information not only from front-end to back-end, but also how to synchronize information across clients and the host.

### Issues I encountered
The largest issue I faced was communication between the front-end and back-end, which is why all of the implementation currently on the webserver is the front-end UI. 

### Issues I worked on
-[#5](https://github.com/utk-cs340-fall24/Tabletop-Stat-Tracker/issues/5) Implemented HTML and CSS onto the webserver

### Files I worked on
Tabletop-Stat-Tracker/backEnd/resources.cpp
Tabletop-Stat-Tracker/backEnd/server.cpp
Tabletop-Stat-Tracker/backEnd/serverhost

### What I accomplished
I was able to take the HTML/CSS files given to me by Olivia and Mike and successfully host them on the C++ webserver. This was the first of many large hurdles to get over when it comes to creating this program, as essentially everything being developed relies on this webserver. Developing using the libhttpserver library is interesting, as it is all completely new to me. Luckily I have dealt with networking issues before, but the bulk of the time I sank into this sprint came from the initial setup of the library, and configuring my firewalls/ports to actually run the server successfully.
