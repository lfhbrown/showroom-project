import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  position: relative;
  height: 800px;
  width: 520px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  overflow: hidden; /* Prevent content from overflowing */
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 12px;
  margin-top: 10px; /* Ensures spacing below the image */
`;

const SmallCard = ({ img1, img2, h1Text, spanText, pText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasSecondImage = !!img2; // Check if second image exists

  return (
    <CardContainer>
      <ImgWrapper>
        {hasSecondImage ? (
          <>
            <Img
              src={img1}
              alt={h1Text}
              visible={!isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <Img
              src={img2}
              alt={h1Text}
              visible={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </>
        ) : (
          <Img src={img1} alt={h1Text} visible={true} />
        )}
      </ImgWrapper>
      <Content>
        <h2>{h1Text}</h2>
        <span>{spanText}</span>
        <p>{pText}</p>
      </Content>
    </CardContainer>
  );
};

SmallCard.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string, // Now optional
  h1Text: PropTypes.string.isRequired,
  spanText: PropTypes.string.isRequired,
  pText: PropTypes.string.isRequired,
};

export default SmallCard;
