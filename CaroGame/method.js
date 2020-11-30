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
    let x = button.attr('row');
    let y =  button.attr('col');
    for (let i = 0; i < rowTotal; i++) {
        if($("#but"+x+"_"+i).text()==text) {
            col++;
        }
        if($("#but"+i+"_"+y).text()==text) {
            row++;
        }
        var xSubY = x - y;
        var nX = i;
        var nY = i  - xSubY;
        if($('#but'+nX+"_"+nY).text()==text){
            diag++;
        }
        var xAddY = parseInt(x)+parseInt(y);
        nY = xAddY - i;
        nX = i; 
        if($('#but'+nX+"_"+nY).text()==text){
            rdiag++;
        }
    }
    if(row==nWin|| col==nWin || diag==nWin || rdiag==nWin) {
        console.log(text + "Win");
    }
}