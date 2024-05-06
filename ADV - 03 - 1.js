function caesarCipher(str, shift) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
        const newCharCode = (charCode - 65 + shift + 26) % 26 + 65;
        result += String.fromCharCode(newCharCode);

    } else if (charCode >= 97 && charCode <= 122) {
        const newCharCode = (charCode - 97 + shift + 26) % 26 + 97;
        result += String.fromCharCode(newCharCode);

    } else {
        result += str[i];
    }
    }
    return result.toLowerCase();
}



    console.log(caesarCipher("zoo keeper", 2));
    console.log(caesarCipher("bqq mggrgt", -2));
    console.log(caesarCipher("My name is Henrique", 3));