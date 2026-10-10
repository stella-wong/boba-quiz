const questions = [
  {
    question: "What's your ideal day off?",
    answers: [
      {
        text: "Going on a spontaneous adventure with friends",
        result: "thai",
        image: "images/adventure.jpg",
      },
      {
        text: "Staying in bed and having a cozy movie day",
        result: "brownSugar",
        image: "images/cozyBed.jpg",
      },
      {
        text: "Visiting a cute café and browsing little shops",
        result: "matcha",
        image: "images/cuteCafe.jpg",
      },
      {
        text: "Baking something cute or doing arts and crafts",
        result: "taro",
        image: "images/baking.jpg",
      },
      {
        text: "Having a picnic and taking cute photos",
        result: "strawberry",
        image: "images/picnic.jpg",
      },
      {
        text: "Catching up with friends at your favorite spot",
        result: "classic",
        image: "images/bookstore.jpg",
      },
    ],
  },
  {
    question: "Pick a color palette that matches your vibe.",
    answers: [
      { text: "Pink, cream, and soft red", result: "strawberry" },
      { text: "Caramel, chocolate, and warm beige", result: "brownSugar" },
      { text: "Sage green, white, and muted neutrals", result: "matcha" },
      { text: "Lavender, lilac, and dreamy pastels", result: "taro" },
      { text: "Orange, amber, and golden yellow", result: "thai" },
      { text: "Black, white, and timeless neutrals", result: "classic" },
    ],
  },
  {
    question: "What's your role in your friend group?",
    answers: [
      {
        text: "The energetic one who makes every plan exciting",
        result: "thai",
      },
      {
        text: "The comforting friend everyone goes to for advice",
        result: "brownSugar",
      },
      { text: "The quiet observer who notices everything", result: "matcha" },
      { text: "The creative one with the unexpected ideas", result: "taro" },
      {
        text: "The affectionate friend who hypes everyone up",
        result: "strawberry",
      },
      {
        text: "The reliable one who keeps everyone connected",
        result: "classic",
      },
    ],
  },
  {
    question: "How do you handle a stressful day?",
    answers: [
      { text: "Call my friends and talk it all out", result: "strawberry" },
      { text: "Get comfy and watch my favorite show", result: "brownSugar" },
      { text: "Go for a walk and clear my mind", result: "matcha" },
      {
        text: "Listen to music and escape into my imagination",
        result: "taro",
      },
      { text: "Find something fun to do to distract myself", result: "thai" },
      { text: "Make a plan and tackle one thing at a time", result: "classic" },
    ],
  },
  {
    question: "Choose a dessert!",
    answers: [
      { text: "Strawberry shortcake", result: "strawberry" },
      { text: "Crème brûlée", result: "brownSugar" },
      { text: "Matcha cheesecake", result: "matcha" },
      { text: "Ube crinkle cookies", result: "taro" },
      { text: "Mango sticky rice", result: "thai" },
      { text: "Vanilla bean panna cotta", result: "classic" },
    ],
  },
  {
    question: "What's your biggest green flag in a friend?",
    answers: [
      { text: "They make me laugh no matter what", result: "thai" },
      { text: "They make me feel safe and understood", result: "brownSugar" },
      { text: "They respect my space and boundaries", result: "matcha" },
      { text: "They appreciate my weird little quirks", result: "taro" },
      { text: "They always remind me how loved I am", result: "strawberry" },
      { text: "They're honest and always there for me", result: "classic" },
    ],
  },
  {
    question: "Pick a weekend outfit!",
    answers: [
      { text: "A bold top and statement shoes", result: "thai" },
      { text: "An oversized sweater and comfy jeans", result: "brownSugar" },
      {
        text: "A clean, minimalist outfit with neutral colors",
        result: "matcha",
      },
      { text: "A unique outfit with fun accessories", result: "taro" },
      {
        text: "A cute skirt, pink accessories, and sneakers",
        result: "strawberry",
      },
      {
        text: "A timeless tee, denim, and classic sneakers",
        result: "classic",
      },
    ],
  },
  {
    question: "What's your texting style?",
    answers: [
      { text: "Sends cute messages and lots of hearts", result: "strawberry" },
      {
        text: "Replies with thoughtful, reassuring paragraphs",
        result: "brownSugar",
      },
      { text: "Short replies, but always intentional", result: "matcha" },
      { text: "Random thoughts and niche memes at 2 a.m.", result: "taro" },
      { text: "Sends 15 messages in a row when excited", result: "thai" },
      {
        text: "Replies consistently and gets straight to the point",
        result: "classic",
      },
    ],
  },
  {
    question: "Choose a love language.",
    answers: [
      {
        text: "Words of affirmation and sweet compliments",
        result: "strawberry",
      },
      { text: "Physical touch and cozy cuddles", result: "brownSugar" },
      { text: "Quality time without distractions", result: "matcha" },
      { text: "Thoughtful, personalized gifts", result: "taro" },
      { text: "Fun dates and exciting new experiences", result: "thai" },
      {
        text: "Acts of service and being there when it matters",
        result: "classic",
      },
    ],
  },
  {
    question: "Pick your dream vacation!",
    answers: [
      {
        text: "A lively city full of food, music, and nightlife",
        result: "thai",
      },
      {
        text: "A cozy cabin with blankets and a fireplace",
        result: "brownSugar",
      },
      { text: "A peaceful Japanese garden and a tea house", result: "matcha" },
      {
        text: "A whimsical town filled with art shops and hidden gems",
        result: "taro",
      },
      { text: "A sunny beach with colorful sunsets", result: "strawberry" },
      {
        text: "A classic city getaway with sightseeing and good food",
        result: "classic",
      },
    ],
  },
];

