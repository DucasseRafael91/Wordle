function chooseWord(){
    const fs = require("fs");

    const data = JSON.parse(fs.readFileSync("words.json", "utf8"));

    const randomWords = data.words[Math.floor(Math.random() * data.words.length)];

    return randomWords;
}