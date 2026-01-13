// ========================
// Load word list from JSON
// ========================
function loadWordList(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  const json = JSON.parse(data);
  return json.words || json; // support both keys
}

// ========================
// Choose a random word
// ========================
function chooseWord(){
    const fs = require("fs");

    const data = loadWordList('words.json');

    const randomWords = data.words[Math.floor(Math.random() * data.words.length)];

    return randomWords;
}