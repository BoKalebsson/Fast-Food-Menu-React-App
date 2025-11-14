function OrderItemRow({ id, title, price, quantity, onIncrease, onDecrease }) {
  const totalRowPrice = quantity * price;

  return (
    <div className="list-group-item">
      <div className="row align-items-center text-center">
        {/* Title */}
        <div className="col-4 text-start fw-medium">{title}</div>

        {/* Controls */}
        <div className="col-4 d-flex justify-content-center align-items-center">
          <button
            className="btn btn-outline-secondary btn-sm me-2 qty-btn"
            onClick={() => onDecrease(id)}
          >
            <i className="bi bi-dash-lg"></i>
          </button>

          <span className="fw-semibold mx-2">{quantity}</span>

          <button
            className="btn btn-outline-secondary btn-sm ms-2 qty-btn"
            onClick={() => onIncrease(id)}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>

        {/* Price */}
        <div className="col-4 text-end">
          <span>
            {quantity} x {price}
          </span>
          <span className="fw-bold ms-2">= {totalRowPrice} SEK</span>
        </div>
      </div>
    </div>
  );
}

export default OrderItemRow;
