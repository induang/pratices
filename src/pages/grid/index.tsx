import "./index.css";

export default function Grid() {
  return (
    <div className="my-grid">
      <div className="my-grid-item header">header</div>
      <div className="my-grid-item left-sidebar">left sidebar</div>
      <div className="my-grid-item content">content</div>
      <div className="my-grid-item right-sidebar">right sidebar</div>
      <div className="my-grid-item footer">footer</div>
    </div>
  );
}
