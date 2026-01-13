console.log("test")

const key = document.querySelectorAll('key')

key.addEventListener("click", function (e) {
    console.log(e.target.value);
})
