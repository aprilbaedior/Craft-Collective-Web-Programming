// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Grab the search input field
    const searchInput = document.getElementById("faqSearch");
  
    // Grab all the <details> elements inside the FAQ container (each question/answer set)
    const faqs = document.querySelectorAll("#faqContainer details");
  
    // Listen for typing (input event) inside the search bar
    searchInput.addEventListener("input", () => {
      // Get what the user typed in, convert to lowercase for case-insensitive matching
      const searchTerm = searchInput.value.toLowerCase();
  
      // Loop through every FAQ question/answer block
      faqs.forEach(faq => {
        // Grab the text from the <summary> (question) and <p> (answer), also lowercase
        const question = faq.querySelector("summary").textContent.toLowerCase();
        const answer = faq.querySelector("p").textContent.toLowerCase();
  
        // Check if the search term is found in either the question or the answer
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
          faq.style.display = "block"; // show it if it matches
        } else {
          faq.style.display = "none";  // hide it if it doesn’t match
        }
      });
    });
  });