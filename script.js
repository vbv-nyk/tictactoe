'use strict';

const gameBoard = (function(){
    const boardItem = document.querySelectorAll(".board-item");
    let board = [];
    let turn = 0;

    for(let boardCell of boardItem) {
        boardCell.addEventListener("click",()=>{
            if(!boardCell.textContent){
                if(turn&1){
                    boardCell.textContent = "O";
                }else{
                    boardCell.textContent = "X";
                }
                turn++;
            }else if(turn == 9){
                resetBoard();
            }
        })
    }
    
    const createBoard = function(player1Name, 
        player2Name){
        const player1 = player(player1Name);
        const player2 = player(player2Name);    
    }

    const resetBoard = function(){
        for(let boardCell of boardItem){
            boardCell.textContent = "";
        }
        turn = 0;
    }

    return{createBoard,resetBoard};
})();

const player = function(name){
    let score = 0;
    return{name,score};
}

gameBoard;
gameBoard.createBoard("Vaibhav","Vilas");
