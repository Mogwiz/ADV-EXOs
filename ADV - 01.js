function ransomNote(noteText, magazineText){
    let noteArr = noteText.split(" ");
    let magazineArr = magazineText.split(" ");

    for (let i = 0 ; i < noteArr.length ; i++){
        for (let a = 0 ; a < magazineArr.length ; a++){
            if (noteArr[i] !== magazineArr[a]){
                continue;
            } else {
                noteArr.shift();
                magazineArr.splice(a, 1);
                i = 0;
                a = 0;
            }
        }
    }
    if (noteArr.length === 0){
        return true;
    } else {
        return false;
    }
}

console.log(ransomNote("this is a secret note to you from a secret admirer","puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"));