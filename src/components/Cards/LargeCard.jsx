// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  position: relative;
  height: 1075px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  /* border: 1px solid #000000; */
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 900px;
  object-fit: cover;
  opacity: ${(props) => (props.visible ? 1 : 0)}; /* Control visibility */
  transition: opacity 0.5s ease-in-out; /* Smooth transition effect */
`;
const Content = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-bottom: 12px;
  padding-right: 24px;
`;
const LargeCard = ({ img1, img2, h1Text, spanText, pText }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <CardContainer>
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
