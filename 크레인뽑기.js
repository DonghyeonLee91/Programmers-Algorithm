function solution(board, moves) {
    var answer = 0;
    let stack = [];

    moves.forEach(el => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][el - 1] !== 0) {
                let tmp = board[i][el - 1];
                board[i][el - 1] = 0;
                if (tmp === stack[stack.length - 1]) {
                    stack.pop();
                    answer += 2

                } else { stack.push(tmp) }
                break;

            }
        }


    })
    return answer;
}