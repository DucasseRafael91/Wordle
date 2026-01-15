const keys = document.querySelectorAll('.key');
const blocs = document.querySelectorAll('.letter-container');

const words = [
  "table", "sable", "linge", "crime", "porte",
  "champ", "flute", "bravo", "cadre", "fouet",
];

function chooseWord() {
  return words[Math.floor(Math.random() * words.length)];
}

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

let step = 0;
let data = [];
let motToFind = chooseWord();
console.log(motToFind);

const lockedRows = new Array(MAX_ATTEMPTS).fill(false);

/* 🔹 Vérifie une ligne */
function checkWord(rowStart) {
  const word = data.slice(rowStart, rowStart + WORD_LENGTH).join('').toLowerCase();

  for (let i = 0; i < WORD_LENGTH; i++) {
    const letter = data[rowStart + i].toLowerCase();
    const bloc = blocs[rowStart + i];

    if (letter === motToFind[i]) {
      bloc.classList.add("correct");
    } else if (motToFind.includes(letter)) {
      bloc.classList.add("present");
    } else {
      bloc.classList.add("absent");
    }
  }

  lockedRows[rowStart / WORD_LENGTH] = true;

  if (word === motToFind) {
    console.log("WIN");
  }
}
keys.forEach(key => {
  key.addEventListener("click", e => {
    const value = e.target.textContent;

    const currentRow = Math.floor(step / WORD_LENGTH);
    const rowStart = currentRow * WORD_LENGTH;

    if (value === "Restart") {
      window.location.reload();
      return;
    }

    if (value === "Return") {
      if (step > rowStart && !lockedRows[currentRow]) {
        step--;
        blocs[step].textContent = "";
        data.pop();
      }
      return;
    }

    if (lockedRows[currentRow]) return;

    if (step < blocs.length && step < rowStart + WORD_LENGTH) {
      blocs[step].textContent = value;
      data.push(value);
      step++;
    }

    if (step % WORD_LENGTH === 0) {
      checkWord(step - WORD_LENGTH);
    }
  });
});
