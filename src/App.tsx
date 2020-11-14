import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
import UserAnswers from './components/UserAnswers';
// Types
import { QuestionState, Difficulty } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

import loader from './images/loading.gif';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS: number = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct value
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save answer in array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const newQuestion = () => {
    // Move on to the next question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>TYPESCRIPT QUIZ APP</h1>
        {!gameOver ? <p className="score">Score: {score}</p> : null}

        {loading && <img className="loader" src={loader} alt="loader" />}

        {!loading && !gameOver && userAnswers.length !== TOTAL_QUESTIONS && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {(!loading && gameOver) ||
          (userAnswers.length === TOTAL_QUESTIONS &&
            userAnswers.map((userAnswer, index) => (
              <UserAnswers
                key={index}
                question={userAnswer.question}
                answer={userAnswer.answer}
                correct={userAnswer.correct}
                correctAnswer={userAnswer.correctAnswer}
              />
            )))}

        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            {userAnswers.length ? 'START AGAIN' : 'START'}
          </button>
        ) : null}

        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={newQuestion}>
            NEX QUESTION
          </button>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
