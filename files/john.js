chessBoard = (size) => {
    var pair = '';
    for (let i = 0; i < size; i++) {
        if (i%2 == 0) {
            pair = pair + ' ';
        }
        else {
            pair = pair + '#';
        }
    }

    var odd = '';
    for (let i = 0; i < size; i++) {
        if (i%2 == 0) {
            odd = odd + '#';
        }
        else {
            odd = odd + ' ';
        }
    }

    var result = '';
    for (let i = 0; i < size; i++) {
        if (i%2 == 0) {
            result = result + pair + '\n';
        }
        else {
            result = result + odd + '\n';
        }
    }

   return result.slice(0, -1);
}
