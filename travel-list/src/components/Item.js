export default function Item({ itemobj, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemobj.packed}
        onChange={() => {
          onToggleItem(itemobj.id);
        }}
      />
      <span style={itemobj.packed ? { textDecoration: "line-through" } : {}}>
        {itemobj.quantity} {itemobj.description}
      </span>
      <button onClick={() => onDeleteItem(itemobj.id)}>❌</button>
    </li>
  );
}
