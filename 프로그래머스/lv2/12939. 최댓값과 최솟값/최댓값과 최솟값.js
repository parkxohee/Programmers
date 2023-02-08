// 문자열 숫자들을 배열로 변경 => .split()
// 배열로 변경 시 자료형이 Number여야 함 => .map(Number) 
// 변경된 배열에서 최대 최소 찾기 => Math.max(), Math.min()
function solution(s) {
    let arr = s.split(' ').map(Number);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const answer = String(min) + ' ' + String(max);
    return answer;
}