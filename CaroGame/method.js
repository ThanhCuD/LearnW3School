function render(row,column){
    var resume = "<table cellpadding='0' cellspacing='0'";
    for (let i = 0; i < row; i++) {
        resume +="<tr>";
        for (let j = 0; j < column; j++) {
            resume += "<td>";
            resume +="<button id='but"+i+"_"+j+"' isChecked='false' row='"+i+"'col='"+j+"'></button>";
            resume +="</td>"; 
        }
        resume +="</tr>"
    }
    resume+="</table>";
    return resume;
}
function Check(button,board){
    console.log(button);
    if(isXCheck){
        button.text("X");
        CheckWin(button,"X", board);
        if(!gameOver){
            isXCheck=!isXCheck;
        }
    }else{
        button.text("O");
        CheckWin(button,"O",board);
        if(!gameOver){
            isXCheck=!isXCheck;
        }
    }
    button.attr('isChecked','true');
    count++;
}
function CheckWin(button,text,board){
    var row=col=diag=rdiag=0;
    let x = parseInt(button.attr('row'));
    let y =  parseInt(button.attr('col'));
    let rowArray = [];
    let colArray = [];
    let diagArr = [];
    let rdiagArr = [];

    for (let i = 0; i < rowTotal; i++) {
        var item = board[x*rowTotal + i];
        if($(item).text()==text) {
            col++;
            colArray.push(i);
        }
        item = board[i*rowTotal + y]
        if($(item).text()==text) {
            row++;
            rowArray.push(i);
        }
        var xSubY = x - y;
        var nX = i;
        var nY = i  - xSubY;
        item = board[nX*rowTotal + nY]
        if($(item).text()==text){
            diag++;
            diagArr.push(nX)
        }
        var xAddY = parseInt(x)+parseInt(y);
        nY = xAddY - i;
        nX = i; 
        item = board[nX*rowTotal + nY]
        if($(item).text()==text){
            rdiag++;
            rdiagArr.push(nX)
        }
    }
    if(CheckWin1(colArray)) {
        console.log(text + "Win");
        gameOver = true;
    }
    if(CheckWin1(rowArray)){
        console.log(text + "Win");
        gameOver = true;
    }
    if(CheckWin1(diagArr)){
        console.log(text + "Win");
        gameOver = true;
    }
    if(CheckWin1(rdiagArr)){
        console.log(text + "Win");
        gameOver = true;
    }
    isPlayerTurn = false;
}
function CheckWin1(arr){
    if(arr.length<nWin) return false;
    if(arr.length==nWin) {
        return arr[arr.length-1] - arr[0] == nWin-1;  
    }
    for (let i = 0; i < arr.length-nWin+1; i++) {
        var x = arr[i+nWin-1];
        var y = arr[i];
        if(arr[i+nWin-1]-arr[i]==nWin-1) return true;
    }
    return false;
}
function CheckWhoWin(board){
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++){

        }
    }
}

/// CPT
function CPTRun(){
    var board = $('button');
    console.log(board);
    setTimeout(
        function() 
        {
            console.log("run");
            isPlayerTurn = true;
        }, 0);
}