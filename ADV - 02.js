function isPalindrome(text){
const textClean = text.toLowerCase().replace(/[^a-z0-9]/g, "")
if (textClean === textClean.split("").reverse().join("")){
    return true;
} else {
    return false;
}
}


console.log(isPalindrome("kayak"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("hello world"));
console.log(isPalindrome("Madam, I'm Adam"));
