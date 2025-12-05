function SquareCard({ image, title, subtitle }) {
  return (
    <div style={{ width: "110px" }}>
      <img src={image} alt={title} className="img-fluid rounded mb-2" />
      <p className="m-0 fw-bold" style={{ fontSize: "0.85rem" }}>
        {title}
      </p>
      <p className="m-0 text-secondary" style={{ fontSize: "0.75rem" }}>
        {subtitle}
      </p>
    </div>
  );
}

export default SquareCard;
