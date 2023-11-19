const quizData = [
    {
      question: "Qual é a capital do Brasil?",
      options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
      answer: "Brasília"
    },
    {
      question: "Quem pintou a Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    // Adicione mais perguntas conforme necessário
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const feedbackElement = document.getElementById('feedback');
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
  
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('option-btn');
      button.addEventListener('click', selectAnswer);
      optionsElement.appendChild(button);
    });
  }
  
  function selectAnswer(e) {
    const selectedOption = e.target.innerText;
    const currentQuizData = quizData[currentQuestion];
  
    if (selectedOption === currentQuizData.answer) {
      score++;
      feedbackElement.innerText = "Resposta correta!";
    } else {
      feedbackElement.innerText = "Resposta incorreta. A resposta correta é: " + currentQuizData.answer;
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    questionElement.innerText = `Você acertou ${score} de ${quizData.length} perguntas.`;
    optionsElement.innerHTML = '';
    feedbackElement.innerText = '';
  
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Recomeçar';
    restartButton.addEventListener('click', restartQuiz);
    optionsElement.appendChild(restartButton);
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  }
  
  loadQuestion();
  