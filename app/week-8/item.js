export default function Item(prop) {
  return (
    <div className="flex border-1 border-white mb-2 mr-170 ml-170 p-2 rounded-sm md:mr-40 md:ml-80">
      <ul>
        <li>{prop.name}</li>
        <li className="capitalize">Quantity: {prop.quantity}</li>
        <li className="capitalize">Category: {prop.category}</li>
      </ul>
    </div>
  );
}
