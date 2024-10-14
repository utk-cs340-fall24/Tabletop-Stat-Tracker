#include <iostream>
#include "player.h"
int main(int argc, char *argv[]){

    if(argc != 3){
        std::cerr << "Usage: " << argv[0] << " <name> <health> \n";  
        return 1;
    }

    player player1(argv[1], std::stoi(argv[2]));
    std::string input;
    int modifier;

    player1.player_print();

    
        std::cout << "Damage or Healing?\n";
        std:: cin >> input;
        if("Healing" == input ){
            std::cout << "How much health did you gain?\n";
            std::cin >> modifier;
            player1.health_increment(modifier);
            player1.player_print();
        } else if("Damage" == input){
            std::cout << "How much damage did you take?\n";
            std::cin >> modifier;
            player1.health_decrement(modifier);
            player1.player_print();
        }else{
            std::cout << "Not a valid input. Try again\n";
        }
    
        std::string item;
        std::cout << "Enter an item: ";
        std::cin >> item;
        player1.inventory_insert(item);

        

        std::cout << "And another: ";
        std::cin >> item;
        player1.inventory_insert(item);


        player1.inventory_print();
    return 0;
}

