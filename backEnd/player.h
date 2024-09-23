#include <string>
#include <iostream>
#include <vector>

struct item{
    std::string name;
    int count;
    std::string description;
};



class player
{
    private:
        //general information
        std::string name;
        
        //inventory
        std::vector<item> inventory;

        //health information
        int health;
        int health_cap;
        int death_save_fails;
        int death_save_sucesses;

    public:
        //general
        player(std::string, int);
        void player_print();
        std::string name_print();
        
        //inventory
        void inventory_print();
    
        //health
        void health_decrement(int);
        void health_increment(int);
        int  health_print();
        void death_fail();
        void death_success();
};