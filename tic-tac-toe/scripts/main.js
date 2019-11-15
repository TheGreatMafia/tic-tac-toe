let turn = document.getElementById("turn");

let boxes = document.querySelectorAll("#main div");
let player = ["x","o"];
let winner = null;

function selectWinnerBoxes(winner){
    // b1.classList.add("win");
    // b2.classList.add("win");
    // b3.classList.add("win");
    if (winner != "Tie"){
        turn.innerHTML = winner + " Won Congrats";
        turn.style.fontSize = "40px";
    }
    else{
        turn.innerHTML = "It's a Tie!";
        turn.style.fontSize = "40px";
    }
}
            
function getWinner(){             
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");

    let grid = [[box1.innerHTML,box2.innerHTML,box3.innerHTML],
                [box4.innerHTML,box5.innerHTML,box6.innerHTML],
                [box7.innerHTML,box8.innerHTML,box9.innerHTML]];
    
    for(let i = 0;i<3;i++){
        for(let j = 0; j<3; j++){
            if(grid[0][j] === grid[1][j] && grid[0][j] === grid[2][j] && grid[0][j] !== ""){
                winner = grid[0][j];
                selectWinnerBoxes(winner);
            }
            else if(grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2] && grid[i][0] !== ""){
                winner = grid[i][0];
                selectWinnerBoxes(winner);
            }
            else if (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] !== ""){
                winner = grid[0][0];
                selectWinnerBoxes(winner);
            }
            else if (grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2] && grid[2][0] !== ""){
                winner = grid[2][0];
                selectWinnerBoxes(winner);
            }
            else if (winner === null && !( grid[0].includes("") || grid[1].includes("") || grid[2].includes("") )){
                winner = "Tie"
                selectWinnerBoxes(winner)
            }
        }            
    }
}            

let counter = 0;

// set event onclick
for(let i = 0; i < boxes.length; i++){
    boxes[i].onclick = function(){
        // not allow to change the value of the box
        if(this.innerHTML !== "X" && this.innerHTML !== "O" && winner === null){
            if(counter%2 === 0){
                console.log(player[0]);
                this.innerHTML = "X"; 
                turn.innerHTML = "O Turn Now";
                getWinner();
            }
            else{
                console.log(player[1]);
                this.innerHTML = "O";
                turn.innerHTML = "X Turn Now";
                getWinner();  
            }
                counter++;
        return winner;
        }
        else{
            alert("Please restart the game!");
        }
    };
}
            
function replay(){
    for(let i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";    
    }
    winner = null;
    turn.innerHTML = "Play";
    turn.style.fontSize = "25px";
}
