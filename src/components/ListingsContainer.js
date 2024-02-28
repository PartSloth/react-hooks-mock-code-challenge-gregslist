import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, onDelete}) {

  return (
    <main>
      <ul className="cards">
        {items.map(item =>
          <ListingCard 
          key={item.id} 
          item={item}
          onDelete={onDelete}
          />
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
