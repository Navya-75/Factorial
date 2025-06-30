function calculateFactorial() {
  const num = parseInt(document.getElementById("numberInput").value);
  const result = document.getElementById("result");

  if (isNaN(num) || num < 0) {
    result.textContent = "❗ Please enter a valid non-negative number.";
    return;
  }

  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  result.textContent = `${num}! = ${factorial}`;
}
