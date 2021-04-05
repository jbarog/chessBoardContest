function chessBoard(columns = 0, rows = 0) {
  // if(!columns) columns = 8;
  if(!rows) rows = columns;
  let board = '';
  for(let i=0; i < rows; i++) {
    let isEvenRow = i % 2;
    for(let j=0; j < columns; j++) {
      let isEvenCol = j % 2;
      board += isEvenRow ? (isEvenCol ? ' ':'#') : (isEvenCol ? '#':' ')
    }
    board += '\n';
  }
  return board.slice(0, -1);
}
