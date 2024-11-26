class Pers{
    constructor(name, init){
        this.name = name;
        this.init = init;
    }
}

const track=[];
let round = 1;
let turn = 0;

function setList(name, init){
    track.push(new Pers(name, init));
    track.sort(initSort);
}

function getList(){
    return track;
}

function getTurns(){
    return turn + 1;
}

function getRounds(){
    return round;
}

function initSort(a,b){
    //return a.init - b.init;
    return b.init - a.init;
}

function next(){

    //alert("Current Round: " + rounds + "\nCurrent Turn: " + track[turn].name);
    if (turn === track.length - 1) {
        turn = 0;
        round++;
    } else {
        turn++;
    }
}

function prev(){
    if(turn === 0){
        turn = track.length - 1;
        round--;
    }else{
        turn--;
    }
}

function clearList() {
    track.length = 0; // Clears all contents of the track array
    turn = 0;         // Reset turn counter
    round = 1;       // Reset rounds counter
}