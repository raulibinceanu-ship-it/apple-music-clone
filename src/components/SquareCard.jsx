export default function SquareCard({ image, title, subtitle }) {
  return (
    <div style={{ width: "180px" }}>
      <img src={image} alt={title} className="img-fluid rounded" />
      <p className="text-light mt-2 mb-0 fw-bold">{title}</p>
      <p className="text-secondary">{subtitle}</p>
    </div>
  );
}