// Possible results

const results = {
  strawberry: {
    name: "Strawberry Milk Tea",
    emoji: "🍓",
    description:
      "You're sweet, bubbly, and full of sunshine! You bring positive energy everywhere you go and make people feel special.",
  },
  brownSugar: {
    name: "Brown Sugar Milk Tea",
    emoji: "🤎",
    description:
      "You're effortlessly cool, dependable, and comforting. You have classic taste with a little extra sweetness.",
  },
  matcha: {
    name: "Matcha Milk Tea",
    emoji: "🍵",
    description:
      "You're calm, thoughtful, and quietly iconic. You appreciate the little things and stay true to yourself.",
  },
  taro: {
    name: "Taro Milk Tea",
    emoji: "💜",
    description:
      "You're creative, dreamy, and wonderfully unique. You march to your own beat and have a fun imagination.",
  },
  thai: {
    name: "Thai Milk Tea",
    emoji: "🧡",
    description:
      "You're bold, adventurous, and full of energy! You bring excitement wherever you go, love trying new things, and have a personality that's impossible to ignore.",
  },
  classic: {
    name: "Classic Milk Tea",
    emoji: "🧋",
    description:
      "You're loyal, timeless, and easygoing. You're the friend everyone can count on, and you make people feel comfortable just by being yourself. You prove that sometimes the classics really are the best.",
  },
};

// Track quiz state
let currentQuestion = 0;
let selectedResult = null;
let scores = {};

// HTML elements
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionCount = document.getElementById("question-count");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const nextBtn = document.getElementById("next-btn");

// Start quiz
document.getElementById("start-btn").addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  currentQuestion = 0;
  scores = {};
  showQuestion();
});

// Display current question
function showQuestion() {
  const question = questions[currentQuestion];

  selectedResult = null;
  nextBtn.disabled = true;
  answerOptions.replaceChildren();

  questionCount.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  progressPercent.textContent = `${Math.round(progress)}%`;
  progressBar.style.width = `${progress}%`;

  questionText.textContent = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");

    button.className = "answer-option";
    button.setAttribute("aria-pressed", "false");

    // Answer option text
    const text = document.createElement("span");
    text.textContent = answer.text;
    button.appendChild(text);

    // Answer option image
    const img = document.createElement("img");
    img.src = answer.image;
    img.alt = answer.text;
    button.appendChild(img);

    button.addEventListener("click", () => {
      // Select one answer at a time
      selectedResult = answer.result;

      // Update selected appearance
      document.querySelectorAll(".answer-option").forEach((option) => {
        option.classList.remove("selected");
        option.setAttribute("aria-pressed", "false");
      });

      button.classList.add("selected");
      button.setAttribute("aria-pressed", "true");

      nextBtn.disabled = false;
    });

    answerOptions.appendChild(button);
  });

  nextBtn.textContent =
    currentQuestion === questions.length - 1 ? "Reveal my boba! 🧋" : "Next →";
}

// Move to next question or show results
nextBtn.addEventListener("click", () => {
  if (!selectedResult) return;

  // Add one point to the selected drink
  scores[selectedResult] = (scores[selectedResult] || 0) + 1;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResult();
  }
});

// Calculate and display result
function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  // Find the drink with the highest score
  const winningDrink = Object.keys(results).reduce((best, drink) => {
    return (scores[drink] || 0) > (scores[best] || 0) ? drink : best;
  }, Object.keys(results)[0]);

  const result = results[winningDrink];

  document.getElementById("result-emoji").textContent = result.emoji;
  document.getElementById("result-title").textContent = result.name;
  document.getElementById("result-description").textContent =
    result.description;

  // Complete the progress bar
  progressBar.style.width = "100%";
  progressPercent.textContent = "100%";
}

// Restart quiz
document.getElementById("restart-btn").addEventListener("click", () => {
  currentQuestion = 0;
  scores = {};
  selectedResult = null;

  resultScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
});
