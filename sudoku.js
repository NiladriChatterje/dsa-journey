/*
Determine if a 9 x 9 Sudoku board is valid. 
Only the filled cells need to be validated
according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain
 the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily 
solvable.
Only the filled cells need to be validated according to the mentioned rules.*/

var isValidSudoku = function(board) {
    const mat={},matTrans={}
    for(let i in board){

        for(let j=1;j<=9;j++) mat[j]=0,matTrans[j]=0;

        for(let j in board){
            if(board[i][j] in mat) mat[board[i][j]] += 1;
            if(board[j][i] in matTrans) matTrans[board[j][i]] += 1;}

        for(let j in board) if(mat[board[i][j]]>=2 || matTrans[board[j][i]]>=2) return false;
    }
    for(let j=1;j<=9;j++)mat[j]=0
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++)if(board[i][j] in mat) mat[board[i][j]] += 1;

        for(let j in board) if((mat[board[i][j]])>=2) return false;
    }    
    for(let j=1;j<=9;j++)mat[j]=0
    for(let i=0;i<3;i++){
        for(let j=3;j<6;j++)if(board[i][j] in mat) mat[board[i][j]] += 1;
            
        for(let j in board)if((mat[board[i][j]])>=2) return false;
    }

    for(let j=1;j<=9;j++) mat[j]=0
    for(let i=0;i<3;i++){       
        for(let j=6;j<9;j++)if(board[i][j] in mat) mat[board[i][j]] += 1;
       
        for(let j in board) if(mat[board[i][j]]>1) return false;
    }
    for(let j=1;j<=9;j++) mat[j]=0
    for(let i=3;i<6;i++){ 
        for(let j=0;j<3;j++)if(board[i][j] in mat) mat[board[i][j]] += 1;

        for(let j in board) if(mat[board[i][j]]>=2) return false;
    }
    for(let j=1;j<=9;j++) mat[j]=0
    for(let i=3;i<6;i++){  
        for(let j=3;j<6;j++)if(board[i][j] in mat) mat[board[i][j]] += 1;
            
        for(let j in board) if(mat[board[i][j]]>=2) return false;
    }
    for(let j=1;j<=9;j++) mat[j]=0
    for(let i=3;i<6;i++){
    for(let j=6;j<9;j++)if(board[i][j] in mat) mat[board[i][j]] += 1;        

        for(let j in board) if(mat[board[i][j]]>=2) return false;
    }
    for(let j=1;j<=9;j++) mat[j]=0
    for(let i=6;i<9;i++){
        for(let j=0;j<3;j++)if(board[i][j] in mat) mat[board[i][j]] += 1
            
        for(let j in board) if(mat[board[i][j]]>=2) return false;
    }
    for(let j=1;j<=9;j++) mat[j]=0
    for(let i=6;i<9;i++){
        for(let j=3;j<6;j++)if(board[i][j] in mat) mat[board[i][j]] += 1;    

        for(let j in board) if(mat[board[i][j]]>=2) return false;
    }
    for(let j=1;j<=9;j++) mat[j]=0
    for(let i=6;i<9;i++){     
        for(let j=6;j<9;j++)if(board[i][j] in mat) mat[board[i][j]] += 1;

        for(let j in board) if(mat[board[i][j]]>=2) return false;
    }
 
return true;
};

console.log(isValidSudoku([  ["5","3",".",".","7",".",".",".","."]
                            ,["6",".",".","1","9","5",".",".","."]
                            ,[".","9","8",".",".",".",".","6","."]
                            ,["8",".",".",".","6",".",".",".","3"]
                            ,["4",".",".","8",".","3",".",".","1"]
                            ,["7",".",".",".","2",".",".",".","6"]
                            ,[".","6",".",".",".",".","2","8","."]
                            ,[".",".",".","4","1","9",".",".","5"]
                            ,[".",".",".",".","8",".",".","7","9"]]));

console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
                            ,["6",".",".","1","9","5",".",".","."]
                            ,[".","9","8",".",".",".",".","6","."]
                            ,["8",".",".",".","6",".",".",".","3"]
                            ,["4",".",".","8",".","3",".",".","1"]
                            ,["7",".",".",".","2",".",".",".","6"]
                            ,[".","6",".",".",".",".","2","8","."]
                            ,[".",".",".","4","1","9",".",".","5"]
                            ,[".",".",".",".","8",".",".","7","9"]]));

console.log(isValidSudoku([ [".",".",".",".","5",".",".","1","."],
                            [".","4",".","3",".",".",".",".","."],
                            [".",".",".",".",".","3",".",".","1"],
                            ["8",".",".",".",".",".",".","2","."],
                            [".",".","2",".","7",".",".",".","."],
                            [".","1","5",".",".",".",".",".","."],
                            [".",".",".",".",".","2",".",".","."],
                            [".","2",".","9",".",".",".",".","."],
                            [".",".","4",".",".",".",".",".","."]]
                            ))