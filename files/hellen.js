chessBoard = (size) => {
    let defaltRow = ' # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #';
    const ROWLENGTH = 1000;
    if(size>ROWLENGTH) {
      for (let i = 0; i < Math.ceil(size/ROWLENGTH); i++) {
        defaltRow += defaltRow;
      }
    }
    const even = defaltRow.substring(0,size);
    const odd = defaltRow.substring(1,+size+1);
    let result = '';
    let isEven = true;
    for (let row = 0; row < size; row++) {
        result += (isEven?even:odd)+ '\n';
        isEven =!isEven;
    }
   return result.slice(0, -1);
}
