function solution(array) {
    array.sort(function(a, b)  {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });
    let midIndex = Math.floor(array.length/2);
    let answer = array[midIndex];
    return answer;
}