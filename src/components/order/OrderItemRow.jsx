function OrderItemRow({ id, title, price, quantity, onIncrease, onDecrease }) {
  const totalRowPrice = quantity * price;

  return (
    <div className="list-group-item orderitem-row">
      <div className="row align-items-center text-center">
        {/* Left: Product name */}
        <div className="col-4 text-start fw-medium orderitem-title">
          {title}
        </div>

        {/* Middle: Quantity controls */}
        <div className="col-4 d-flex justify-content-center align-items-center orderitem-controls">
          <button
            className="btn btn-outline-secondary btn-sm me-2"
            onClick={() => onDecrease(id)}
          >
            <i className="bi bi-dash-lg"></i>
          </button>

          <span className="fw-semibold mx-2 orderitem-quantity">
            {quantity}
          </span>

          <button
            className="btn btn-outline-secondary btn-sm ms-2"
            onClick={() => onIncrease(id)}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>

        {/* Right: Price */}
        <div className="col-4 text-end orderitem-price">
          <span className="orderitem-math">
            {quantity} x {price}
          </span>
          <span className="fw-bold ms-2 orderitem-total">
            = {totalRowPrice} SEK
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderItemRow;
