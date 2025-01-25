// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import styled from "styled-components";
import LargeCard from "./Cards/LargeCard";
// import SmallCard from "./Cards/SmallCard";
import shakerKitchen1 from "./assets/showroom/kitchens1.jpg";
import shakerKitchen2 from "./assets/showroom/kitchens2.jpg";

const LargeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* Center the items */
  gap: 20px; /* Add space between the items */
  margin: 20px;
`;

const Showroom = () => {
  return (
    <div>
      <LargeCardContainer>
        <LargeCard
          img1={shakerKitchen1}
          img2={shakerKitchen2}
          h1Text="The Real Shaker Kitchen"
          spanText="$20,000-$60,000"
          pText="Beautifully understated and economical furniture, inspired by authentic Shaker carpentry."
        />
        <LargeCard
          img1={shakerKitchen1}
          img2={shakerKitchen2}
          h1Text="The Real Shaker Kitchen"
          spanText="$20,000-$60,000"
          pText="Beautifully understated and economical furniture, inspired by authentic Shaker carpentry."
        />
      </LargeCardContainer>
    </div>
  );
};

export default Showroom;
