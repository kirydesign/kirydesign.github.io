// 버튼과 body 요소 가져오기
const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const title = document.getElementById('title');
const text = document.getElementById('text');

// 클릭 시 토글
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // 놀라운 효과 추가
  if (body.classList.contains('dark-mode')) {
    title.textContent = "🌙 Welcome to the Dark Side";
    text.textContent = "Surprise! Even text changed!";
    toggleBtn.textContent = "☀️ Toggle";
  } else {
    title.textContent = "☀️ Hello World";
    text.textContent = "Click the light bulb to see what happens...";
    toggleBtn.textContent = "💡 Toggle";
  }
});
