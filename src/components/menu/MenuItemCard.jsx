function MenuItemCard({
  id,
  title,
  description,
  price,
  imageUrl,
  onAddToOrder,
}) {
  return (
    <div className="card h-100 shadow-sm text-center">
      {/* Image */}
      <img
        src={imageUrl}
        className="card-img-top img-fluid"
        alt={title}
        style={{
          objectFit: "contain",
          maxHeight: "220px",
          width: "100%",
        }}
      />

      {/* Card Body */}
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted small">{description}</p>
          <p className="fw-bold text-dark">{price} SEK</p>
        </div>

        {/* Button: Add to Order */}
        <button
          className="btn btn-secondary mt-2 w-100"
          onClick={() => onAddToOrder({ id, title, price })}
        >
          Add to Order
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;
