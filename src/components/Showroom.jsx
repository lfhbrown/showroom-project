import styled from "styled-components";
import LargeCard from "./Cards/LargeCard";
import SmallCard from "./Cards/SmallCard";
import shakerKitchen1 from "./assets/showroom/kitchens1.jpg";
import shakerKitchen2 from "./assets/showroom/kitchens2.jpg";
import englishKitchen1 from "./assets/showroom/kitchens3.jpg";
import englishKitchen2 from "./assets/showroom/kitchens4.jpg";
import heirloom1 from "./assets/showroom/heirloom1.jpg";
import heirloom2 from "./assets/showroom/heirloom2.jpg";
import sebastian1 from "./assets/showroom/sebastian1.jpg";
import sebastian2 from "./assets/showroom/sebastian2.jpg";
import haberdasher1 from "./assets/showroom/haberdasher1.jpg";
import haberdasher2 from "./assets/showroom/haberdasher2.jpg";

const ShowRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LargeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* Center the items */
  gap: 20px; /* Add space between the items */
  margin: 20px;
`;
const SmallCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* Center the items */
  gap: 20px; /* Add space between the items */
  margin: 20px;
`;

const Showroom = () => {
  return (
    <ShowRoomContainer>
      <LargeCardContainer>
        <LargeCard
          img1={shakerKitchen1}
          img2={shakerKitchen2}
          h1Text="The Real Shaker Kitchen"
          spanText="$20,000-$60,000"
          pText="Beautifully understated and economical furniture, inspired by authentic Shaker carpentry."
        />
        <LargeCard
          img1={englishKitchen1}
          img2={englishKitchen2}
          h1Text="The Classic English Kitchen"
          spanText="$40,000-$100,000"
          pText="A truly bespoke kitchen made to the highest quality and without compromise."
        />
      </LargeCardContainer>
      <SmallCardContainer>
        <SmallCard
          img1={heirloom1}
          img2={heirloom2}
          h1Text="The Heirloom Collection"
          pText="Authentic designs reminiscent of when things were ‘made to last a lifetime'."
        />
        <SmallCard
          img1={sebastian1}
          img2={sebastian2}
          h1Text="The Sebastian Cox Kitchen by deVOL"
          spanText="$25,000-$75,000"
          pText="A culmination of good taste, modern innovation, traditional techniques and true inspiration."
        />
        <SmallCard
          img1={haberdasher1}
          img2={haberdasher2}
          h1Text="The Haberdasher's Kitchen"
          spanText="$20,000-$60,000"
          pText="Beautifully understated and economical furniture, inspired by authentic Shaker carpentry."
        />
      </SmallCardContainer>
    </ShowRoomContainer>
  );
};

export default Showroom;
