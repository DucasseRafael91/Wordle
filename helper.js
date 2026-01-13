// ========================
// Load word list from JSON
// ========================
function loadWordList(filePath) {
    const fs = require("fs");
    const data = fs.readFileSync(filePath, "utf8");
    const json = JSON.parse(data);
    return json.words || json; // support both keys
}

// ========================
// Choose a random word
// ========================
function chooseWord(){
    

    const data = loadWordList('words.json');

    const randomWords = data.words[Math.floor(Math.random() * data.words.length)];

    return randomWords;
}


function checkWord(wordTried, wordToGuess){
    let response = {
        result:'',
        message:'',
        correctPlacedLetters:[],
        correctButNotPlacedLetters:[]
    };
    //check if the word is the same
    if(wordTried == wordToGuess){
        return {'result':'win','message':'you found the word'};
    }


    //go throught each letter to check if they are really placed
    wordTried.split("").forEach((letter,index) => {
        if(letter == wordToGuess.split("")[index]){
            //add letter to index
            response.correctPlacedLetters.push({index:letter})
        }
    });

    //go throught each letter if they are not placed but present
    wordTried.split("").forEach((letter,index) => {
        if(letter == wordToGuess.split("")[index]){
            //add letter to index
            response.correctPlacedLetters.push({index:letter})
        }
    });
    
    


    return response;
}

console.log(checkWord('vieut','vieux'));