import styled from "styled-components";
import LargeCard from "./Cards/LargeCard";
import SmallCard from "./Cards/SmallCard";
import shakerKitchen1 from "./assets/showroom/kitchens1.jpg";
import shakerKitchen2 from "./assets/showroom/kitchens2.jpg";
import newarrivals1 from "./assets/showroom/newarrivals1.jpg";
import newarrivals2 from "./assets/showroom/newarrivals2.jpg";
import tapssinks1 from "./assets/showroom/tapssinks1.jpg";
import tapssinks2 from "./assets/showroom/tapssinks2.jpg";
import knobshandles1 from "./assets/showroom/knobshandles1.jpg";
import knobshandles2 from "./assets/showroom/knobshandles2.jpg";
import lightingelectrical1 from "./assets/showroom/lightingelectrical1.jpg";
import lightingelectrical2 from "./assets/showroom/lightingelectrical2.jpg";
import hangersbrackets1 from "./assets/showroom/hangersbrackets1.jpg";
import hangersbrackets2 from "./assets/showroom/hangersbrackets2.jpg";
import furniture1 from "./assets/showroom/furniture1.jpg";
import furniture2 from "./assets/showroom/furniture2.jpg";
import bathrooms1 from "./assets/showroom/bathrooms1.jpg";
import bathrooms2 from "./assets/showroom/bathrooms2.jpg";
import homeware1 from "./assets/showroom/homeware1.jpg";
import homeware2 from "./assets/showroom/homeware2.jpg";
import handmadetiles1 from "./assets/showroom/handmadetiles1.jpg";
import handmadetiles2 from "./assets/showroom/handmadetiles2.jpg";
import vintageantiques1 from "./assets/showroom/vintageantiques1.jpg";

const ShopContainer = styled.div`
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
const Shop = () => {
  return (
    <ShopContainer>
      <SmallCardContainer>
        <SmallCard
          img1={newarrivals1}
          img2={newarrivals2}
          h1Text="New Arrivals"
          pText="Stay up to date with our latest designs, all available to order online."
        />
        <SmallCard
          img1={tapssinks1}
          img2={tapssinks2}
          h1Text="Taps & Sinks"
          pText="A sink and a good set of taps are so important, they need to look just right and stand up to years of use."
        />
        <SmallCard
          img1={knobshandles1}
          img2={knobshandles2}
          h1Text="Knobs & Handles"
          pText="Every aspect of a kitchen, right down to the knobs and handles, should be equally well designed and made."
        />
      </SmallCardContainer>
      <LargeCardContainer>
        <LargeCard
          img1={lightingelectrical1}
          img2={lightingelectrical2}
          h1Text="Lighting & Electrical"
          pText="Delicately handcrafted lights and beautiful switches and sockets make the best combination."
        />
        <LargeCard
          img1={hangersbrackets1}
          img2={hangersbrackets2}
          h1Text="Hangers & Brackets"
          pText="These beautiful brackets, rails and hooks are all hand-aged to a perfect finish in our metal studio."
        />
      </LargeCardContainer>
      <LargeCardContainer>
        <LargeCard
          img1={furniture1}
          img2={furniture2}
          h1Text="Furniture"
          pText="Simple stools, chairs, tables, and more, all designed and made by us."
        />
        <LargeCard
          img1={bathrooms1}
          img2={bathrooms2}
          h1Text="Bathrooms"
          pText="A small collection of deVOL designs to help you create a wonderfully bohemian bathroom."
        />
      </LargeCardContainer>
      <SmallCardContainer>
        <SmallCard
          img1={homeware1}
          img2={homeware2}
          h1Text="Homeware"
          pText="From deliciously scented candles to vintage-inspired tableware, these little touches make all the difference."
        />
        <SmallCard
          img1={handmadetiles1}
          img2={handmadetiles2}
          h1Text="Handmade Tiles"
          pText="Beautifully handmade tiles in a variety of finishes, each made to order in our ceramics studio in Leicestershire."
        />
        <SmallCard
          img1={vintageantiques1}
          h1Text="Vintage Furniture & Antique Pieces"
          pText="Beautiful antique furniture and gifts, available to purchase from our showrooms."
        />
      </SmallCardContainer>
    </ShopContainer>
  );
};

export default Shop;
