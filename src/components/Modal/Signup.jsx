import { styled } from "styled-components";
import { useState } from "react";
import SignupModal from "./SignupModal";
import "@fontsource/eb-garamond";

const SignUpContainer = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    background-color: #27333f;
    color: white;
    width: 10%; /* Centers and limits width */
    padding: 12px 24px; /*Adds inner padding to the button*/
    border-radius: 16px;
    cursor: pointer; /* Makes it clear the element is clickable */
  }
`;

const SignUp = () => {
  const [openModal, closeModal] = useState(false);

  return openModal ? (
    <SignupModal onClose={() => closeModal(false)} />
  ) : (
    <SignUpContainer>
      <h1>LET&apos;S KEEP IN TOUCH</h1>
      <p>
        Only ever beautiful, useful, and ispirational things sent straight to
        you.
      </p>
      <button name="Sign me up" onClick={() => closeModal(true)}>
        Sign me up
      </button>
    </SignUpContainer>
  );
};

export default SignUp;
