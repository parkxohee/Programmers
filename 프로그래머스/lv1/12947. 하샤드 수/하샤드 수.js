function solution(x) {
    let stringx = String(x);
    let sum = 0;
    for(let i=0; i<stringx.length; i++){
        let oneNum = stringx.substr(i, 1);
        sum = sum + Number(oneNum);
    }
    if(x%sum === 0){
        return true;
    } else {
        return false;
    }
}