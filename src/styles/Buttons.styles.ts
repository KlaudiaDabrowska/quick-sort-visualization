import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  color: ${({ theme }) => theme.colors.buttonColor};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
  margin-right: 0.75rem;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;

  &:disabled {
    color: grey;
    cursor: auto;
  }

  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 540px) {
    display: block;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.7rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
`;
