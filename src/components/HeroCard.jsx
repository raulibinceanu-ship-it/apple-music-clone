export default function HeroCard({ image, alt }) {
  return (
    <div className="mb-3">
      <img src={image} alt={alt} className="img-fluid w-100 rounded" />
    </div>
  );
}
