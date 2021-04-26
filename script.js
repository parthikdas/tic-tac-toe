var player1 = document.getElementById('one');
var player2 = document.getElementById('two');
var win = document.getElementById('win');
var a = [[document.getElementById('a'),document.getElementById('b'),document.getElementById('c')],
         [document.getElementById('d'),document.getElementById('e'),document.getElementById('f')],
         [document.getElementById('g'),document.getElementById('h'),document.getElementById('i')]];
var turn = 0; //if turn is 0 then its player 1 turn else if 1 then player 2
var times = 0; //if times exceeds 9 then make it 0 and clear screen
var make_move = 0; //after somebody wins and name is showing for 3sec within that time no player should make a move 
var win_player1 = 0, win_player2 = 0; //to store who won for how many times
var compPlay = 0;

function give_val(clicked_id) { //Function to check who will play comp or 2 humans
    document.getElementById('user_choice').style.display = 'none'; // got the value now remove section
    if(clicked_id == 'compPlay') {
        compPlay = 1;
    }
}

// Code for dark mode starts
document.getElementById('mode').addEventListener('click', function () {
    change_mode();
});
function change_mode() {
    var element = document.body;
    element.classList.toggle('dark');    
}
//Code for dark mode ends

function check_value() {
    if(turn == 0) { // if player 1 turn return X else return O
        return 'X';
    } else {
        return 'O';
    }
}
function next_turn() { //This function checks whose turn it is
    if(turn == 0) {
        turn = 1;
        player1.style.boxShadow = "0 .4rem .5rem rgba(0, 0, 0, 0.4)";
        player2.style.boxShadow = "0 .4rem .5rem #146ca4";
        if(compPlay == 1) { //if user had selected that computer will play then only comp will play
            setTimeout(() => { //some delay in computer's move
            bestMove();
            },300);
        }
        return;
    } else {
        turn = 0;
        player1.style.boxShadow = "0 .4rem .5rem #146ca4";
        player2.style.boxShadow = "0 .4rem .5rem rgba(0, 0, 0, 0.4)";
    }
}
function clear_fields() { // Function to clear all fields
    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            a[i][j].innerHTML = "";
        }
    }
    make_move = 0;
    turn = 0;
    times = 0;
    player1.style.boxShadow = "0 .4rem .5rem #146ca4"; // so that the highlight goes to player 1
    player2.style.boxShadow = "0 .4rem .5rem rgba(0, 0, 0, 0.4)"
}
function reset_game() { //Function to reset everything
    win_player1 = 0;
    win_player2 = 0;
    document.getElementById('score_one').innerHTML = '-';
    document.getElementById('score_two').innerHTML = '-';
    clear_fields();
}
a[0][0].addEventListener('click',() => {
    click(0,0);
})
a[0][1].addEventListener('click',() => {
    click(0,1);
})
a[0][2].addEventListener('click',() => {
    click(0,2);
})
a[1][0].addEventListener('click',() => {
    click(1,0);
})
a[1][1].addEventListener('click',() => {
    click(1,1);
})
a[1][2].addEventListener('click',() => {
    click(1,2);
})
a[2][0].addEventListener('click',() => {
    click(2,0);
})
a[2][1].addEventListener('click',() => {
    click(2,1);
})
a[2][2].addEventListener('click',() => {
    click(2,2);
})

