#include "player.h"

//
//constructor
//
player::player(std::string n, int a)
{
    name = n;
    health = a;
    health_cap = a;
}

//
//health printing functions
//
std::string player::name_print()
{
    return name;
}

int player::health_print()
{
    return health;
}

void player::player_print()
{
    std::cout << "Name:   " << name_print() << '\n'
              << "Health: " << health_print() << '\n';
}

//
//health functions
//
void player::health_increment(int a)
{
    if(a <= 0) std::cerr << "Not a valid damage counter";

    health += a;
    if(health > health_cap){
        std::cout << "Healed past cap.\n";
        health = health_cap;
    }
}



void player::health_decrement(int a)
{
    if(a <= 0) std::cerr << "Not a valid damage counter";

    health -= a;
    if(health < 0){
        std::cout << "Player is knocked.... begin death saves >:)\n";
    }
}

//
//death save functions
//
void player::death_fail()
{
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

//
//inventory functions
//
void player::inventory_insert(std::string a)
{
    bool found = false;
    for(int i = 0; i < inventory.size(); i++){
        if(inventory[i].name == a){
            inventory[i].count++;
            found = true; 
            break;
        }   
    }

    if(found == true) return;

    std::string des;
    item items;
    items.name = a;
    items.count++;

    std::cout << "Enter a description: ";
    std::cin >> des;
    items.description = des;
}

void player::inventory_remove(std::string a)
{
    for(int i = 0; i < inventory.size(); i++){
        if(inventory[i].name == a){
            inventory[i].count--;
            
            if(inventory[i].count == 0){
                inventory.erase(inventory.begin() + i);
            }
              
            break;
        }   
    }

    std::cout << "You aint even got that\n";
}

void player::inventory_print()
{
    for(int i = 0; i < inventory.size(); i++){
        std::cout << i+1 << ". " << inventory[i].name << " x" << inventory[i].count
                  << '\n';  
    }
}