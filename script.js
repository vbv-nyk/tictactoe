'use strict';

const gameBoard = (function(){
    const boardItem = document.querySelectorAll(".board-item");
    let board = [];
    let turn = 0;
    let won = false;

    for(let boardCell of boardItem) {
        boardCell.addEventListener("click",(event)=>{
            if(turn == 9 || won == true){
                resetBoard();
            }else if(!boardCell.textContent){
                if(turn&1){
                    boardCell.textContent = 'O';
                    board[event.target.dataset['item']] = 'O';
                    checkBoard('O');
                }else{
                    boardCell.textContent = 'X';                    
                    board[event.target.dataset['item']] = 'X';
                    checkBoard('X');
                }  
                turn++;
            }
        })
    }

    const createBoard = function(player1Name, 
        player2Name){
        const player1 = player(player1Name);
        const player2 = player(player2Name);    
    }

    const checkBoard = function(playerTurn){
        console.log(board);
        if((board[1] == playerTurn && board[2] == playerTurn && board[3] == playerTurn) || (board[3] == playerTurn && board[5] == playerTurn && board[7] == playerTurn) || (board[4] == playerTurn && board[5] == playerTurn && board[6] == playerTurn) || (board[7] == playerTurn && board[8] == playerTurn && board[9] == playerTurn) || (board[1] == playerTurn && board[5] == playerTurn && board[9] == playerTurn) || (board[1] == playerTurn && board[4] == playerTurn && board[7] == playerTurn) || (board[2] == playerTurn && board[5] == playerTurn && board[8] == playerTurn) || ((board[3] == playerTurn && board[6] == playerTurn && board[9] == playerTurn))){
            console.log(`${playerTurn} Wins`);
            won  = true;
        }
    }

    const resetBoard = function(){
        for(let boardCell of boardItem){
            boardCell.textContent = "";
        }
        board = [];
        turn = 0;
        won = false;
    }
    return{createBoard,resetBoard};
})();

const player = function(name){
    let score = 0;
    return{name,score};
}

gameBoard;
gameBoard.createBoard("Vaibhav","Vilas");
