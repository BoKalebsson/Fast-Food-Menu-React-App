function OrderItemRow({ id, title, price, quantity, onIncrease }) {
  return (
    <div className="list-group-item">
      <div className="row align-items-center text-center">
        {/* Left: Product name */}
        <div className="col-4 text-start fw-medium">{title}</div>

        {/* Middle: Quantity controls */}
        <div className="col-4 d-flex justify-content-center align-items-center">
          <button className="btn btn-outline-secondary btn-sm me-2">
            <i className="bi bi-dash-lg"></i>
          </button>
          <span className="fw-semibold mx-2">{quantity}</span>
          <button
            className="btn btn-outline-secondary btn-sm ms-2"
            onClick={() => onIncrease(id)}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>

        {/* Right: Price */}
        <div className="col-4 fw-bold text-end">{price} SEK</div>
      </div>
    </div>
  );
}

export default OrderItemRow;
