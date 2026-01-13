const keys = document.querySelectorAll('.key');
const blocs = document.querySelectorAll('.letter-container');

let step = 0;
const data = [];
let currentWord = "";
const motToFind = 'table';

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

function getCurrentRowStart() {
    return Math.floor(step / WORD_LENGTH) * WORD_LENGTH;
}

function checkWord(rowStart) {
    currentWord = data.slice(rowStart, rowStart + WORD_LENGTH).join('');

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

    if (currentWord.toLowerCase() === motToFind) {
        console.log("WIN");
    }
}

keys.forEach(key => {
    key.addEventListener("click", e => {
        const value = e.target.textContent;

        if (value === "Return") {
            if (step > 0) {
                step--;
                blocs[step].textContent = "";
                data.pop();
            }
        } else {
            if (step < blocs.length) {
                blocs[step].textContent = value;
                data.push(value);
                step++;

                // Vérifier à chaque fin de ligne (5, 10, 15, 20, 25, 30)
                if (step % WORD_LENGTH === 0 && step <= WORD_LENGTH * MAX_ATTEMPTS) {
                    checkWord(step - WORD_LENGTH);
                }
            }
        }
    });
});