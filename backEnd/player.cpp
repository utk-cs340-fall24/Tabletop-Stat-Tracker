#include "player.h"

player::player(std::string n, int a){
    name = n;
    health = a;
    health_cap = a;
}

std::string player::name_print(){
    return name;
}

int player::health_print(){
    return health;
}

void player::player_print(){
    std::cout << "Name:   " << name_print() << '\n'
              << "Health: " << health_print() << '\n';
}


void player::health_increment(int a){
    if(a <= 0) std::cerr << "Not a valid damage counter";

    health += a;
    if(health > health_cap){
        std::cout << "Healed past cap.\n";
        health = health_cap;
    }
}



void player::health_decrement(int a){
    if(a <= 0) std::cerr << "Not a valid damage counter";

    health -= a;
    if(health < 0){
        std::cout << "Player is knocked.... begin death saves >:)\n";
    }
}


void player::death_fail(){
    death_save_fails++;
    if(death_save_fails >= 3){
        std::cout << "YOU ARE DEAD!!!\n";
    }
}

void player::death_success(){
     death_save_sucesses++;
    if(death_save_sucesses >= 3){
        std::cout << "YOU ARE BACK UP! DON'T WASTE THIS CHANCE\n";
    }
    health = 1;
}