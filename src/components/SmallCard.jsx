function SmallCard({ image, title, subtitle }) {
  return (
    <div className="text-light" style={{ width: "120px" }}>
      <img src={image} alt={title} className="img-fluid rounded mb-2" />
      <p className="m-0 fw-bold" style={{ fontSize: "0.9rem" }}>
        {title}
      </p>
      <p className="m-0 text-secondary" style={{ fontSize: "0.8rem" }}>
        {subtitle}
      </p>
    </div>
  );
}

export default SmallCard;
