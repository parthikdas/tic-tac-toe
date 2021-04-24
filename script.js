var player1 = document.getElementById('one');
var player2 = document.getElementById('two');
var win = document.getElementById('win');
var a = [document.getElementById('a'),document.getElementById('b'),
document.getElementById('c'),document.getElementById('d'),document.getElementById('e'),
document.getElementById('f'),document.getElementById('g'),document.getElementById('h'),
document.getElementById('i')];
var present = [false,false,false,false,false,false,false,false,false];//false means that place is empty
var turn = 0; //if turn is 0 then its player 1 turn else if 1 then player 2
var times = 0; //if times exceeds 9 then make it 0 and clear screen
var make_move = 0; //after somebody wins and name is showing for 3sec within that time no player should make a move 
var win_player1 = 0, win_player2 = 0; //to store who won for how many times
var compPlay = 0;

function give_val(clicked_id) { //Function to check who will play
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
            comp_play('O');
        },500);
        }
    } else {
        turn = 0;
        player1.style.boxShadow = "0 .4rem .5rem #146ca4";
        player2.style.boxShadow = "0 .4rem .5rem rgba(0, 0, 0, 0.4)";
    }
}
function common_code() { //This function stores the code used by all _click() functions
    next_turn();
        times++;
        if(times == 9) { //all the boxes are filled
            win.innerHTML = "It's a Draw!!"
            setTimeout(() => { //as i want a little time before removing the values
                win.innerHTML = "";
                clear_fields();
            }, 3000);
        }
}
function a_click() {
    if(a[0].innerHTML == "" && make_move == 0) { // This ensures no player can put symbol on others place and 2nd condition ensures after winning when name is showing nobody could make a move
        a[0].innerHTML = check_value();
        present[0] = true; //making the places true so that comp will not do
        if(((a[0].innerHTML == a[1].innerHTML) && (a[1].innerHTML == a[2].innerHTML)) || //1st row
        ((a[0].innerHTML == a[3].innerHTML) && (a[3].innerHTML == a[6].innerHTML)) || //1st column
        ((a[0].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[8].innerHTML))) { //left diagonal
            // So after player's turn check the above lines are same or not
            make_move = 1; // as it is one now nobody can make a move till everything is cleared and make_move becomes 0 again
            which_player(a[0]);
            return;
        }
        common_code();
    }
}
function b_click() {
    if(a[1].innerHTML == ""  && make_move == 0) {
        a[1].innerHTML = check_value();
        present[1] = true;
        if(((a[0].innerHTML == a[1].innerHTML) && (a[1].innerHTML == a[2].innerHTML)) || //1st row
           ((a[1].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[7].innerHTML)) ) { //2nd column
            make_move = 1;
            which_player(b);
            return;
        }
        common_code();
    }
}
function c_click() {
    if(a[2].innerHTML == ""  && make_move == 0){
        a[2].innerHTML = check_value();
        present[2] = true;
        if(((a[0].innerHTML == a[1].innerHTML) && (a[1].innerHTML == a[2].innerHTML)) || //1st row
           ((a[2].innerHTML == a[5].innerHTML) && (a[5].innerHTML == a[8].innerHTML)) || //3rd column
           ((a[2].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[6].innerHTML))) { //right diagonal
            make_move = 1;
            which_player(c);
            return;
        }
        common_code();
    }
}
function d_click() {
    if(a[3].innerHTML == ""  && make_move == 0){
        a[3].innerHTML = check_value();
        present[3] = true;
        if(((a[3].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[5].innerHTML)) || //2nd row
           ((a[0].innerHTML == a[3].innerHTML) && (a[3].innerHTML == a[6].innerHTML))) { //1st column
            make_move = 1;
            which_player(d);
            return;
        }
        common_code();
    }
}
function e_click() { //only box in middle to have both diagonal in common
    if(a[4].innerHTML == ""  && make_move == 0) {
        a[4].innerHTML = check_value();
        present[4] = true;
        if(((a[3].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[5].innerHTML)) || //2nd row
           ((a[1].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[7].innerHTML)) || //2nd column
           ((a[0].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[8].innerHTML)) || //left diagonal
           ((a[2].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[6].innerHTML))) { //right diagonal
            make_move = 1;
            which_player(e);
            return;
        }
        common_code();
    }   
}
function f_click() {
    if(a[5].innerHTML == ""  && make_move == 0) {
        a[5].innerHTML = check_value();
        present[5] = true;
        if(((a[3].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[5].innerHTML)) || //2nd row
           ((a[2].innerHTML == a[5].innerHTML) && (a[5].innerHTML == a[8].innerHTML)) ) { //3rd column
            make_move = 1;
            which_player(f);
            return;
        }
        common_code();
    }
}
function g_click() {
    if(a[6].innerHTML == ""  && make_move == 0) {
        a[6].innerHTML = check_value();
        present[6] = true;
        if(((a[0].innerHTML == a[3].innerHTML) && (a[3].innerHTML == a[6].innerHTML)) || //1st column
           ((a[6].innerHTML == a[7].innerHTML) && (a[7].innerHTML == a[8].innerHTML)) || //3rd row
           ((a[6].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[2].innerHTML))) {
            make_move = 1;
            which_player(g);
            return;
        }
        common_code();
    }
}
function h_click() {
    if(a[7].innerHTML == ""  && make_move == 0){
        a[7].innerHTML = check_value();
        present[7] = true;
        if(((a[6].innerHTML == a[7].innerHTML) && (a[7].innerHTML == a[8].innerHTML)) || //3rd row
           ((a[1].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[7].innerHTML)) ) { //2nd column
            make_move = 1;
            which_player(h);
            return;
        }
        common_code();
    }
}
function i_click() {
    if(a[8].innerHTML == ""  && make_move == 0) {
        a[8].innerHTML = check_value();
        present[8] = true;
        if(((a[6].innerHTML == a[7].innerHTML) && (a[7].innerHTML == a[8].innerHTML)) || //3rd row
           ((a[2].innerHTML == a[5].innerHTML) && (a[5].innerHTML == a[8].innerHTML)) || //3rd column
           ((a[0].innerHTML == a[4].innerHTML) && (a[4].innerHTML == a[8].innerHTML))) { //left diagonal
            make_move = 1;
            which_player(i);
            return;
        }
        common_code();
    }
}
function comp_play(strings) {
    let empty_places = [];
    for(let i=0;i<9;i++) {
        if(present[i] == false) {
            empty_places.push(i);
        }
    }
    let randomNumber = empty_places[Math.floor(Math.random()*empty_places.length)]; //random position from empty places
    if(randomNumber == 0) {a_click();}
    else if(randomNumber == 1) {b_click();}
    else if(randomNumber == 2) {c_click();}
    else if(randomNumber == 3) {d_click();}
    else if(randomNumber == 4) {e_click();}
    else if(randomNumber == 5) {f_click();}
    else if(randomNumber == 6) {g_click();}
    else if(randomNumber == 7) {h_click();}
    else if(randomNumber == 8) {i_click();}
    return;
}
function clear_fields() { // Function to clear all fields
    for (let i=0;i<9;i++) {
        a[i].innerHTML = '';
    }
    present = [false,false,false,false,false,false,false,false,false];
    times = 0;
    make_move = 0;
    turn = 0;
    player1.style.boxShadow = "0 .4rem .5rem #146ca4"; // so that the highlight goes to player 1
    player2.style.boxShadow = "0 .4rem .5rem rgba(0, 0, 0, 0.4)"
}
function which_player(temp) { //Function to see which player won
    if(temp.innerHTML == 'X'){
        win_player1++;
        document.getElementById('score_one').innerHTML = win_player1;
        win.innerHTML = "Player 1 won!!"
        setTimeout(() => {
            win.innerHTML = ""; // after 3 sec remove the tag who won
            clear_fields();
        }, 3000);
        return;
    } else {
        win_player2++;
        document.getElementById('score_two').innerHTML = win_player2;
        win.innerHTML = "Player 2 won!!"
        setTimeout(() => {
            win.innerHTML = "";
            clear_fields();
        }, 3000);
        return;
    }
}
function reset_game() { //Function to reset everything
    win_player1 = 0;
    win_player2 = 0;
    document.getElementById('score_one').innerHTML = '-';
    document.getElementById('score_two').innerHTML = '-';
    clear_fields();
}