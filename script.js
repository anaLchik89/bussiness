const timeDisplay = document.getElementById("time-display");
function updateTimeForZone(zone, label) {
  const now = new Date();
const options = { timeZone: zone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const timeString = now.toLocaleTimeString("ru-RU", options);
  timeDisplay.textContent = label + ": " + timeString;
}
document.getElementById("time-moscow").addEventListener("click", () => updateTimeForZone("Europe/Moscow", "Московское время"));
document.getElementById("time-kaliningrad").addEventListener("click", () => updateTimeForZone("Europe/Kaliningrad", "Калининградское время"));
document.getElementById("time-yekaterinburg").addEventListener("click", () => updateTimeForZone("Asia/Yekaterinburg", "Екатеринбургское время"));
document.getElementById("time-novosibirsk").addEventListener("click", () => updateTimeForZone("Asia/Novosibirsk", "Новосибирское время"));
document.getElementById("time-vladivostok").addEventListener("click", () => updateTimeForZone("Asia/Vladivostok", "Владивостокское время"));
const scrollToTopBtn = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const toggleThemeBtn = document.getElementById("toggle-theme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
const ideaBtn = document.getElementById("generate-idea");
const ideaOutput = document.getElementById("idea-output");
const ideas = [
  "Открыть кофейню с инновационным меню.",
  "Создать платформу для онлайн-курсов по предпринимательству.",
  "Разработать мобильное приложение для управления финансами малого бизнеса.",
  "Запустить сервис доставки здорового питания.",
  "Создать стартап по аренде электросамокатов.",
  "Цитата: 'Успех — это умение идти от неудачи к неудаче без потери энтузиазма.' – Уинстон Черчилль",
  "Цитата: 'Лучший способ предсказать будущее — создать его.' – Питер Друкер"
];
if (ideaBtn) {
  ideaBtn.addEventListener("click", () => {
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    ideaOutput.textContent = randomIdea;
  });
}
const quizData = [
  {
    question: "Какой стиль управления вам ближе?",
    options: [
      { text: "Демократический", score: 2 },
      { text: "Авторитарный", score: 1 },
      { text: "Либеральный", score: 3 }
    ]
  },
  {
    question: "Как вы относитесь к риску?",
    options: [
      { text: "Люблю риск", score: 1 },
      { text: "Предпочитаю стабильность", score: 3 },
      { text: "Балансирую", score: 2 }
    ]
  },
  {
    question: "Какой масштаб бизнеса вам интересен?",
    options: [
      { text: "Местный", score: 3 },
      { text: "Региональный", score: 2 },
      { text: "Национальный", score: 1 }
    ]
  },
  {
    question: "Как вы относитесь к инновациям?",
    options: [
      { text: "Внедряю новые технологии", score: 1 },
      { text: "Склонен к проверенным методам", score: 3 },
      { text: "Смешанный подход", score: 2 }
    ]
  },
  {
    question: "Какую роль вы предпочитаете в бизнесе?",
    options: [
      { text: "Лидер", score: 1 },
      { text: "Менеджер", score: 2 },
      { text: "Консультант", score: 3 }
    ]
  }
];
let currentQuestion = 0;
let quizScore = 0;
const startQuizBtn = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz-container");
const quizQuestionEl = document.getElementById("quiz-question");
const quizOptionsEl = document.getElementById("quiz-options");
const nextQuestionBtn = document.getElementById("next-question");
const quizResultEl = document.getElementById("quiz-result");
startQuizBtn.addEventListener("click", startQuiz);
function startQuiz() {
  startQuizBtn.style.display = "none";
  quizContainer.style.display = "block";
  currentQuestion = 0;
  quizScore = 0;
  showQuestion();
}
function showQuestion() {
  quizResultEl.textContent = "";
  const currentData = quizData[currentQuestion];
  quizQuestionEl.textContent = currentData.question;
  quizOptionsEl.
innerHTML = "";
  currentData.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.addEventListener("click", () => {
      quizScore += option.score;
      Array.from(quizOptionsEl.children).forEach(button => button.disabled = true);
      if (currentQuestion < quizData.length - 1) {
        nextQuestionBtn.style.display = "inline-block";
      } else {
        nextQuestionBtn.style.display = "none";
        showResult();
      }
    });
    quizOptionsEl.appendChild(btn);
  });
}
nextQuestionBtn.addEventListener("click", () => {
  currentQuestion++;
  nextQuestionBtn.style.display = "none";
  showQuestion();
});
function showResult() {
  quizContainer.style.display = "none";
  let resultText = "";
  if (quizScore <= 7) {
    resultText = "Ваш стиль ведения бизнеса: инновационный и рискованный!";
  } else if (quizScore <= 11) {
    resultText = "Ваш стиль ведения бизнеса: сбалансированный и гибкий!";
  } else {
    resultText = "Ваш стиль ведения бизнеса: консервативный и продуманный!";
  }
  quizResultEl.textContent = resultText;
  startQuizBtn.style.display = "inline-block";
}
