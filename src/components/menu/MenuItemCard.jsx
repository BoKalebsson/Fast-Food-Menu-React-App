function MenuItemCard({
  id,
  title,
  description,
  price,
  imageUrl,
  onAddToOrder,
}) {
  return (
    <div className="card h-100 shadow-sm text-center menuitem-card">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="card-img-top img-fluid menuitem-image"
      />

      {/* Card Body */}
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title menuitem-title">{title}</h5>
          <p className="card-text small menuitem-description">{description}</p>
          <p className="fw-bold menuitem-price">{price} SEK</p>
        </div>

        {/* Button: Add to Order */}
        <button
          className="btn btn-secondary mt-2 w-100 menuitem-button"
          onClick={() => onAddToOrder({ id, title, price })}
        >
          Add to Order
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;