function click(one, two) { // a single function that puts X or O
    if(a[one][two].innerHTML == "" && make_move == 0) {
        a[one][two].innerHTML = check_value();
        div_create();
        next_turn();//remove the common_code() and all _click()
        times++;
        if(times == 9) { //all the boxes are filled
            win.innerHTML = "It's a Draw!!"
            setTimeout(() => { //as i want a little time before removing the values
                win.innerHTML = "";
                clear_fields();
            }, 3000);
        }
    }
    return;
}
function checkWinner() { //This function and div_create is created for minimax algo video implement if this becomes permanent remove innerHTML checking lines from click() eg:-106,107,108
    let win1 = null;
    for(let i=0;i<3;i++) { //3 rows
        if(((a[i][0].innerHTML == a[i][1].innerHTML) && (a[i][1].innerHTML == a[i][2].innerHTML)) && (a[i][0].innerHTML != "")) {
            win1 = a[i][0].innerHTML;
            break;
        }
    }
    for(let i=0;i<3;i++) {//3 columns
        if(((a[0][i].innerHTML == a[1][i].innerHTML) && (a[1][i].innerHTML == a[2][i].innerHTML)) && (a[0][i].innerHTML != "")) {
            win1 = a[0][i].innerHTML;
            break;
        }
    }
    if(((a[0][0].innerHTML == a[1][1].innerHTML && a[1][1].innerHTML == a[2][2].innerHTML) && (a[1][1].innerHTML != "") || //left diagonal
       ((a[0][2].innerHTML == a[1][1].innerHTML && a[1][1].innerHTML == a[2][0].innerHTML)) && (a[1][1].innerHTML != ""))) { //right diagonal
        win1 = a[1][1].innerHTML; //common in both diagonals
    }
    let openSpots = 0;
    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            if(a[i][j].innerHTML == "") {
                openSpots++;
            }
        }
    }
    if(win1 == null && openSpots == 0) { //all the boxes are filled
        return "T";
    } else {
        return win1;
    }
}
function div_create() { // call this function in every click function on line 78 eg
    var stri = checkWinner();
    if(stri != "T" && stri != null) { //Z is that nothing happened
        document.getElementById('score_one').innerHTML = win_player1;
            make_move = 1;
            if(stri == "X") {
                ++win_player1;
                document.getElementById('score_one').innerHTML = win_player1;
                win.innerHTML = "Player 1 won!!";
            } else {
                ++win_player2;
                document.getElementById('score_two').innerHTML = win_player2;
                win.innerHTML = "Player 2 won!!";
            }
            setTimeout(() => {
                win.innerHTML = ""; // after 3 sec remove the tag who won
                make_move = 0;
                clear_fields();
            }, 3000);
        return;
    }
}
function bestMove() { //https://www.youtube.com/watch?v=trKjYdBASyQ&t=375s from this video i learnt minimax in tic-tac-toe
    //ai to make its turn
    let bestScore = -Infinity;
    let move;
    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            if(a[i][j].innerHTML == "") { //if the spot is available
                a[i][j].innerHTML = "O";
                let score = minimax(0, false);
                a[i][j].innerHTML = "";
                if(score > bestScore) {
                    bestScore = score;
                    move = {i,j};
                }
            }
        }
    }
    click(move.i,move.j);
    return;
}
var scores = {
    X: -1, //as I wanted to lose so made it -1 (minimizing)
    O: 1, // as I want AI to win so made it +1 (maximizing)
    T: 0 //tie
};
function minimax(depth,isMaximizing) {
    let result = checkWinner();
    if(result != null) {//base condition or terminal condition
        return scores[result];
    }
    if(isMaximizing) {
        let bestScore = -Infinity;
        for(let i=0;i<3;i++) {
            for(let j=0;j<3;j++) {
                //Is the spot available
                if(a[i][j].innerHTML == "") {
                    a[i][j].innerHTML = "O";
                    let score = minimax(depth+1,false);// after maximizing player turn its minimizing player turn
                    a[i][j].innerHTML = "";
                    // if(score > bestScore) {
                    //     bestScore = score;
                    // }
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;//here minimizing player wants to find the best score for it which is lowest score
        for(let i=0;i<3;i++) {
            for(let j=0;j<3;j++) {
                //Is the spot available
                if(a[i][j].innerHTML == "") {
                    a[i][j].innerHTML = "X";
                    let score = minimax(depth+1,true);// after minimizing player turn its maximizing player turn
                    a[i][j].innerHTML = "";
                    // if(score < bestScore) {
                    //     bestScore = score;
                    // }
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}