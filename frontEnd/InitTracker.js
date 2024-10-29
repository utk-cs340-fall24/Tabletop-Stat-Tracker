class Pers{
    constructor(name, init){
        this.name = name;
        this.init = init;
    }
}

const track=[];
let rounds = 1;
let turn = 0;

function setList(name, init){
    track.push(new Pers(name, init));
    track.sort(initSort);
}

function getList(){
    return track;
}

function initSort(a,b){
    return a.init - b.init;
}

function next(){

    alert("Current Round: " + rounds + "\nCurrent Turn: " + track[turn].name);
        if (turn === track.length - 1) {
            turn = 0;
            rounds++;
        } else {
            turn++;
            return;
        }
}