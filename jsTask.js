function validSolution(board) {
    function isValidGroup(group) {
      const sortedGroup = group.slice().sort();
      for (let i = 0; i < 9; i++) {
        if (sortedGroup[i] !== i + 1) {
          return false;
        }
      }
      return true;
    }
  
    for (let row of board) {
      if (row.includes(0)) {
        return false;
      }
    }
  
    for (let i = 0; i < 9; i++) {
      const row = board[i];
      const column = board.map(row => row[i]);
  
      if (!isValidGroup(row) || !isValidGroup(column)) {
        return false;
      }
    }
  
    for (let rowStart = 0; rowStart < 9; rowStart += 3) {
      for (let colStart = 0; colStart < 9; colStart += 3) {
        const subgrid = [];
        for (let r = rowStart; r < rowStart + 3; r++) {
          for (let c = colStart; c < colStart + 3; c++) {
            subgrid.push(board[r][c]);
          }
        }
        if (!isValidGroup(subgrid)) {
          return false;
        }
      }
    }
  
    return true;
  }

  const boardFalse = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ];  
  
  console.log(validSolution(boardFalse));
  
  const boardTrue = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];
  
  console.log(validSolution(boardTrue));