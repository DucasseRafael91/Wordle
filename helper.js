function chooseWord(){
    const fs = require("fs");

    // Ler o ficheiro JSON
    const data = JSON.parse(fs.readFileSync("words.json", "utf8"));

    // Escolher uma palavra ao acaso
    const randomWords = data.words[Math.floor(Math.random() * data.words.length)];

    return randomWords;
}