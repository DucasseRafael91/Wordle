const keys = document.querySelectorAll('.key');
const blocs = document.querySelectorAll('.letter-container');

let step = 0;
const data = [];
currentWord = ""
motToFind = 'table'


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
        console.log(step);
        if(step  === 5) {
            for (let index = 0; index < 6; index++) {
                currentWord += data[index]                
            }
            console.log('current');
            console.log(currentWord);
            if(currentWord === motToFind) {
                console.log("win");
            } else {
                // mettre backgroud en vert si a la bonne place et meme lettre 
                // mettre backgroud en jaune mauvais place mais lettre existe dans le mot 
                // mettre backgroud en rouge si lettre inexistante dans motToFind 
            }
        } else if(step > 5 && step < 11) {
            currentWord = ''
            for (let index = 5; index < 11; index++) {
                currentWord += data[index]                
            }
            console.log('here value entre 5 et 10', step);
        }
      }
    }

    console.log("data", data);
  });
});


