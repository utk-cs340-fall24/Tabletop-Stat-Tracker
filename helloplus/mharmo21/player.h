#include <string>
#include <iostream>
#include <string.h>
class player
{
    private:
    int health;
    int health_cap;
    std::string name;

    public:
    player(std::string, int);
    void health_decrement(int);
    void health_increment(int);
    int health_print();
    std::string name_print();
    void player_print();
};