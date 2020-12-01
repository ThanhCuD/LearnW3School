// current == false => X : O;
var isXCheck = true;
var count = 0;
var rowTotal = 3;
var columnTotal = 3;
var nWin = 3;
var gameOver = false;
var isPlayWithCPT = true;
var isPlayerTurn = true;

window.onload = function(){
    document.getElementById("main").innerHTML = render(rowTotal,columnTotal);
};

$( document ).ready(function() {
    if(isPlayWithCPT){
        $('button').click(function(){
            if($(this).attr('isChecked')=='false' && !gameOver && isPlayerTurn){
                Check($(this),$('button'));
                if(gameOver){
                    var text = (isXCheck? "X" : "O") + " Win";
                    // alert(text);
                }else{
                    CPTRun();
                }
            }
        });
    }else{

    }
   
});
