var turn = 0;
var end = false;
$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

function performLogic(buttonId, tileId){
    if (end === true){
        return;
    }
    $(buttonId).hide();
    turn = turn + 1;
    if (turn === 9){
        end = true;
        $("h1").text("It's a draw!");
    }
    if (turn % 2 === 0){
        $(tileId).text("X");
    } else {
        $(tileId).text("0");
    }    
}

function checkVerticalWins(){
    if (end === true){
        return;
    }
    if ("#tile1"==="0"&&"#tile4"==="0"&&"#tile7"==="0"){
        end = true;
        $("h1").text("Player 1 Wins");
    }
    if ("#tile1"==="X"&&"#tile4"==="X"&&"#tile7"==="X"){
        end = true;
        $("h1").text("Player 2 Wins");
    }
    if ("#tile2"==="0"&&"#tile5"==="0"&&"#tile8"==="0"){
        end = true;
        $("h1").text("Player 1 Wins");
    }
    if ("#tile2"==="X"&&"#tile5"==="X"&&"#tile8"==="X"){
        end = true;
        $("h1").text("Player 2 Wins");
    }
    if ("#tile3"==="0"&&"#tile6"==="0"&&"#tile9"==="0"){
        end = true;
        $("h1").text("Player 1 Wins");
    }
    if ("#tile3"==="X"&&"#tile6"==="X"&&"#tile9"==="X"){
        end = true;
        $("h1").text("Player 2 Wins");
    }
}

function checkDiagonalWins(){
    if (end === true){
        return;
    }
    if ("#tile1"==="0"&&"#tile5"==="0"&&"#tile9"==="0"){
        end = true;
        $("h1").text("Player 1 Wins");
    }
    if ("#tile1"==="X"&&"#tile5"==="X"&&"#tile9"==="X"){
        end = true;
        $("h1").text("Player 2 Wins");
    }
    if ("#tile3"==="0"&&"#tile5"==="0"&&"#tile7"==="0"){
        end = true;
        $("h1").text("Player 1 Wins");
    }
    if ("#tile3"==="X"&&"#tile5"==="X"&&"#tile7"==="X"){
        end = true;
        $("h1").text("Player 2 Wins");
    }
}

function checkHorizontalWins(){
    if (end === true){
        return;
    }
    if ("#tile1"==="0"&&"#tile2"==="0"&&"#tile3"==="0"){
        end = true;
        $("h1").text("Player 1 Wins");
    }
    if ("#tile1"==="X"&&"#tile2"==="X"&&"#tile3"==="X"){
        end = true;
        $("h1").text("Player 2 Wins");
    }
    if ("#tile4"==="0"&&"#tile5"==="0"&&"#tile6"==="0"){
        end = true;
        $("h1").text("Player 1 Wins");
    }
    if ("#tile4"==="X"&&"#tile5"==="X"&&"#tile6"==="X"){
        end = true;
        $("h1").text("Player 2 Wins");
    }
    if ("#tile7"==="0"&&"#tile8"==="0"&&"#tile9"==="0"){
        end = true;
        $("h1").text("Player 1 Wins");
    }
    if ("#tile7"==="X"&&"#tile8"==="X"&&"#tile9"==="X"){
        end = true;
        $("h1").text("Player 2 Wins");
    }
}