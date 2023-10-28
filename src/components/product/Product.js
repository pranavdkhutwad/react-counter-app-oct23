import "./Product.css";

function Product({ product, onIncrement, onDecrement, onDelete }) {
  return (
    <section className="product">
      <div className="badge">
        <span className="count">{product.count || "zero"}</span>
      </div>
      <img className="product-img" src={product.imgUrl} alt={product.name} />
      <button
        onClick={() => onDecrement(product.id)}
        className="btn btn-danger"
      >
        -
      </button>
      <button
        onClick={() => onIncrement(product.id)}
        className="btn btn-success"
      >
        +
      </button>
      <button onClick={() => onDelete(product.id)} className="btn btn-danger">
        Delete
      </button>
    </section>
  );
}

export default Product;
