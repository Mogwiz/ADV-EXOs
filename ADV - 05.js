function reverseArray(arr) {
    for (let a = 0, b = arr.length - 1; a < b; a++, b--) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    }

    return arr;
}


console.log(reverseArray(["This", "is", "a", "sentence"]));