export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to you packaging list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentItems = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentItems === 100
          ? "You are ready to go"
          : `You have ${numItems} item on your list,and you already packed ${numPacked}
          (${percentItems}%)`}
      </em>
    </footer>
  );
}
