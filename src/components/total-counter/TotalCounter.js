import "./TotalCounter.css";

function TotalCounter({ total }) {
  return (
    <section className="total-counter">
      Total: <span className="total-count">{total}</span>
    </section>
  );
}

export default TotalCounter;
