function solution(n, lost, reserve) {
    var answer = 0;
    const uniform = [];
    for(let i=0; i<n; i++){
        uniform[i] = 1;
    }
    for(let i = 0; i<lost.length; i++){
        uniform[lost[i]-1]=0       
    }
    for (let i = 0; i < reserve.length; i++) {
        uniform[reserve[i]-1] += 1;
    }
    for(let i=0;i<n;i++){
        if(uniform[i-1] === 2 && uniform[i]===0 ){
            uniform[i-1] =1;
            uniform[i] = 1;
        } else if(uniform[i+1] === 2 && uniform[i]===0 ){
                uniform[i+1] =1;
            uniform[i] = 1;
        }
    }
    for(let i=0; i<n; i++){
        if(uniform[i] > 0){
            answer ++;
        }
    }

    return answer;
}