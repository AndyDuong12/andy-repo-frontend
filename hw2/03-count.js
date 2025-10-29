// Add your code here
const input = document.getElementById("userInput");
const textElement = document.getElementById("bodyText");

// Save original text
const originalText = textElement.textContent;

input.addEventListener("keydown", () => {
  // Using setTimeout because keydown event occurs before the input value is updated
  setTimeout(() => {
    const prompt = input.value.trim().toLowerCase();

    // Clear previous highlights
    textElement.innerHTML = originalText;

    // Check if input is empty
    if (!prompt) return;

    // Split text into words by spaces
    const words = originalText.split(" ");
    console.log(words);

    const highlight = words.map((word) => {
      // Compare words with prompt (case-insensitive)
      if (word.toLowerCase() === prompt) {
        return `<span class="bg-warning">${word}</span>`;
      }

      return word; // Keep original word if no match
    });

    // Change the text with highlighted matches
    textElement.innerHTML = highlight.join(" ");
  }, 0);
});
