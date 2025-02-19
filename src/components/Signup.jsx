import { styled } from "styled-components";
import { useState } from "react";
import SignupModal from "./Modal/SignupModal";
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
    background-color: #ffffff;
    width: 10%; /* Centers and limits width */
    padding: 12px 24px; /*Adds inner padding to the button*/
    border-radius: 12px;
    border: 1px solid #595959;
    color: #595959;
    cursor: pointer; /* Makes it clear the element is clickable */
    transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #27333f;
      color: #ffffff;
      transform: scale(1.1); /* Enlarges the button slightly */
    }
  }
`;

const SignUp = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <SignUpContainer>
        <h1>LET&apos;S KEEP IN TOUCH</h1>
        <p>
          Only ever beautiful, useful, and inspirational things sent straight to
          you.
        </p>
        <button name="Sign me up" onClick={() => setOpenModal(true)}>
          Sign me up
        </button>
      </SignUpContainer>
      {openModal && <SignupModal onClose={() => setOpenModal(false)} />}
    </>
  );
};

export default SignUp;
