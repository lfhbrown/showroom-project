import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  position: relative;
  height: 1075px;
  width: 800px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  overflow: hidden; /* Prevents overflow issues */
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 900px; /* Ensures consistent image height */
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
  margin-top: 10px; /* Ensures 10px gap below the image */
`;

const LargeCard = ({ img1, img2, h1Text, spanText, pText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainer>
      <ImgWrapper>
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
      </ImgWrapper>
      <Content>
        <h1>{h1Text}</h1>
        <span>{spanText}</span>
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
