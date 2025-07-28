let display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    let expression = display.innerText.replace(/(\d+)%/g, '($1/100)');
    display.innerText = eval(expression);
  } catch {
    display.innerText = 'Error';
  }
}


// Keyboard support
document.addEventListener('keydown', function(e) {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    display.innerText = display.innerText.slice(0, -1) || '0';
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});