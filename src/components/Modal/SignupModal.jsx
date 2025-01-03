import { styled } from "styled-components";
import abc from "../assets/abc.jpg";
import { fadeInOut } from "../GlobalStyles";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /*Semi-transparent overlay */
  position: fixed; /* Ensures the overlay stays fixed to the viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ModalContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #5283bbcf;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 8px; /* Rounds corners */

  img {
    width: 600px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
const ModalRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; /* Aligns children vertically */
  align-items: center; /* Centers horizontally */
  justify-content: center; /* Centers vertically */
  padding: 24px; /* Adds padding around the content */
`;
const Close = styled.p`
  align-self: flex-end; /* Push the Close element to the right */
  margin: 0 16px 16px 0; /* Adds spacing from edges */
  cursor: pointer; /* Makes it clear the element is clickable */
  font-size: 24px;
`;
const EmailSumbit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 24px;
  font-size: 18px;
  p {
    padding-bottom: 10px;
  }
`;
const NameEmailForm = styled.form`
  display: flex;
  flex-direction: column; /* Stacks inputs and buttons vertically */
  gap: 16px; /* Adds space between inputs and buttons */
  width: 100%; /* Ensures full width for child elements */
  input {
    width: 50%; /* Centers and limits width */
    align-self: center; /* Centers each input/button */
    padding: 12px 24px; /*Adds inner padding to the button*/
  }
  button {
    width: 50%; /* Centers and limits width */
    align-self: center; /* Centers each input/button */
    padding: 12px 24px; /*Adds inner padding to the button*/
    cursor: pointer; /* Makes it clear the element is clickable */
  }
`;
const SignupModal = ({ onClose }) => {
  const handleOverlayClick = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the Overlay
  };
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={handleOverlayClick}>
        <img src={abc} alt="" />
        <ModalRight>
          <Close onClick={onClose}>✖</Close>
          <EmailSumbit>
            <h1>Letters from ABC Corp.</h1>
            <p>
              Come up with the solutions to your business problems with a little
              help from us. If you’d like, we’ll write to you every now and then
              with general inspiration and ideas, and exclusive looks at our new
              products and services. Just pop your details below and leave the
              rest to us.
            </p>
            <NameEmailForm>
              <input type="text" placeholder="First Name"></input>
              <input type="text" placeholder="Last Name"></input>
              <input type="email" placeholder="Email"></input>
              <button>Submit</button>
            </NameEmailForm>
            <p>
              By signing up you agree to our <a href="">Privacy Policy</a>. You
              can unsubscribe at any time.
            </p>
          </EmailSumbit>
        </ModalRight>
      </ModalContainer>
    </Overlay>
  );
};

export default SignupModal;
