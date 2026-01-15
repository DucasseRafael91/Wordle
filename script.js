const keys = document.querySelectorAll('.key');
const blocs = document.querySelectorAll('.letter-container');

  words = [
    "table",
    "sable",
    "linge",
    "crime",
    "porte",
    "champ",
    "flute",
    "bravo",
    "cadre",
    "fouet",
  ]

function chooseWord(){
    const randomWords = words[Math.floor(Math.random() * words.length)];
    return randomWords;
}

let step = 0;
const data = [];
let currentWord = "";
let motToFind = chooseWord();
console.log(motToFind);

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

const lockedRows = new Array(MAX_ATTEMPTS).fill(false);

function getCurrentRowStart() {
    return Math.floor(step / WORD_LENGTH) * WORD_LENGTH;
}

function checkWord(rowStart) {
    const currentWord = data.slice(rowStart, rowStart + WORD_LENGTH).join('');

    for (let i = 0; i < WORD_LENGTH; i++) {
        const letter = data[rowStart + i];
        const bloc = blocs[rowStart + i];

        if (letter.toLowerCase() === motToFind[i]) {
            bloc.classList.add("correct");
        } else if (motToFind.includes(letter.toLowerCase())) {
            bloc.classList.add("present");
        } else {
            bloc.classList.add("absent");
        }
    }

    lockedRows[Math.floor(rowStart / WORD_LENGTH)] = true;

    if (currentWord.toLowerCase() === motToFind) {
        console.log("WIN");
    }
}

keys.forEach(key => {
  key.addEventListener("click", e => {
    const value = e.target.textContent;

    if (value === "Restart") {
      window.location.reload();
    } 
    else if (value === "Return") {
      if (step > 0) {
        step--;
        blocs[step].textContent = "";
        data.pop();
      }
    } 
    else {
      if (step < blocs.length) {
        checkpalier()
        blocs[step].textContent = value;
        data.push(value);
        step++;
        
        if (step % WORD_LENGTH === 0 && step <= WORD_LENGTH * MAX_ATTEMPTS) {
          checkWord(step - WORD_LENGTH);
        }
    });
});
