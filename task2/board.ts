const createChessBoard = () => {
    const whiteSquare = '  ';
    const blackSquare = '██';
    const boardSize = 8;
    let chessBoard = '';
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if ((i + j) % 2 === 0) {
                chessBoard += whiteSquare;
            } else {
                chessBoard += blackSquare;
            }
        }
        chessBoard += '\n';
    }
    console.log(chessBoard);
};

createChessBoard();
