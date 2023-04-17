let bill = document.querySelector('#rating');
let outputDiv = document.querySelector('#output');

bill.forEach(button => {
    button.addEventListener('click', () => {
      let number = button.value;
      outputDiv.innerText += number;
    });
  });