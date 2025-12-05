export default function Sidebar({ className = "" }) {
  return (
    <div className={`sidebar bg-dark text-light p-3 ${className}`}>
      <h3 className="mb-4">Music</h3>
      <p>Home</p>
      <p>Novità</p>
      <p>Radio</p>
    </div>
  );
}
