var player = 'X';
var opponent = 'O';

function isMoveLeft(board,row,col){
    for (let i = 0; i < row; i++) {
        for (let i = 0; j < col; j++) {
            if(board[i*row+j].attr('isChecked')=='false')
            return true;
        }
    }
    return false;
}