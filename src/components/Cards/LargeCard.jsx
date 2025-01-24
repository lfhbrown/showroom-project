import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div``;
const Content = styled.div``;

const LargeCard = ({ img1, img2, h1Text, spanText, pText }) => {
  return (
    <CardContainer>
      <img src={img1} alt={h1Text} />
      <img src={img2} alt={h1Text} />
      <Content>
        <h1>{h1Text}</h1>
        <span>{spanText}</span>
        <br />
        <p>{pText}</p>
      </Content>
    </CardContainer>
  );
};

LargeCard.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  h1Text: PropTypes.string.isRequired,
  spanText: PropTypes.string.isRequired,
  pText: PropTypes.string.isRequired,
};
export default LargeCard;
