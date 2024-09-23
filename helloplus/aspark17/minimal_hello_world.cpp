#include <httpserver.hpp>

class hello_world_resource : public httpserver::http_resource
{
public:
    std::shared_ptr<httpserver::http_response> render(const httpserver::http_request &)
    {
        return std::shared_ptr<httpserver::http_response>(new httpserver::string_response("Hello, World Test!"));
    }
};

int main()
{
    httpserver::webserver ws = httpserver::create_webserver(8080);

    hello_world_resource hwr;
    ws.register_resource("/hello", &hwr);
    ws.start(true);

    return 0;
}
