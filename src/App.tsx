import React, { MouseEventHandler, useState } from 'react';
import { fetchQuizQuestions } from './API';
// Import Components
import QuestionCard from './components/QuestionCard';
// Import Types
import { Difficulty } from './API';

const TOTAL_QUESTIONS: number = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = () => {};

  const checkAnswer = (e: MouseEventHandler<HTMLButtonElement>) => {};

  const newQuestion = () => {};

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score...</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answer={questions[number].answer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={newQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
