import styled from "styled-components";
import PropTypes from "prop-types";

const ContactDivContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0;
    list-style: none;
  }
`;
const FooterLink = styled.a`
  text-decoration: none;
  color: #595959;
  &:hover {
    border-bottom: solid 1px;
  }
  &:hover address {
    border-bottom: solid 1px;
  }
`;
const ContactDiv = ({ h2Text, li1, li2, li3, li4, li5, li6 }) => {
  return (
    <ContactDivContainer>
      <h2>{h2Text}</h2>
      <ul>
        <li>
          <FooterLink href="">{li1}</FooterLink>
        </li>
        <li>
          <FooterLink href="">{li2}</FooterLink>
        </li>
        <li>
          <FooterLink href="">{li3}</FooterLink>
        </li>
        <li>
          <FooterLink href="">{li4}</FooterLink>
        </li>
        <li>
          <FooterLink href="">{li5}</FooterLink>
        </li>
        <li>
          <FooterLink href="">{li6}</FooterLink>
        </li>
      </ul>
    </ContactDivContainer>
  );
};

ContactDiv.propTypes = {
  h2Text: PropTypes.string,
  li1: PropTypes.string,
  li2: PropTypes.string,
  li3: PropTypes.string,
  li4: PropTypes.string,
  li5: PropTypes.string,
  li6: PropTypes.string,
};

export default ContactDiv;
