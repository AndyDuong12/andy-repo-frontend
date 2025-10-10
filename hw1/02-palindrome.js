const elem = document.querySelector("input");
const result = document.getElementById("result");

elem.addEventListener("input", handleInput);

function handleInput(e) {
  // Check if the input is empty
  if (e.target.value === "") {
    result.textContent = "";
    return;
  }

  // Check if the input number is palindrome
  const check = checkPalindrome(e.target.value);

  if (check) {
    result.textContent = "Yes. This is a palindrome!";
    result.style.color = "green";
  } else {
    result.textContent = "No. Try again.";
    result.style.color = "red";
  }
}

function checkPalindrome(num) {
  // Convert string to number
  num = Number(num);

  // Check negative number
  if (num < 0) {
    return false;
  }

  let reverse = 0; // Variable to store reverse of the input number
  let temp = num; // Copy of the original number to compare later

  // In each iteration:
  // - Get last digit of num by taking the remainder after divided by 10 (num % 10)
  // - Add the last digit to reverse variable after shifting the existing digits one place to the left (reverse * 10)
  // - Update num by removing its last digit (Math.floor(num / 10))

  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reverse === temp;
}
