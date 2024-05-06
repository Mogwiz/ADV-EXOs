function wordReverse(string){
    const arr = string.split(" ").map(word => word.split("").reverse().join(""));
    return arr.join(" ");
}

console.log(wordReverse("This is a string of words"))
