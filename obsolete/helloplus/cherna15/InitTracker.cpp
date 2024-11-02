#include <iostream>
#include <vector>
#include <algorithm>
using namespace std; 

struct Pers{
    string name;
    int init;
};

bool initSort(Pers i, Pers j){
    return i.init < j.init;
};

int main(int argc, char *argv[]) {

    vector<Pers> track;
    int rounds = 1;

    cout << "Begin by putting in initial Names, Health, and Initiative. Start your combat by typing START." << endl; 
    while(1){
        Pers temp;
        cout << "Enter a name, or type START: ";
        cin >> temp.name;
        
        if(temp.name == "START"){break;}

        cout << "Enter Initiative: ";
        cin >> temp.init;

        track.push_back(temp);
    }

    sort(track.begin(), track.end(), initSort);

    cout << "Welcome to the start of your combat! Type 'NEXT' or 'END' to quit: " << endl;
    int i = 0;
    string inp;

    while(1){
        cout << "Current Round: " << rounds << endl;
        cout << "Current Turn: " << track[i].name << endl;
        cout << "> ";

        cin >> inp;
        if(inp == "NEXT"){
            if(i == track.size()-1){
                i = 0;
                rounds++;
            }else{
                i++;
            }
        }else if(inp == "END"){
            cout << "Combat Ended!" << endl;
            return 1;
        }
    }
}

