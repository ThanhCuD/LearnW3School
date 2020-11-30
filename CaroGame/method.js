function render(row,column){
    var resume = "<table cellpadding='0' cellspacing='0'";
    for (let i = 0; i < row; i++) {
        resume +="<tr>";
        for (let j = 0; j < column; j++) {
            resume += "<td>";
            resume +="<button id='but"+i+"_"+j+"' row='"+i+"'col='"+j+"'></button>";
            resume +="</td>"; 
        }
        resume +="</tr>"
    }
    resume+="</table>";
    return resume;
}
function Check(button){
    console.log(button);
    if(isXCheck){
        button.text("X");
        CheckWin(button,"X");
        isXCheck=!isXCheck;
    }else{
        button.text("O");
        CheckWin(button,"O");
        isXCheck=!isXCheck;
    }
    count++;
}
// col=row=diag=rdiag=0
// winner=false
// for i=1 to n
//   if cell[x,i]=player then col++
//   if cell[i,y]=player then row++
//   if cell[i,i]=player then diag++
//   if cell[i,n-i+1]=player then rdiag++
// if row=n or col=n or diag=n or rdiag=n then winner=true
function CheckWin(button,text){
    var row=col=diag=rdiag=0;
    let x = parseInt(button.attr('row'));
    let y =  parseInt(button.attr('col'));
    let rowArray = [];
    let colArray = [];
    let diagArr = [];
    let rdiagArr = [];

    for (let i = 0; i < rowTotal; i++) {
        if($("#but"+x+"_"+i).text()==text) {
            col++;
            colArray.push(i);
        }
        if($("#but"+i+"_"+y).text()==text) {
            row++;
            rowArray.push(i);
        }
        var xSubY = x - y;
        var nX = i;
        var nY = i  - xSubY;
        if($('#but'+nX+"_"+nY).text()==text){
            diag++;
            diagArr.push(nX)
        }
        var xAddY = parseInt(x)+parseInt(y);
        nY = xAddY - i;
        nX = i; 
        if($('#but'+nX+"_"+nY).text()==text){
            rdiag++;
            rdiagArr.push(nX)
        }
    }
    if(CheckWin1(colArray)) {
        console.log(text + "Win");
    }
    if(CheckWin1(rowArray)){
        console.log(text + "Win");
    }
    if(CheckWin1(diagArr)){
        console.log(text + "Win");
    }
    if(CheckWin1(rdiagArr)){
        console.log(text + "Win");
    }
    // if(row==nWin|| col==nWin || diag==nWin || rdiag==nWin) {
    //     console.log(text + "Win");
    // }
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
function CheckWin2(arr){

}