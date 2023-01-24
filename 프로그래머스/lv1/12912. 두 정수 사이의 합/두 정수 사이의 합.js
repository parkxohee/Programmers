function solution(a, b) {
    let min = 0;
    let max = 0;
    let answer = 0;

    if(a > b){
        min = b;
        max = a;
    } else {
        min = a;
        max = b;
    }
    
    for(let i=min; i<=max; i++){
        answer = answer + i
    }

    return answer;
}