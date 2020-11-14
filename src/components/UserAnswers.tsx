import React from 'react';
// Types
import { AnswerObject } from '../App';
// Styles
import { Wrapper, SelectedAnswerWrapper } from './UserAnswers.styles';

const UserAnswers: React.FC<AnswerObject> = ({
  question,
  answer,
  correct,
  correctAnswer,
}) => {
  return (
    <Wrapper>
      <p>
        <strong>Question:</strong> {question}
      </p>
      <SelectedAnswerWrapper correct={correct}>
        <p className="selectedAnswer">
          Selected Answer:<strong>{answer}</strong>
        </p>
      </SelectedAnswerWrapper>
      <p className="">
        <strong>Correct Answer:</strong> {correctAnswer}
      </p>
    </Wrapper>
  );
};

export default UserAnswers;
