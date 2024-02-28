import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App({onSearchSubmit}) {
  const [items, setItems] = useState([]);
  const [reset, setReset] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then(res => res.json())
    .then(items => setItems(items))
  },[reset])

  function handleSearchSubmit(search) {
    if (search.length > 0) {
      const tempItems = items.filter(item => item.description.toUpperCase().includes(search.toUpperCase()));
      setItems(tempItems);
    } else {
      const updateReset = reset + 1;
      setReset(updateReset)
    }
  }

  function handleDeletedItem(deletedItem) {
  const updatedItems = items.filter(item => item.id !== deletedItem.id)
  setItems(updatedItems);
  }

  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer items={items} onDelete={handleDeletedItem}/>
    </div>
  );
}

export default App;
