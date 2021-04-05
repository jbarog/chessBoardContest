//createChess = (size) => {
chessBoard = (size) => {
    let tags = "";
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if ((j + i) % 2 === 0)
          tags += " ";
        else
          tags += "#";
      }
      tags += '\n';
    }
    return tags.slice(0, -1)
};

// chessBoard = (size) => {
//     let tags = "";
//     for (let i = 0; i < size; i++) {
//       for (let j = 0; j < size; j++) {
//         tags += (j + i) % 2?"#":" ";
//       }
//       tags += '\n';
//     }
//     return tags.slice(0, -1)
// };
