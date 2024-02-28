import React, {useState} from "react";

function ListingCard({ item, onDelete }) {
  const { description, image, location } = item;
  const [favorite, setFavorite] = useState(false);
  
  function handleStarClick(event) {
    setFavorite(favorite => favorite = !favorite);
  }

  function handleTrashClick(event) {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onDelete(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleStarClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleStarClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleTrashClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
