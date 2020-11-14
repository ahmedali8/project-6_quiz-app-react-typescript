import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 20px;
  }

  @media only screen and (max-width: 720px) {
    width: 100%;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 14px !important;
    font-weight: 'bold';
    width: 100%;
    height: 50px;
    margin: 4px 0;

    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)' // green
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)' // red
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'}; // blue

    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
