// Change text and styles
const changeBtn = document.getElementById('change-btn');
const dynamicText = document.getElementById('dynamic-text');

changeBtn.addEventListener('click', () => {
  dynamicText.textContent = "Hello, you look pretty!";
  dynamicText.classList.toggle('highlight');
});

// Add or remove an element
const toggleBtn = document.getElementById('toggle-element-btn');
const extraContainer = document.getElementById('extra-container');
let extraParagraph = null;

toggleBtn.addEventListener('click', () => {
  if (!extraParagraph) {
    extraParagraph = document.createElement('p');
    extraParagraph.textContent = " This is the added paragraph!📝";
    extraContainer.appendChild(extraParagraph);
  } else {
    extraParagraph.remove();
    extraParagraph = null;
  }
});
