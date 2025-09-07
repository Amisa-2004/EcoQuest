const questions = [
  {
    question: "Which of these is NOT recyclable?",
    options: ["Glass bottle", "Plastic bag", "Aluminum can", "Soiled pizza box"],
    answer: 3
  },
  {
    question: "What color bin is usually used for organic waste?",
    options: ["Blue", "Green", "Red", "Yellow"],
    answer: 1
  },
  {
    question: "What can old tires be repurposed into?",
    options: ["Planters", "Swings", "Playground flooring", "All of the above"],
    answer: 3
  }
];

let current = 0, score = 0;

function showQuestion(idx) {
  const q = questions[idx];
  let html = `<h3>${q.question}</h3><div class='opts'>`;
  q.options.forEach((op, i) => {
    html += `<button class='qopt' onclick='selectAns(${i})'>${op}</button>`;
  });
  html += "</div>";
  document.getElementById('quiz-question-area').innerHTML = html;
  document.getElementById('quiz-feedback').innerHTML = "";
  document.getElementById('next-btn').style.display = 'none';
}
window.selectAns = function(idx) {
  const correct = questions[current].answer;
  if(idx === correct) {
    document.getElementById('quiz-feedback').innerHTML = "<span style='color:green;font-weight:bold'>Correct!</span>";
    score++;
  } else {
    document.getElementById('quiz-feedback').innerHTML = "<span style='color:#b91c1c;font-weight:bold'>Incorrect.</span>";
  }
  Array.from(document.getElementsByClassName('qopt')).forEach(btn => btn.disabled = true);
  document.getElementById('next-btn').style.display = '';
}
document.getElementById('next-btn').onclick = function() {
  current++;
  if(current < questions.length) {
    showQuestion(current);
  } else {
    showReward();
  }
};
function showReward() {
  document.getElementById('quiz-question-area').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('quiz-feedback').style.display = 'none';
  document.getElementById('quiz-reward').style.display = '';
}

function setCompletedChapters(chapterNumber) {
  localStorage.setItem('chaptersCompleted', chapterNumber);
}

// Assume chapter 1 just completed
setCompletedChapters(1);


// Initialize first question
showQuestion(0);
