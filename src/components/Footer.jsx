import { styled } from "styled-components";
import absColumn from "./FNSubcomponents/absColumn";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialTumbler,
  TiSocialTwitter,
  TiSocialPinterest,
} from "react-icons/ti";

const FooterContainer = styled.div`
  width: 100%; /* Ensure it spans the entire width */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  ul li {
    margin-bottom: 25px; /* Adds spacing between list items */
  }
`;
const FooterColumnContainer = styled.div`
  display: flex; /* Flexbox for horizontal alignment */
  justify-content: space-around; /* Even spacing between columns */
  width: 100%; /* Span full width of the footer */
  overflow: hidden;
`;
const SocialColumn = styled.div`
  display: flex;
  text-align: center;
  align-content: center;
  flex-direction: column;
  /* border: 1px solid black; */
  justify-content: space-between;
  div {
    align-content: flex-end;
  }
`;
const FooterColumn2 = styled.div`
  display: flex;
  text-align: center;
  align-content: center;
  flex-direction: column;
  /* border: 1px solid black; */

  ul {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0; /* Remove default margins */
    padding: 0; /* Remove default padding */
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #595959;
  }
`;
const SocialIcons = styled.div`
  width: 100%;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Adds space between the icons */
  padding-top: 10px;
`;
const FooterColumn3 = styled.div`
  display: flex;
  text-align: center;
  align-content: center;
  flex-direction: column;
  /* border: 1px solid black; */

  ul {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0; /* Remove default margins */
    padding: 0; /* Remove default padding */
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #595959;
  }
`;
const FooterColumn4 = styled.div`
  display: flex;
  text-align: center;
  align-content: center;
  flex-direction: column;
  /* border: 1px solid black; */

  ul {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0; /* Remove default margins */
    padding: 0; /* Remove default padding */
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #595959;
  }
`;
const FooterColumn5 = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding-top: 66px;
  color: #595959;
  /* border: 1px solid black; */

  ul {
    list-style: none;
    margin: 0; /* Remove default margins */
    padding: 0; /* Remove default padding */
  }
  a {
    text-decoration: none;
    color: #595959;
  }
`;
const FooterColumn6 = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding-top: 66px;

  /* border: 1px solid black; */

  ul {
    list-style: none;
    margin: 0; /* Remove default margins */
    padding: 0; /* Remove default padding */
  }
  a {
    text-decoration: none;
    color: #595959;
  }
`;
const FooterLinksContainer = styled.div`
  display: flex; /* Flexbox for horizontal alignment */
  justify-content: space-around; /* Even spacing between columns */
  width: 100%; /* Span full width of the footer */
  padding: 10px 10px; /* Optional padding for spacing */
  font-size: 12px;
`;
const CorpInc = styled.div`
  /* border: 1px solid black; */
  padding-right: 75px;
`;
const LegalLinks = styled.div`
  display: flex;
  align-content: flex-start;
  /* border: 1px solid black; */

  a {
    padding: 5px;
  }
`;
const Region = styled.div`
  /* border: 1px solid black; */

  a {
    padding: 5px;
  }
`;
const FooterLink = styled.a`
  &:hover {
    border-bottom: solid 1px;
  }
  &:hover address {
    border-bottom: solid 1px;
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumnContainer>
        <SocialColumn>
          <h1>deVOL</h1>
          <div>
            <h2>Follow Us 😉</h2>
            <SocialIcons>
              <TiSocialFacebook />
              <TiSocialInstagram />
              <TiSocialYoutube />
              <TiSocialTumbler />
              <TiSocialTwitter />
              <TiSocialPinterest />
            </SocialIcons>
          </div>
        </SocialColumn>
        <absColumn h2Text="Customer Care" />
        <FooterColumn2>
          <h2>About</h2>
          <ul>
            <li>
              <FooterLink href="">Our Story</FooterLink>
            </li>
            <li>
              <FooterLink href="">Media</FooterLink>
            </li>
            <li>
              <FooterLink href="">Press</FooterLink>
            </li>
            <li>
              <FooterLink href="">Careers</FooterLink>
            </li>
            <li>
              <FooterLink href="">Feedback</FooterLink>
            </li>
          </ul>
        </FooterColumn2>

        <FooterColumn3>
          <h2>Support</h2>
          <ul>
            <li>
              <FooterLink href="">Ordering Online</FooterLink>
            </li>
            <li>
              <FooterLink href="">Delivery</FooterLink>
            </li>
            <li>
              <FooterLink href="">Returns</FooterLink>
            </li>
            <li>
              <FooterLink href="">Help & FAQs</FooterLink>
            </li>
            <li>
              <FooterLink href="">Contact</FooterLink>
            </li>
          </ul>
        </FooterColumn3>

        <FooterColumn4>
          <h2>Contact</h2>
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
        </FooterColumn4>

        <FooterColumn5>
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
        </FooterColumn5>

        <FooterColumn6>
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
        </FooterColumn6>
      </FooterColumnContainer>

      <FooterLinksContainer>
        <CorpInc>
          <span>© ABC Inc. 2024</span>
        </CorpInc>

        <LegalLinks>
          <FooterLink>Cookies</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Terms & Conditions</FooterLink>
        </LegalLinks>

        <Region>
          <FooterLink>USA & Canada</FooterLink>
          <FooterLink>Rest of the World</FooterLink>
        </Region>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
