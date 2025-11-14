import OrderItemRow from "./OrderItemRow";

function OrderList({ orderItems, onIncrease, onDecrease }) {
  const totalOrderPrice = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="orderlist-region p-3" >
      <div className="container" style={{ maxWidth: "500px" }}>
        <h5 className="mb-2">Your Order</h5>

        <div className="list-group mb-3">
          {orderItems.length === 0 ? (
            <p className="text-muted">Your order is empty.</p>
          ) : (
            <>
              <h6 className="mb-2">Order Details:</h6>

              {orderItems.map((item) => (
                <OrderItemRow
                  key={item.id}
                  {...item}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                />
              ))}
            </>
          )}
        </div>

        {orderItems.length > 0 && (
          <div className="d-flex justify-content-end pt-2">
            <strong className="me-2">Total:</strong>
            <span>{totalOrderPrice} SEK</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderList;
