function appendValue(val) {
  const display = document.getElementById("display");
  display.value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById("display").value;

  try {
    expression = expression.replace(/√/g, 'Math.sqrt');
    expression = expression.replace(/\^/g, '**');
    const result = eval(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function copyResult() {
  const text = document.getElementById("display").value;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied!");
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

document.addEventListener("keydown", function (e) {
  const key = e.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.', '(', ')', '%', '^'].includes(key)) {
    appendValue(key);
  } else if (key === "Enter" || key === "=") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
