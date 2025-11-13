import OrderItemRow from "./OrderItemRow";

function OrderList({ orderItems }) {
  return (
    <div className="bg-light border-top fixed-bottom p-3">
      <div className="container">
        {/* Title */}
        <h5 className="mb-3">Your Order</h5>

        {/* Order items */}
        <div className="list-group mb-3">
          {orderItems.length === 0 ? (
            <p className="text-muted">Your order is empty.</p>
          ) : (
            orderItems.map((item) => <OrderItemRow key={item.id} {...item} />)
          )}
        </div>

        {/* Total row (placeholder) */}
        {orderItems.length > 0 && (
          <div className="d-flex justify-content-end pt-2">
            <strong className="me-2">Total:</strong>
            <span>— SEK</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderList;
