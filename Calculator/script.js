function calculate(operator) {
  var a = parseFloat(document.getElementById("a_value").value);
  var b = parseFloat(document.getElementById("b_value").value);
  if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid numbers");
    return;
  }
  if (operator === "/" && b === 0) {
    alert("Cannot divide by zero");
    return;
  }
  var result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
  }
  document.getElementById("result").textContent = `Result: ${result}`;
}
function reset() {
  var confirm_reset = confirm("Are you sure you want to reset?");
  if (confirm_reset == true) {
    document.getElementById("a_value").value = "";
    document.getElementById("b_value").value = "";
    document.getElementById("result").textContent = "";
  }
}
