function caesarCode(str, shift) {
    const alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lowerString = str.toLowerCase().split("");
    let shiftReduced = shift % 26;
    let minus = 26 + shiftReduced;
    let clearText = [];

    for (let i = 0; i < lowerString.length; i++) {
    if (alph.indexOf(lowerString[i]) === -1) {
        clearText.push(lowerString[i]);

    } else {
        if (shiftReduced < 0) {
        clearText.push(alph[alph.indexOf(lowerString[i]) + minus]);

        } else {
        clearText.push(alph[alph.indexOf(lowerString[i]) + shiftReduced]);
        }
    }
    }
    return clearText.join("").toLowerCase();
}

console.log(caesarCode("zoo keeper", 2));
console.log(caesarCode("bqq mggrgt", -2));
console.log(caesarCode("My name is Henrique", 3));