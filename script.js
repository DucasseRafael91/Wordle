const keys = document.querySelectorAll('.key');
const blocs = document.querySelectorAll('.letter-container');

let step = 0;
const data = [];
const motToFind = 'table';

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
        const currentRow = Math.floor(step / WORD_LENGTH);

        if (lockedRows[currentRow]) return;

        if (value === "Restart") {
            window.location.reload();
        } else if (value === "Return") {
            if (step > currentRow * WORD_LENGTH) {
                step--;
                blocs[step].textContent = "";
                data.pop();
            }
        } else {
            if (step < blocs.length) {
                blocs[step].textContent = value;
                data.push(value);
                step++;

                if (step % WORD_LENGTH === 0 && currentRow < MAX_ATTEMPTS) {
                    checkWord(step - WORD_LENGTH);
                }
            }
        }
    });
});
