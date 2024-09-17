#include "player.h"


player::player(std::string n, int a){
    name = n;
    health = a;
}


void player::health_increment(int a){
    if(a <= 0) std::cerr << "Not a valid damage counter";

    health += a;
}



void player::health_decrement(int a){
    if(a <= 0) std::cerr << "Not a valid damage counter";

    health -= a;
}