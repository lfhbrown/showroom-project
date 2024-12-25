import { styled } from "styled-components";

const FooterContainer = styled.div`
  width: 100%; /* Ensure it spans the entire width */
  display: flex;
  flex-direction: column;
  align-items: center;

  ul li {
    margin-bottom: 25px; /* Adds spacing between list items */
  }
`;
const FooterColumnContainer = styled.div`
  display: flex; /* Flexbox for horizontal alignment */
  justify-content: space-around; /* Even spacing between columns */
  width: 100%; /* Span full width of the footer */
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
  }
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
  }
`;
const FooterColumn5 = styled.div`
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
  }
`;
const FooterLinksContainer = styled.div`
  display: flex; /* Flexbox for horizontal alignment */
  justify-content: space-around; /* Even spacing between columns */
  width: 100%; /* Span full width of the footer */
  padding: 10px 10px; /* Optional padding for spacing */
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
const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumnContainer>
        <FooterColumn2>
          <h2>About</h2>
          <ul>
            <li>
              <a href="">Our Story</a>
            </li>
            <li>
              <a href="">Media</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Feedback</a>
            </li>
          </ul>
          <div>
            <h2>Social Images</h2>
          </div>
        </FooterColumn2>

        <FooterColumn3>
          <h2>Support</h2>
          <ul>
            <li>
              <a href="">Ordering Online</a>
            </li>
            <li>
              <a href="">Delivery</a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Help & FAQs</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </FooterColumn3>

        <FooterColumn4>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="">
                <address>Location </address>
              </a>
            </li>
            <li>
              <address>Phone</address>
            </li>
            <li>
              <address>Email</address>
            </li>
            <li>
              <a href="">
                <address>Location </address>
              </a>
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
              <a href="">
                <address>Location </address>
              </a>
            </li>
            <li>
              <address>Phone</address>
            </li>
            <li>
              <address>Email</address>
            </li>
            <li>
              <a href="">
                <address>Location </address>
              </a>
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
              <a href="">
                <address>Location </address>
              </a>
            </li>
            <li>
              <address>Phone</address>
            </li>
            <li>
              <address>Email</address>
            </li>
            <li>
              <a href="">
                <address>Location </address>
              </a>
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
          <a>Cookies</a>
          <a>Privacy</a>
          <a>Terms & Conditions</a>
        </LegalLinks>

        <Region>
          <a>USA & Canada</a>
          <a>Rest of the World</a>
        </Region>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
