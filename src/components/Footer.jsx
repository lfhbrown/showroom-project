import { styled } from "styled-components";
import ASDiv from "./FNSubcomponents/ASDiv";
import ContactDiv from "./FNSubcomponents/ContactDiv";
import AdditionalContactDiv from "./FNSubcomponents/AdditionalContactDiv";
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
  justify-content: space-between;
`;
const SocialIcons = styled.div`
  width: 100%;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Adds space between the icons */
  padding-top: 10px;
`;
const FooterLinksContainer = styled.div`
  display: flex; /* Flexbox for horizontal alignment */
  justify-content: space-around; /* Even spacing between columns */
  width: 100%; /* Span full width of the footer */
  padding: 10px 10px; /* Optional padding for spacing */
  font-size: 12px;
`;
const CorpInc = styled.div`
  padding-right: 75px;
`;
const LegalLinks = styled.div`
  display: flex;
  align-content: flex-start;
  a {
    padding: 5px;
  }
`;
const Region = styled.div`
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
        <ASDiv
          h2Text="About"
          li1="Our Story"
          li2="Media"
          li3="Press"
          li4="Careers"
          li5="Feedback"
        />
        <ASDiv
          h2Text="Support"
          li1="Ordering Online"
          li2="Delivery"
          li3="Returns"
          li4="Help & FAQs"
          li5="Contact"
        />
        <ContactDiv
          h2Text="Contact"
          li1="Location"
          li2="Phone"
          li3="Email"
          li4="Location"
          li5="Phone"
          li6="Email"
        />

        <AdditionalContactDiv />
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
