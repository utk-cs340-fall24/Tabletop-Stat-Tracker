#include <string>
#include <iostream>

class player{

    private:
    int health;
    std::string name;

    public:
    player(std::string, int);
    void health_decrement(int);
    void health_increment(int);


};