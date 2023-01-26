function solution(array) {
    let maxIndex = 0;
    let maxNum = array[0];
    for(let i = 1; i<array.length; i++){
        if(array[i] > maxNum){
            maxNum = array[i];
            maxIndex = i;
        }
    }
    let answer = [];
    answer.push(maxNum);
    answer.push(maxIndex);
    return answer;
}