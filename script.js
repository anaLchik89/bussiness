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

const globalTimeDisplay = document.getElementById("timeDisplay");
function showTime(region) {
  const timeZones = {
    'Russia': 'Europe/Moscow',
    'USA': 'America/New_York',
    'China': 'Asia/Shanghai',
    'UK': 'Europe/London',
    'India': 'Asia/Kolkata'
  };
  const now = new Date().toLocaleTimeString('ru-RU', { timeZone: timeZones[region] });
  globalTimeDisplay.innerText = `Время в ${region}: ${now}`;
}

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
function changeTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

const ideaBtn = document.getElementById("generate-idea");
const ideaOutput = document.getElementById("idea-output");
const businessIdeas = [
  "Онлайн-курсы по программированию",
  "Продажа цифровых товаров",
  "Магазин экологичной одежды",
  "Кофейня с уникальной концепцией",
  "Аренда офисов для фрилансеров",
  "Создание мобильных приложений",
  "Ресторан здорового питания",
  "Автоматизированный онлайн-магазин",
  "Гаджеты для умного дома",
  "Персонализированные подарки",
  "Бизнес на NFT и криптовалюте",
  "Доставка фермерских продуктов",
  "Массажный салон на дому",
  "VR-туризм и экскурсии",
  "Услуги по автоматизации бизнеса",
  "Фитнес-программы онлайн",
  "Обучение детей IT-навыкам",
  "Разработка игр для мобильных устройств",
  "Сервис аренды техники",
  "Социальная платформа для предпринимателей"
];
if (ideaBtn) {
  ideaBtn.addEventListener("click", () => {
    const randomIdea = businessIdeas[Math.floor(Math.random() * businessIdeas.length)];
    ideaOutput.textContent = randomIdea;
  });
}

const quizData = [
  { question: "Какой стиль управления вам ближе?", options: [ { text: "Авторитарный", score: 1 }, { text: "Демократичный", score: 2 }, { text: "Либеральный", score: 3 } ] },
  { question: "Что важнее в бизнесе?", options: [ { text: "Прибыль", score: 1 }, { text: "Команда", score: 2 }, { text: "Идея", score: 3 } ] },
  { question: "Какой капитал у вас есть?", options: [ { text: "Менее $1000", score: 3 }, { text: "От $1000 до $10,000", score: 2 }, { text: "Более $10,000", score: 1 } ] },
  { question: "Какой формат работы вам удобен?", options: [ { text: "Офис", score: 2 }, { text: "Удалёнка", score: 3 }, { text: "Гибрид", score: 1 } ] },
  { question: "Вы готовы работать 24/7?", options: [ { text: "Да", score: 1 }, { text: "Нет", score: 3 }, { text: "Иногда", score: 2 } ] },
  { question: "Как вы привлекаете клиентов?", options: [ { text: "Реклама", score: 2 }, { text: "Нетворкинг", score: 3 }, { text: "Контент", score: 1 } ] },
  { question: "Как относитесь к риску?", options: [ { text: "Люблю рисковать", score: 1 }, { text: "Избегаю рисков", score: 3 }, { text: "Средний уровень", score: 2 } ] },
  { question: "Какая сфера вам ближе?", options: [ { text: "Технологии", score: 1 }, { text: "Розничная торговля", score: 3 }, { text: "Услуги", score: 2 } ] },
  { question: "Вы готовы к конкуренции?", options: [ { text: "Да", score: 1 }, { text: "Нет", score: 3 }, { text: "Не знаю", score: 2 } ] },
  { question: "Какую цель ставите?", options: [ { text: "Финансовая независимость", score: 1 }, { text: "Самореализация", score: 2 }, { text: "Помощь людям", score: 3 } ] },
  { question: "Какой уровень автоматизации вам нужен?", options: [ { text: "Максимальный", score: 1 }, { text: "Средний", score: 2 }, { text: "Минимальный", score: 3 } ] },
  { question: "Как относитесь к партнёрству?", options: [ { text: "Люблю работать в команде", score: 1 }, { text: "Только сам", score: 3 }, { text: "Зависит от ситуации", score: 2 } ] },
  { question: "Вы готовы работать без стабильного дохода?", options: [ { text: "Да", score: 1 }, { text: "Нет", score: 3 }, { text: "Временно", score: 2 } ] },
  { question: "Как вы выбираете ниши?", options: [ { text: "По трендам", score: 1 }, { text: "По интересу", score: 2 }, { text: "По доходности", score: 3 } ] },
  { question: "Готовы ли вы обучаться?", options: [ { text: "Да", score: 1 }, { text: "Нет", score: 3 }, { text: "Только по необходимости", score: 2 } ] },
  { question: "Какой уровень цифровизации вам удобен?", options: [ { text: "Максимальный", score: 1 }, { text: "Средний", score: 2 }, { text: "Минимальный", score: 3 } ] },
  { question: "Какую стратегию развития выберете?", options: [ { text: "Быстрое масштабирование", score: 1 }, { text: "Стабильный рост", score: 2 }, { text: "Осторожный старт", score: 3 } ] },
  { question: "Готовы ли вы делегировать задачи?", options: [ { text: "Да", score: 1 }, { text: "Нет", score: 3 }, { text: "Иногда", score: 2 } ] },
  { question: "Как относитесь к конкуренции?", options: [ { text: "Люблю вызовы", score: 1 }, { text: "Предпочитаю уникальность", score: 2 }, { text: "Главное – качество", score: 3 } ] },
  { question: "Какой канал продаж вам ближе?", options: [ { text: "Онлайн", score: 1 }, { text: "Офлайн", score: 3 }, { text: "Гибрид", score: 2 } ] }
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
  quizOptionsEl.innerHTML = "";
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
  if (quizScore <= 20) {
    resultText = "Ваш стиль ведения бизнеса: инновационный и рискованный!";
  } else if (quizScore <= 35) {
    resultText = "Ваш стиль ведения бизнеса: сбалансированный и гибкий!";
  } else {
    resultText = "Ваш стиль ведения бизнеса: консервативный и продуманный!";
  }
  quizResultEl.
textContent = resultText;
  startQuizBtn.style.display = "inline-block";
}
