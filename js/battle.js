// Demo state
let currentQuestion = 0;
let playerScores = [0, 0];
const questions = [
  {
    question: "Which practice leads directly to deforestation?",
    options: ["Reforestation", "Selective logging", "Urban sprawl", "Sustainable farming"],
    answer: 2 // "Urban sprawl"
  },
  {
    question: "What is a major consequence of deforestation?",
    options: ["Increased biodiversity", "Soil erosion", "Cleaner air", "Cooling climate"],
    answer: 1 // "Soil erosion"
  }
];

// Show first question
function showQuestion(qIndex) {
  const q = questions[qIndex];
  document.getElementById("question-text").innerText = q.question;
  document.querySelectorAll(".option").forEach((btn, i) => {
    btn.innerText = String.fromCharCode(65 + i) + ") " + q.options[i];
    btn.disabled = false;
    btn.classList.remove('correct', 'incorrect');
    btn.onclick = () => handleAnswer(i, qIndex);
  });
  document.querySelector(".result-msg").innerHTML = "";
}

function handleAnswer(selected, qIndex) {
  const q = questions[qIndex];
  if (selected === q.answer) {
    playerScores[0] += 10;
    document.querySelector(".result-msg").innerText = "Correct!";
  } else {
    playerScores[1] += 10;
    document.querySelector(".result-msg").innerText = "Opponent gains points!";
  }
  updateScores();
  setTimeout(() => {
    if (qIndex + 1 < questions.length) {
      showQuestion(qIndex + 1);
    } else {
      endBattle();
    }
  }, 1200);
  document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
}

function updateScores() {
  document.querySelectorAll(".score")[0].innerText = "Score: " + playerScores[0];
  document.querySelectorAll(".score")[1].innerText = "Score: " + playerScores[1];
}

function endBattle() {
  let msg = playerScores[0] > playerScores[1] ? "You win!" : "You lose!";
  document.querySelector(".result-msg").innerText = msg;
}

showQuestion(0);

