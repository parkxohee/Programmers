function solution(n) {
    // 정수를 한자리 숫자를 저장하는 배열로 변경
    // 배열 정렬함수 사용
    // 다시 문자열로 변경하여 내림차순 적용
    // 문자열을 정수로
    let arr = [];
    let answer = '';
    for(let element of String(n)){
        arr.push(element);
    }
    arr.sort();
    for(let element of arr){
        answer = element + answer;
    }
    return Number(answer);
}