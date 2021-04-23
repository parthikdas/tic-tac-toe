var player1 = document.getElementById('one');
var player2 = document.getElementById('two');
var win = document.getElementById('win');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');
var f = document.getElementById('f');
var g = document.getElementById('g');
var h = document.getElementById('h');
var i = document.getElementById('i');
var turn = 0; //if turn is 0 then its player 1 turn else if 1 then player 2
var times = 0; //if times exceeds 9 then make it 0 and clear screen
var make_move = 0; //after somebody wins and name is showing for 3sec within that time no player should make a move 
var win_player1 = 0, win_player2 = 0;

// Code for dark mode starts
document.getElementById('mode').addEventListener('click', function () {
    change_mode();
});
function change_mode() {
    var element = document.body;
    element.classList.toggle("dark");    
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
    if(a.innerHTML == "" && make_move == 0) { // This ensures no player can put symbol on others place and 2nd condition ensures after winning when name is showing nobody could make a move
        a.innerHTML = check_value();
        if(((a.innerHTML == b.innerHTML) && (b.innerHTML == c.innerHTML)) || //1st row
        ((a.innerHTML == d.innerHTML) && (d.innerHTML == g.innerHTML)) || //1st column
        ((a.innerHTML == e.innerHTML) && (e.innerHTML == i.innerHTML))) { //left diagonal
            // So after player's turn check the above lines are same or not
            make_move = 1; // as it is one now nobody can make a move till everything is cleared and make_move becomes 0 again
            which_player(a);
            return;
        }
        common_code();
    }
}
function b_click() {
    if(b.innerHTML == ""  && make_move == 0) {
        b.innerHTML = check_value();
        if(((a.innerHTML == b.innerHTML) && (b.innerHTML == c.innerHTML)) || //1st row
           ((b.innerHTML == e.innerHTML) && (e.innerHTML == h.innerHTML)) ) { //2nd column
            make_move = 1;
            which_player(b);
            return;
        }
        common_code();
    }
}
function c_click() {
    if(c.innerHTML == ""  && make_move == 0){
        c.innerHTML = check_value();
        if(((a.innerHTML == b.innerHTML) && (b.innerHTML == c.innerHTML)) || //1st row
           ((c.innerHTML == f.innerHTML) && (f.innerHTML == i.innerHTML)) || //3rd column
           ((c.innerHTML == e.innerHTML) && (e.innerHTML == g.innerHTML))) { //right diagonal
            make_move = 1;
            which_player(c);
            return;
        }
        common_code();
    }
}
function d_click() {
    if(d.innerHTML == ""  && make_move == 0){
        d.innerHTML = check_value();
        if(((d.innerHTML == e.innerHTML) && (e.innerHTML == f.innerHTML)) || //2nd row
           ((a.innerHTML == d.innerHTML) && (d.innerHTML == g.innerHTML))) { //1st column
            make_move = 1;
            which_player(d);
            return;
        }
        common_code();
    }
}
function e_click() {
    if(e.innerHTML == ""  && make_move == 0) {
        e.innerHTML = check_value();
        if(((d.innerHTML == e.innerHTML) && (e.innerHTML == f.innerHTML)) || //2nd row
           ((b.innerHTML == e.innerHTML) && (e.innerHTML == h.innerHTML)) || //2nd column
           ((a.innerHTML == e.innerHTML) && (e.innerHTML == i.innerHTML))) { //left diagonal
            make_move = 1;
            which_player(e);
            return;
        }
        common_code();
    }   
}
function f_click() {
    if(f.innerHTML == ""  && make_move == 0) {
        f.innerHTML = check_value();
        if(((d.innerHTML == e.innerHTML) && (e.innerHTML == f.innerHTML)) || //2nd row
           ((c.innerHTML == f.innerHTML) && (f.innerHTML == i.innerHTML)) ) { //3rd column
            make_move = 1;
            which_player(f);
            return;
        }
        common_code();
    }
}
function g_click() {
    if(g.innerHTML == ""  && make_move == 0) {
        g.innerHTML = check_value();
        if(((a.innerHTML == d.innerHTML) && (d.innerHTML == g.innerHTML)) || //1st column
           ((g.innerHTML == h.innerHTML) && (h.innerHTML == i.innerHTML)) || //3rd row
           ((g.innerHTML == e.innerHTML) && (e.innerHTML == c.innerHTML))) {
            make_move = 1;
            which_player(g);
            return;
        }
        common_code();
    }
}
function h_click() {
    if(h.innerHTML == ""  && make_move == 0){
        h.innerHTML = check_value();
        if(((g.innerHTML == h.innerHTML) && (h.innerHTML == i.innerHTML)) || //3rd row
           ((b.innerHTML == e.innerHTML) && (e.innerHTML == h.innerHTML)) ) { //2nd column
            make_move = 1;
            which_player(h);
            return;
        }
        common_code();
    }
}
function i_click() {
    if(i.innerHTML == ""  && make_move == 0) {
        i.innerHTML = check_value();
        if(((g.innerHTML == h.innerHTML) && (h.innerHTML == i.innerHTML)) || //3rd row
           ((c.innerHTML == f.innerHTML) && (f.innerHTML == i.innerHTML)) || //3rd column
           ((a.innerHTML == e.innerHTML) && (e.innerHTML == i.innerHTML))) { //left diagonal
            make_move = 1;
            which_player(i);
            return;
        }
        common_code();
    }
}

function clear_fields() { // Function to clear all fields
    a.innerHTML = "";
    b.innerHTML = "";
    c.innerHTML = "";
    d.innerHTML = "";
    e.innerHTML = "";
    f.innerHTML = "";
    g.innerHTML = "";
    h.innerHTML = "";
    i.innerHTML = "";
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