import { styled } from "styled-components";
import { useState, useEffect } from "react";
import GalleryImage1 from "./assets/gallery/Gallery 1.jpg";
import GalleryImage2 from "./assets/gallery/Gallery 2.jpg";
import GalleryImage3 from "./assets/gallery/Gallery 3.jpg";
import GalleryImage4 from "./assets/gallery/Gallery 4.jpg";
import GalleryImage5 from "./assets/gallery/Gallery 5.jpg";
import GalleryImage6 from "./assets/gallery/Gallery 6.jpg";
import GalleryImage7 from "./assets/gallery/Gallery 7.jpg";

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1000px; /* Ensures the container has a fixed height */
  z-index: 1; /* Lower z-index for the gallery container */
  position: relative;
  overflow: hidden; /* Hides the overflow content */
`;
const GalleryImage = styled.div`
  width: 100%; /* Makes the image stretch to the full width of the screen */
  height: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1; /* Lower z-index for the gallery container */
  img {
    width: 100%; /* Makes the image stretch to the full width of the screen */
    height: 100%;
    object-fit: cover; /* Ensures the image scales properly without distortion */
    z-index: 1; /* Ensures image stays behind interactive elements */
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const ArrowRight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 100px;
  height: 100px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth animation */

  &:before {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    border-right: 8px solid white;
    border-top: 8px solid white;
    transform: rotate(45deg);
  }

  &:hover {
    transform: translateY(-50%) scale(1.2); /* Slightly enlarge on hover */
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.5); /* Enhance shadow on hover */
  }
`;
const ArrowLeft = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 100px;
  height: 100px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:before {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    border-left: 8px solid white;
    border-top: 8px solid white;
    transform: rotate(-45deg);
  }

  &:hover {
    transform: translateY(-50%) scale(1.2); /* Slightly enlarge on hover */
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.5); /* Enhance shadow on hover */
  }
`;

const GalleryButtons = styled.div`
  display: flex;
  justify-content: space-between; /* Spaces the buttons evenly */
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2; /* Ensures buttons are above other elements */
`;
const GalleryRowButton = styled.div`
  position: absolute;
  top: 85%;
  bottom: 10px;
  left: 25px;
  z-index: 2; /* Ensures buttons are above the image */
  gap: 10px; /* Adds space between the circles */
  display: flex;

  button {
    width: 15px;
    height: 15px;
    border-radius: 50%; /* Makes the buttons circular */
    border: 1px solid black; /* Optional: Adds a border to the circles */
    background-color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: 1px solid black; /* Adds a border to the circles */
  }
  button:hover {
    background-color: #ffffff; /* Changes color on hover */
  }

  button.active {
    background-color: #27333f; /* Highlights the active circle */
  }
`;

const images = [
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
  GalleryImage6,
  GalleryImage7,
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 10000); // Changes image every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <GalleryContainer>
      <GalleryImage>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              transform:
                currentImageIndex === index ? "scale(1)" : "scale(1.05)",
            }}
          />
        ))}
        <GalleryButtons>
          <ArrowLeft onClick={showPreviousImage}></ArrowLeft>
          <ArrowRight onClick={showNextImage}></ArrowRight>
          <GalleryRowButton>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => selectImage(index)}
                style={{
                  backgroundColor:
                    currentImageIndex === index ? "gray" : "white",
                }}
              ></button>
            ))}
          </GalleryRowButton>
        </GalleryButtons>
      </GalleryImage>
    </GalleryContainer>
  );
};

export default Gallery;
