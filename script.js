'use strict';

const gameBoard = (function(){
    const boardItem = document.querySelectorAll(".board-item");
    const displayInfo = document.querySelector(".display-info");
    const player1Name = document.querySelector(".player-1")
    const player2Name = document.querySelector(".player-2")
    const resetScore = document.querySelector(".reset-score");
    const playerOneScore = document.querySelector(".player-1-score");
    const playerTwoScore = document.querySelector(".player-2-score");

    let board = [];
    let turn = 0;
    let won = false;

    resetScore.addEventListener("click",()=>{resetBoard();})

    let player1 = player1Name.value;
    let player2 = player2Name.value;

    player1Name.addEventListener("input",()=>{
        player1 = player1Name.value;
        if(!turn&1)
            displayInfo.textContent = `${player1}'s Turn`;
    })
    player2Name.addEventListener("input",()=>{
        player2 = player2Name.value;
        if(turn&1)
            displayInfo.textContent = `${player2}'s Turn`;
    })
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
        if((board[1] == playerTurn && board[2] == playerTurn && board[3] == playerTurn) || (board[3] == playerTurn && board[5] == playerTurn && board[7] == playerTurn) || (board[4] == playerTurn && board[5] == playerTurn && board[6] == playerTurn) || (board[7] == playerTurn && board[8] == playerTurn && board[9] == playerTurn) || (board[1] == playerTurn && board[5] == playerTurn && board[9] == playerTurn) || (board[1] == playerTurn && board[4] == playerTurn && board[7] == playerTurn) || (board[2] == playerTurn && board[5] == playerTurn && board[8] == playerTurn) || ((board[3] == playerTurn && board[6] == playerTurn && board[9] == playerTurn))){
            won  = true;
            displayInfo.textContent = `${curPlayer} Wins`
           playerTurn == "X" ? playerOneScore.textContent = Number(playerOneScore.textContent)+1 : playerTwoScore.textContent = Number(playerTwoScore.textContent) + 1;
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