// current == false => X : O;
var isXCheck = false;
var count = 0;
var rowTotal = 10;
var columnTotal = 10;
var nWin = 2;

window.onload = function(){
    document.getElementById("main").innerHTML = render(rowTotal,columnTotal);
};

$( document ).ready(function() {
    $('button').click(function(){
        Check($(this));
    })
});
