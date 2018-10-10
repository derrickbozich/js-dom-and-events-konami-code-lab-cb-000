const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  document.body.addEventListener('keydown', (event) => {
    console.log(event.which);

    let input = parseInt(event.which);
    if (input == code[index]) {
      console.log(index);
      if (index + 1 == code.length) {
        index = 0;
        return alert("Hurray!");

      }
      index ++;

    } else {
      index = 0;
    }
  });
}

init();
