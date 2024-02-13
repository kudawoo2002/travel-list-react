const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  return (
    <Form className="add-form">
      <h3>What you need for your trip</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            num
          </option>
        ))}
      </select>
      <input type="text" name="itemName" placeholder="Item...." />
      <button>Add</button>
    </Form>
  );
}

function PackagingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item itemobj={item} />
        ))}
      </ul>
    </div>
  );
}
function Item({ itemobj }) {
  return (
    <li>
      <span style={itemobj.packed ? { textDecoration: "line-through" } : {}}>
        {itemobj.quantity} {itemobj.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X item on your list,and you already packed x (x%)</em>
    </footer>
  );
}
