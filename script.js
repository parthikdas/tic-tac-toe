var player1 = document.getElementById('one');
var player2 = document.getElementById('two');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');
var f = document.getElementById('f');
var g = document.getElementById('g');
var h = document.getElementById('h');
var i = document.getElementById('i');
var turn = 0;//if turn is 0 then its player 1 turn else if 1 then player 2
var times = 0;//if times exceeds 9 then make it 0 and clear screen
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
function clear_fields() {
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
    turn = 0;
    player1.style.boxShadow = "0 .4rem .5rem #146ca4"; // so that the highlight goes to player 1
    player2.style.boxShadow = "0 .4rem .5rem rgba(0, 0, 0, 0.4)"
}

function a_click() {
    if(a.innerHTML == "") { // This ensures no player can put symbol on others place
        a.innerHTML = check_value();
        if(((a.innerHTML == b.innerHTML) && (b.innerHTML == c.innerHTML)) || //1st row
        ((a.innerHTML == d.innerHTML) && (d.innerHTML == g.innerHTML)) || //1st column
        ((a.innerHTML == e.innerHTML) && (e.innerHTML == i.innerHTML))) { //left diagonal
            // So after player's turn check the above lines are same or not
            which_player(a);
            return;
        }
        next_turn();
        times++;
        setTimeout(() => { //as i want a little time before removing the values
            if(times == 9) { //all the chances are done
                clear_fields();
            }
        }, 3000);
    }
}
function b_click() {
    if(b.innerHTML == "") {
        b.innerHTML = check_value();
        if(((a.innerHTML == b.innerHTML) && (b.innerHTML == c.innerHTML)) || //1st row
           ((b.innerHTML == e.innerHTML) && (e.innerHTML == h.innerHTML)) ) { //2nd column
            which_player(b);
            return;
        }
        next_turn();
        times++;
        setTimeout(() => {
            if(times == 9) {
                clear_fields();
            }
        }, 3000);
    }
}
function c_click() {
    if(c.innerHTML == ""){
        c.innerHTML = check_value();
        if(((a.innerHTML == b.innerHTML) && (b.innerHTML == c.innerHTML)) || //1st row
           ((c.innerHTML == f.innerHTML) && (f.innerHTML == i.innerHTML)) || //3rd column
           ((c.innerHTML == e.innerHTML) && (e.innerHTML == g.innerHTML))) { //right diagonal
            which_player(c);
            return;
        }
        next_turn();
        times++;
        setTimeout(() => {
            if(times == 9) {
                clear_fields();
            }
        }, 3000);
    }
}
function d_click() {
    if(d.innerHTML == ""){
        d.innerHTML = check_value();
        if(((d.innerHTML == e.innerHTML) && (e.innerHTML == f.innerHTML)) || //2nd row
           ((a.innerHTML == d.innerHTML) && (d.innerHTML == g.innerHTML))) { //1st column
            which_player(d);
            return;
        }
        next_turn();
        times++;
        setTimeout(() => {
            if(times == 9) {
                clear_fields();
            }
        }, 3000);
    }
}
function e_click() {
    if(e.innerHTML == "") {
        e.innerHTML = check_value();
        if(((d.innerHTML == e.innerHTML) && (e.innerHTML == f.innerHTML)) || //2nd row
           ((b.innerHTML == e.innerHTML) && (e.innerHTML == h.innerHTML)) || //2nd column
           ((a.innerHTML == e.innerHTML) && (e.innerHTML == i.innerHTML))) { //left diagonal
            which_player(e);
            return;
        }
        next_turn();
        times++;
        setTimeout(() => {
            if(times == 9) {
                clear_fields();
            }
        }, 3000);
    }   
}
function f_click() {
    if(f.innerHTML == "") {
        f.innerHTML = check_value();
        if(((d.innerHTML == e.innerHTML) && (e.innerHTML == f.innerHTML)) || //2nd row
           ((c.innerHTML == f.innerHTML) && (f.innerHTML == i.innerHTML)) ) { //3rd column
            which_player(f);
            return;
        }
        next_turn();
        times++;
        setTimeout(() => {
            if(times == 9) {
                clear_fields();
            }
        }, 3000);
    }
}
function g_click() {
    if(g.innerHTML == "") {
        g.innerHTML = check_value();
        if(((a.innerHTML == d.innerHTML) && (d.innerHTML == g.innerHTML)) || //1st column
           ((g.innerHTML == h.innerHTML) && (h.innerHTML == i.innerHTML)) || //3rd row
           ((g.innerHTML == e.innerHTML) && (e.innerHTML == c.innerHTML))) {
            which_player(g);
            return;
        }
        next_turn();
        times++;
        setTimeout(() => {
            if(times == 9) {
                clear_fields();
            }
        }, 3000);
    }
}
function h_click() {
    if(h.innerHTML == ""){
        h.innerHTML = check_value();
        if(((g.innerHTML == h.innerHTML) && (h.innerHTML == i.innerHTML)) || //3rd row
           ((b.innerHTML == e.innerHTML) && (e.innerHTML == h.innerHTML)) ) { //2nd column
            which_player(h);
            return;
        }
        next_turn();
        times++;
        setTimeout(() => {
            if(times == 9) {
                clear_fields();
            }
        }, 3000);
    }
}
function i_click() {
    if(i.innerHTML == "") {
        i.innerHTML = check_value();
        if(((g.innerHTML == h.innerHTML) && (h.innerHTML == i.innerHTML)) || //3rd row
           ((c.innerHTML == f.innerHTML) && (f.innerHTML == i.innerHTML)) || //3rd column
           ((a.innerHTML == e.innerHTML) && (e.innerHTML == i.innerHTML))) { //left diagonal
            which_player(i);
            return;
        }
        next_turn();
        times++;
        setTimeout(() => {
            if(times == 9) {
                clear_fields();
            }
        }, 3000);
    }
}

function which_player(temp) { //Function to see which player won
    if(temp.innerHTML == 'X'){
        win_player1++;
        document.getElementById('score_one').innerHTML = win_player1;
        //do some animation here 
        clear_fields();
        return;
    } else {
        win_player2++;
        document.getElementById('score_two').innerHTML = win_player2;
        clear_fields();
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