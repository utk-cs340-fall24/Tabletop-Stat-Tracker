#include "resources.cpp"
#include <fstream>
#include <iostream>

int main()
{
    // Starts webserver on port 8080.
    httpserver::webserver ws = httpserver::create_webserver(8080);

    // Creates pages
    html_welcome welcome_h;
    ws.register_resource("/welcome.html", &welcome_h);
    css_welcome welcome_c;
    ws.register_resource("/welcome.css", &welcome_c);
    html_login login_h;
    ws.register_resource("/login.html", &login_h);
    css_login login_c;
    ws.register_resource("/login.css", &login_c);
    html_host host_h;
    // Temporarily named helloplus2 until frontend organization changes are made.
    ws.register_resource("/helloplus2.html", &host_h);
    css_host host_c;
    ws.register_resource("/hostView_stylesheet.css", &host_c);
    html_opencarpet carpet;
    ws.register_resource("/carpet1.png", &carpet);
    html_playerpng player;
    ws.register_resource("/player_icon.png", &player);
    html_logopng logo;
    ws.register_resource("/dndLogo.png", &logo);
    // Starts server
    ws.start(true);

    return 0;
}