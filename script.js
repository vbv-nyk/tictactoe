'use strict';

const gameBoard = (function(){
    const boardItem = document.querySelectorAll(".board-item");
    const displayInfo = document.querySelector(".display-info");
    const player1Name = document.querySelector(".player-1")
    const player2Name = document.querySelector(".player-2")
    let board = [];
    let turn = 0;
    let won = false;

    const player = function(name){
        return{name};
    }

    const player1 = "Vaibhav";
    const player2 = "vi";

    displayInfo.textContent = `${player1}'s Turn`
    player1Name.textContent = player1;
    player2Name.textContent = player2;
    for(let boardCell of boardItem) {
        boardCell.addEventListener("click",(event)=>{
            if(won){
                resetBoard();
            }else if(!boardCell.textContent){
                if(turn&1){
                    displayInfo.textContent = `${player1}'s Turn`;
                    boardCell.textContent = 'O';
                    board[event.target.dataset['item']] = 'O';
                }else{
                    displayInfo.textContent = `${player2}'s Turn`;
                    boardCell.textContent = 'X';                    
                    board[event.target.dataset['item']] = 'X';
                }  
                turn++;
                checkBoard('O',player2);
                checkBoard('X',player1);
            }
        })
    }
    const checkBoard = function(playerTurn,curPlayer){
        console.log(board);
        if((board[1] == playerTurn && board[2] == playerTurn && board[3] == playerTurn) || (board[3] == playerTurn && board[5] == playerTurn && board[7] == playerTurn) || (board[4] == playerTurn && board[5] == playerTurn && board[6] == playerTurn) || (board[7] == playerTurn && board[8] == playerTurn && board[9] == playerTurn) || (board[1] == playerTurn && board[5] == playerTurn && board[9] == playerTurn) || (board[1] == playerTurn && board[4] == playerTurn && board[7] == playerTurn) || (board[2] == playerTurn && board[5] == playerTurn && board[8] == playerTurn) || ((board[3] == playerTurn && board[6] == playerTurn && board[9] == playerTurn))){
            won  = true;
            displayInfo.textContent = `${curPlayer} Wins`
        }
        if(turn == 9 && !won){
            displayInfo.textContent = `It's a Tie`
            won = true;
        }
    }

    const resetBoard = function(){
        for(let boardCell of boardItem){
            boardCell.textContent = "";
        }
        board = [];
        turn = 0;
        won = false;
        displayInfo.textContent = `${player1}'s Turn`
    }
    return{resetBoard};
})();


gameBoard;