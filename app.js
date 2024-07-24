
let display = document.getElementById('display');

function clearDisplay() {
  display.innerText = '0';
}

function appendCharacter(char) {
  if (display.innerText === '0') {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}
