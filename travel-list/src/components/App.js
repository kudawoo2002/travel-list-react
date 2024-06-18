import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackagingList from "./PackagingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handChangeItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confrim = window.confirm(
      "Are you sure you want to delete all items!"
    );

    if (confrim) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDelItem}
        onToggleItem={handChangeItem}
        onClearList={handleClearList}
      />

      <Stats items={items} />
    </div>
  );
}
