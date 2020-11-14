import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  background: #ebfeff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin: 10px;

  p {
    font-size: 18px;
  }

  @media only screen and (max-width: 720px) {
    width: 100%;
  }
`;

type SelectedAnswerWrapperProps = {
  correct: boolean;
};

export const SelectedAnswerWrapper = styled.div<SelectedAnswerWrapperProps>`
  background: ${({ correct }) =>
    correct
      ? 'linear-gradient(90deg, #56FFA4, #59BC86)' // green
      : 'linear-gradient(90deg, #FF5656, #C16868)'}; // red

  .selectedAnswer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin: 4px 0;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }

  @media only screen and (max-width: 720px) {
    .selectedAnswer {
      font-size: 14px;
    }
  }
`;
