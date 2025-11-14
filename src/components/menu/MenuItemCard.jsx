function MenuItemCard({
  id,
  title,
  description,
  price,
  imageUrl,
  onAddToOrder,
}) {
  return (
    <div
      className="card h-100 shadow-sm text-center mx-auto"
      style={{ maxWidth: "300px" }}
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="card-img-top img-fluid"
        style={{ maxHeight: "130px", objectFit: "contain" }}
      />

      <div className="card-body p-2 d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fs-6 mb-1">{title}</h5>
          <p className="card-text small mb-1">{description}</p>
          <p className="fw-bold mb-1">{price} SEK</p>
        </div>

        <button
          className="btn btn-secondary btn-sm w-100 mt-2"
          onClick={() => onAddToOrder({ id, title, price })}
        >
          Add to Order
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;
