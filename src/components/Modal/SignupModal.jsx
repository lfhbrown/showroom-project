import { styled } from "styled-components";
import PropTypes from "prop-types";
import logo from "../assets/modal/deVOL-image-modal.jpg";

const Overlay = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: rgba(0, 0, 0, 0.5); /*Semi-transparent overlay */
  position: fixed; /* Ensures the overlay stays fixed to the viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: fadeIn 0.5s ease-in-out;
  z-index: 9999; /* Ensures the overlay is above other elements */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const ModalContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 16px; /* Rounds corners */

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
const PrivacyPolicy = styled.p`
  padding-top: 10px;
  font-size: 10px;
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
    padding-bottom: 10px;
  }
  button {
    width: 50%; /* Centers and limits width */
    align-self: center; /* Centers each input/button */
    padding: 12px 24px; /*Adds inner padding to the button*/
    border-radius: 12px;
    font-size: 16px;
    border: 1px solid #595959;
    color: #595959;
    background-color: #ffffff;
    cursor: pointer; /* Makes it clear the element is clickable */
    &:hover {
      background-color: #27333f;
      color: #ffffff;
    }
  }
`;
const SignupModal = ({ onClose }) => {
  const handleOverlayClick = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the Overlay
  };
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={handleOverlayClick}>
        <img src={logo} alt="" />
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
            <PrivacyPolicy>
              By signing up you agree to our <a href="">Privacy Policy</a>. You
              can unsubscribe at any time.
            </PrivacyPolicy>
          </EmailSumbit>
        </ModalRight>
      </ModalContainer>
    </Overlay>
  );
};

SignupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
//Defining types for component props improves reusability of your components by validating received data.
// It can warn other developers if they make a mistake while reusing the component with improper data type.

export default SignupModal;
