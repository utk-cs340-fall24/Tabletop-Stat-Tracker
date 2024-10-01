class Pers{
    constructor(name, init){
        this.name = name;
        this.init - init;
    }
}

function initSort(a,b){
    return a.init - b.init;
}


const track=[];
let rounds = 1;

console.log("Begin by putting in initial Names, Health, and Initiative. Start your combat by typing START.");

while(true){
    const name = prompt("Enter a name, or type START: ");

    if(name === "START"){
            break;
    }

    const init = parseInt(prompt("Enter Initiative: "));
    track.push(new Pers(name, init));
}

track.sort(initSort);
let i = 0;
let inp;

while(true){
    inp = prompt(`Type 'NEXT' for next turn, or 'END' to quit \nCurrent Round: ${rounds} \nCurrent Turn: ${track[i].name}` );

    if (inp === "NEXT") {
        if (i === track.length - 1) {
            i = 0;
            rounds++;
        } else {
            i++;
        }
    }else if (inp === "END") {
        console.log("Combat Ended!");
        break;
    }
}