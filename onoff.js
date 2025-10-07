const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const title = document.getElementById('title');
const text = document.getElementById('text');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    title.textContent = "🌙 Welcome to the Dark Side";
    text.textContent = "Surprise! The text changed too!";
    toggleBtn.textContent = "☀️ Toggle";
  } else {
    title.textContent = "☀️ Hello World";
    text.textContent = "Click the light bulb to see what happens...";
    toggleBtn.textContent = "💡 Toggle";
  }
});
