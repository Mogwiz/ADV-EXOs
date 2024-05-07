function fibonacci(num){
    const arr = [];
    arr.push(num, num);
    for(let i = 1 ; i < num - 1 ; i++){
        arr.push(num + arr[i])
    }
    return arr;
}

console.log(fibonacci(7));