console.log("test")

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', e => {
    console.log(e.target.textContent);
  });
});
