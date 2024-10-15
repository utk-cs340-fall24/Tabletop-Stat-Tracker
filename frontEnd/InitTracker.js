class Pers{
    constructor(name, init){
        this.name = name;
        this.init = init;
    }
}

function initSort(a,b){
    return a.init - b.init;
}


const track=[];
let rounds = 1;
let turn = 0;

function setList(newTrack){
    
    for(let i = 0; i < newTrack.length; i++){
        const init = parseInt(prompt("Enter Initiative: "));
        track.push(new Pers(newTrack[i], init));
    }
    track.sort(initSort);
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