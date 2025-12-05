export default function HeroCard({ image, alt }) {
  return (
    <div className="hero-card mb-4">
      <img src={image} alt={alt} className="hero-img" />
    </div>
  );
}
