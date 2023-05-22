/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const seen = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] != ".") {
        let row = `row${i}${board[i][j]}`;
        let col = `col${j}${board[i][j]}`;
        let box = `box${
          Math.floor(i / 3) * 3 + Math.floor(j / 3) + board[i][j]
        }`;
        console.log("row : ", row);
        console.log("col : ", col);
        console.log("box : ", box);
        if (seen.has(row) || seen.has(col) || seen.has(box)) {
          return false;
        }
        seen.add(row);
        seen.add(col);
        seen.add(box);
      }
    }
  }
  return true;
};
