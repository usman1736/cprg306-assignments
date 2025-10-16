export default function Item({ name, quantity, category }) {
  return (
    <div className="flex border-1 border-white mb-2 mr-170 ml-170 p-2 rounded-sm">
      <ul>
        <li>{name}</li>
        <li className="capitalize">Quantity: {quantity}</li>
        <li className="capitalize">Category: {category}</li>
      </ul>
    </div>
  );
}
