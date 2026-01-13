const keys = document.querySelectorAll('.key');
const blocs = document.querySelectorAll('.letter-container');

let step = 0;
const data = [];

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
            console.log('five');
        }
      }
    }

    console.log("data", data);
  });
});


