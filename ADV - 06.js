function pairs(numArray, sum){
    const cleanArray = [];
    numArray.sort((a ,b)=> a - b);
    for (let i = 0 ; i < numArray.length ; i++){
        for (let a = 1 ; a < numArray.length ; a++){
            if (numArray[i]+numArray[a] === 7 && 
                numArray[a] !== numArray[a + 1] && 
                numArray[a] !== numArray[a - 1]){
                cleanArray.push([numArray[i], numArray[a]]);
            }
        }
    }
    return cleanArray;
}

console.log(pairs([1, 6, 4, 5, 3, 3], 7)); 