import { styled } from "styled-components";
import React, { useState } from "react";
import SignupModal from "./SignupModal";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    cursor: pointer; /* Makes it clear the element is clickable */
  }
`;
// const FadeIn = styled.div`
//   animation: fadeIn 3s ease-in;
//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
// `;
const SignUp = () => {
  const [openModal, closeModal] = useState(false);

  return openModal ? (
    <SignupModal onClose={() => closeModal(false)} />
  ) : (
    <SignUpContainer>
      <h1>LET'S KEEP IN TOUCH</h1>
      <p>
        Only ever beautiful, useful and ispirational things, sent straight to
        you.
      </p>
      <button name="Sign me up" onClick={() => closeModal(true)}>
        Sign me up
      </button>
    </SignUpContainer>
  );
};

export default SignUp;
