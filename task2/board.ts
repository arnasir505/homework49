const whiteSquare = '  ';
const blackSquare = '██';
let chessBoard = '';
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            chessBoard += whiteSquare;
        } else {
            chessBoard += blackSquare;
        }
    }
    chessBoard += '\n';
}
console.log(chessBoard);
