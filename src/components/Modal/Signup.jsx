import { styled } from "styled-components";
import React, { useState } from "react";
import SignupModal from "./SignupModal";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUp = () => {
  const [openModal, setOpenModal] = useState(false);

  return openModal ? (
    <SignupModal onClose={() => setOpenModal(false)} />
  ) : (
    <SignUpContainer>
      <h1>LET'S KEEP IN TOUCH</h1>
      <p>
        Only ever beautiful, useful and ispirational things, sent straight to
        you.
      </p>
      <button name="Sign me up" onClick={() => setOpenModal(true)}>
        Sign me up
      </button>
    </SignUpContainer>
  );
};

export default SignUp;
