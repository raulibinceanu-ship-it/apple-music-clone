function HeroCard({ image, alt }) {
  return (
    <div className="mb-3">
      <img src={image} alt={alt} className="img-fluid rounded" />
    </div>
  );
}

export default HeroCard;
