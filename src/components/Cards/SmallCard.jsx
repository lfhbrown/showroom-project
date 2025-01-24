const SmallCard = ({ img, h1Text, spanText, pText }) => {
  return (
    <div>
      <img src={img} alt={h1Text} />
      <div>
        <h1>{h1Text}</h1>
        <span>{spanText}</span>
        <br />
        <p>{pText}</p>
      </div>
    </div>
  );
};

export default SmallCard;
