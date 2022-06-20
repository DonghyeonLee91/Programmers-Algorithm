function solution(lottos, win_nums) {
    var answer = [];
    let cnt = 0;
    lottos.sort((a, b) => a - b);
    win_nums.sort((a, b) => a - b);
    let p1 = 0
    let p2 = 0;

    while (p1 < lottos.length && p2 < win_nums.length) {
        if (lottos[p1] === win_nums[p2]) {
            cnt++;
            p1++
            p2++
        } else if (lottos[p1] < win_nums[p2]) {
            p1++
        } else { p2++ }
    }
    let high = cnt;
    for (i in lottos) {
        if (lottos[i] === 0) {
            high++;
        }
    }
    switch (high) {
        case 6: answer.push(1); break;
        case 5: answer.push(2); break;
        case 4: answer.push(3); break;
        case 3: answer.push(4); break;
        case 2: answer.push(5); break;
        case 1: answer.push(6); break;
        case 0: answer.push(6); break;
    };
    switch (cnt) {
        case 6: answer.push(1); break;
        case 5: answer.push(2); break;
        case 4: answer.push(3); break;
        case 3: answer.push(4); break;
        case 2: answer.push(5); break;
        case 1: answer.push(6); break;
        case 0: answer.push(6); break;
    };


    return answer;
}

let lotto = [45, 4, 35, 20, 3, 9];
let win = [20, 9, 3, 45, 4, 35]
console.log(solution(lotto, win))