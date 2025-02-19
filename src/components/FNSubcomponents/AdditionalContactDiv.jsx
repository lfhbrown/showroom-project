import styled from "styled-components";

const AdditionalContactDivContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding-top: 66px;
  color: #595959;
  ul {
    list-style: none;
    padding: 0; /* Remove default padding */
  }
  a {
    text-decoration: none;
    color: #595959;
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
const AdditionalContactDiv = () => {
  return (
    <AdditionalContactDivContainer>
      <ul>
        <li>
          <FooterLink href="">Location</FooterLink>
        </li>
        <li>
          <address>Phone</address>
        </li>
        <li>
          <address>Email</address>
        </li>
        <li>
          <FooterLink href="">Location</FooterLink>
        </li>
        <li>
          <address>Phone</address>
        </li>
        <li>
          <address>Email</address>
        </li>
      </ul>
    </AdditionalContactDivContainer>
  );
};

export default AdditionalContactDiv;
