#include <httpserver.hpp>

// Welcome Screen CSS and HTML
class css_welcome : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        auto res = new httpserver::file_response("../frontend/welcome.css", 200, "text/css");
        return std::shared_ptr<httpserver::http_response>(res);
    }
};

class html_welcome : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        auto res = new httpserver::file_response("../frontend/welcome.html", 200, "text/html");
        return std::shared_ptr<httpserver::http_response>(res);
    }
};

// Login Screen CSS and HTML
class css_login : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        auto res = new httpserver::file_response("../frontend/login.css", 200, "text/css");
        return std::shared_ptr<httpserver::http_response>(res);
    }
};

class html_login : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        auto res = new httpserver::file_response("../frontend/login.html", 200, "text/html");
        return std::shared_ptr<httpserver::http_response>(res);
    }
};

// Host View HTML and CSS
class css_host : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        auto res = new httpserver::file_response("../hostView/hostView_stylesheet.css", 200, "text/css");
        return std::shared_ptr<httpserver::http_response>(res);
    }
};

class html_host : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        auto res = new httpserver::file_response("../hostView/hostView.html", 200, "text/html");
        return std::shared_ptr<httpserver::http_response>(res);
    }
};

// Player View HTML and CSS
class css_player : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        auto res = new httpserver::file_response("../frontend/playerview.css", 200, "text/css");
        return std::shared_ptr<httpserver::http_response>(res);
    }
};

class html_player : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        auto res = new httpserver::file_response("../frontend/playerview.html", 200, "text/html");
        return std::shared_ptr<httpserver::http_response>(res);
    }
};

// Misc Images and Resources
class html_logopng : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        auto res = new httpserver::file_response("../hostView/dndLogo.png", 200, "text/png");
        return std::shared_ptr<httpserver::http_response>(res);
    }
};

class html_playerpng : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        auto res = new httpserver::file_response("../hostView/player_icon.png", 200, "text/png");
        return std::shared_ptr<httpserver::http_response>(res);
    }
};

class html_opencarpet : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        auto res = new httpserver::file_response("../frontend/carpet1.png", 200, "text/png");
        return std::shared_ptr<httpserver::http_response>(res);
    }
};