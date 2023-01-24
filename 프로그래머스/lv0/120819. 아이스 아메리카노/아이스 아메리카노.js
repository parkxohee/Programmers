function solution(money) {
    let num = Math.floor(money / 5500);
    let change = Math.floor(money % 5500);
    var answer = [];
    answer.push(num);
    answer.push(change);
    return answer;
}