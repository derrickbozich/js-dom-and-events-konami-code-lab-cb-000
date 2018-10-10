const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  document.body.addEventListener('keydown', (event) => {
    console.log(event.which);

    let input = parseInt(event.which || e.detail);
    if (input == code[index]) {
      console.log(index);
      index ++;
      if (index  == code.length) {

        alert("Hurray!");
        index = 0;
      }
    

    } else {
      index = 0;
    }
  });
}

init();
