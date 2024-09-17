#include "player.h"


int main(int argc, char *argv[]){

    if(argc != 3){
        std::cerr << "Usage: " << argv[0] << " <name> <health> \n";  
    }

    player player1(argv[1], int(argv[2]));

    







    return 0;
}