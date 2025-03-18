document.addEventListener("DOMContentLoaded", function () {
    // --- Установка темы при загрузке страницы ---
    const savedTheme = localStorage.getItem("selectedTheme") || "theme4"; // По умолчанию тема 4
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Функция смены темы
    function changeTheme(themeName) {
        document.documentElement.setAttribute("data-theme", themeName);
        localStorage.setItem("selectedTheme", themeName);
    }

    // Назначаем обработчики на кнопки выбора темы
    document.querySelectorAll("#theme-buttons button").forEach(button => {
        button.addEventListener("click", function () {
            changeTheme(this.getAttribute("onclick").match(/'(.+)'/)[1]);
        });
    });

    // --- Часы ---
    function updateTime(zone, elementId) {
        const options = { timeZone: zone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        document.getElementById(elementId).textContent = new Date().toLocaleTimeString("ru-RU", options);
    }

    const timeZones = {
        "time-moscow": "Europe/Moscow",
        "time-kaliningrad": "Europe/Kaliningrad",
        "time-yekaterinburg": "Asia/Yekaterinburg",
        "time-novosibirsk": "Asia/Novosibirsk",
        "time-vladivostok": "Asia/Vladivostok"
    };

    Object.keys(timeZones).forEach(id => {
        document.getElementById(id).addEventListener("click", function () {
            updateTime(timeZones[id], "time-display");
        });
    });

    function showTime(country) {
        const timeZones = {
            "Russia": "Europe/Moscow",
            "USA": "America/New_York",
            "China": "Asia/Shanghai",
            "UK": "Europe/London",
            "India": "Asia/Kolkata"
        };
        updateTime(timeZones[country], "timeDisplay");
    }

    window.showTime = showTime;

    // --- Генератор бизнес-идей ---
    const ideas = [
        "Открыть онлайн-курс по востребованной нише",
        "Создать уникальные hand-made товары",
        "Развивать YouTube-канал с монетизацией",
        "Открыть кофейню с необычной концепцией",
        "Создать подписочную платформу с эксклюзивным контентом",
        "Запустить сервис по доставке необычных товаров",
        "Разрабатывать мобильные приложения",
        "Открыть студию дизайна и брендинга",
        "Организовать консультации по финансам",
        "Запустить маркетплейс для узкой ниши"
    ];

    document.getElementById("generate-idea").addEventListener("click", function () {
        const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
        document.getElementById("idea-output").textContent = randomIdea;
    });

    // --- Квиз ---
    const quizData = [
        {
            question: "Что для вас важнее всего в бизнесе?",
            options: ["Прибыль", "Свобода", "Влияние", "Инновации"],
            correct: null
        },
        {
            question: "Какой стиль управления вам ближе?",
            options: ["Авторитарный", "Демократичный", "Либеральный", "Смешанный"],
            correct: null
        },
        {
            question: "Как вы принимаете решения?",
            options: ["На основе данных", "Интуитивно", "Советуюсь с командой", "Через пробу и ошибки"],
            correct: null
        }
    ];

    let currentQuestionIndex = 0;
    const quizContainer = document.getElementById("quiz-container");
    const quizQuestion = document.getElementById("quiz-question");
    const quizOptions = document.getElementById("quiz-options");
    const nextButton = document.getElementById("next-question");
    const quizResult = document.getElementById("quiz-result");

    document.getElementById("start-quiz").addEventListener("click", function () {
        quizContainer.style.display = "block";
        showQuestion();
    });

    function showQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        quizQuestion.textContent = currentQuestion.question;
        quizOptions.innerHTML = "";
        
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("quiz-option");
            button.addEventListener("click", function () {
                nextButton.style.display = "block";
            });
            quizOptions.appendChild(button);
        });
    }

    nextButton.addEventListener("click", function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
            nextButton.style.display = "none";
        } else {
            quizContainer.style.display = "none";
            quizResult.textContent = "Спасибо за участие! Ваш стиль предпринимательства уникален!";
        }
    });

    // --- Кнопка наверх ---
    const scrollToTopButton = document.getElementById("scroll-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
