const questions = [
  { question: "What is Ahmed's favorite color?", answer: "Black", hint: "I like two colors, but one is above the other." },
  { question: "Does Ahmed Like Milo or Komal's Bro?", answer: "Komal", hint: "There is only one person who lives in Ahmed's Heart." },
  { question: "Does Ahmed really think he is a Bothersome?", answer: "Yes", hint: "Is he?" },
  { question: "Will Komal find someone better than Ahmed?", answer: "Inshallah", hint: "The answer is Inshallah." },
  { question: "Ahmed or Komal's BIL?", answer: "BIL", hint: "I'm evil aren't I." },
  { question: "Does Komal hate Ahmed's poem?", answer: "Yes", hint: "SAY THE TRUTH!!!!!." },
  { question: "Komal will let Ahmed stay awake the whole night whenever he wants?", answer: "Yes", hint: "🥺 🥺 PLEASEEE KOMALLL🥺 🥺" },
  { question: "What Surah if recited after every Fardh prayer will guarantee Paradise?", answer: "Ikhlas", hint: "If you don't remember it's on the Road to Jannah PDF I sent you." },
  { question: "What day & time did Ahmed text Komal?", answer: "08/26/2024 1:35pm", hint: "Format: mm/dd/yyyy hh:mm. Example: 01/01/2000 12:55pm" },
  { question: "Who Stole Ahmed's Heart?", answer: "My Komal", hint: "ANEESA. (add 'My' then the answer)" },
  { question: "Who was Ahmed's inspiration when he was growing up?", answer: "Imran Khan", hint: "I talked about him on our first day; it was because of him I got into this religion, Alhumdulillah." },
  { question: "What Surah made Ahmed cry during Tahajjud prayer when he was praying for Komal and her family?", answer: "Ad Duha", hint: "You should know this right?" },
  { question: "Why is Komal in Ahmed's heart?", answer: "Komal is key to any heart", hint: "Go ask Milo." }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;

document.getElementById('winButton').addEventListener('click', function() {
  document.getElementById('questionContainer').classList.remove('hidden');
  displayQuestion();
});

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').textContent = currentQuestion.question;
  document.getElementById('answerInput').value = '';
  document.getElementById('hintMessage').classList.add('hidden');
}

document.getElementById('submitAnswer').addEventListener('click', function() {
  const userAnswer = document.getElementById('answerInput').value.toLowerCase();
  const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    correctAnswersCount++;
    currentQuestionIndex++;
    
    if (currentQuestionIndex === questions.length) {
      document.getElementById('resultMessage').textContent = "As promised, Here's your secret message: I just want to say, Thank you. For Every moment with you feels like a beautiful chapter in my story I never want to end. You’re not just in my thoughts; you’ve woven yourself into my dreams, and every prayer I make. I am grateful for every second we’ve shared—every laugh that made my heart race, every conversation that brought us closer, and every moment when just being together was enough to remind me of the peace that Allah places in my hearts. You are absolutely, astoundingly gorgeous and that's the least interesting thing about you! I hope that in your heart, I can be even a fraction as special as you are to me. Because, Komal, spending time with you is not just a privilege—it’s a trust from Allah that I hold dearly, and I will always strive to make you feel as cherished as you make me feel. I pray for your success for both this world and the next. May Allah always grant you what's best for you. I hold you in a very special place in my heart and I... hmm let's leave the better half for part 2. May Allah keep you steadfast, and may He bless you with countless more moments, memories, and beautiful chapters.";
      document.getElementById('submitAnswer').disabled = true;
    } else {
      displayQuestion();
    }
  } else {
    if (currentQuestionIndex === questions.length - 1) {
      currentQuestionIndex = 0;
      correctAnswersCount = 0;
      document.getElementById('resultMessage').textContent = "You got the last question wrong! Restarting from the beginning...";
      displayQuestion();
    } else {
      document.getElementById('resultMessage').textContent = "Try again!";
    }
  }

  document.getElementById('resultMessage').classList.remove('hidden');
});

document.getElementById('hintButton').addEventListener('click', function() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('hintMessage').textContent = currentQuestion.hint;
  document.getElementById('hintMessage').classList.remove('hidden');
});
