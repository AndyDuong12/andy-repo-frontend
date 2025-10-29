// Add your code here

const userInput = document.getElementById("userInput");
const button = document.getElementById("searchButton");
const results = document.getElementById("results");

button.addEventListener("click", () => {
  const prompt = userInput.value.trim().toLowerCase();
  results.innerHTML = ""; // Clear previous results

  // Check if the input is empty
  if (!prompt) {
    results.textContent = "";
    return;
  }

  // Filter characters to match the search prompt
  const searchResult = characters.filter((char) =>
    char.name.toLowerCase().includes(prompt)
  );

  // Display results
  if (searchResult.length > 0) {
    searchResult.forEach((char) => {
      // Highlight matching text in name
      const highlight = char.name.replace(
        new RegExp(prompt, "gi"), // flag 'g' for global search, 'i' for case-insensitive match
        (match) => `<span class="bg-warning">${match}</span>`
      );

      // Create cards
      const card = document.createElement("div");
      card.className = "card text-center";
      card.style.width = "100%";
      card.style.maxWidth = "15rem";

      // Card body
      const cardBody = document.createElement("div");
      cardBody.className = "card-body pb-4";

      // Add the text to the card body
      cardBody.innerHTML = `
            <h5 class="card-title">${highlight}</h5>
            <p class="card-text">Birth year: ${char.birth_year}</p>
        `;

      // Append to card
      card.appendChild(cardBody); // Append card body to card
      results.appendChild(card);
    });
  } else {
    results.textContent = "No result found!";
    results.className =
      "d-flex justify-content-center align-items-center text-danger";
  }
});
