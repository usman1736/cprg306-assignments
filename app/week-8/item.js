"use client";

export default function Item(prop) {
  const { name, quantity, category, onSelect } = prop;

  function handleClick() {
    if (onSelect) {
      onSelect({ name, quantity, category });
    }
  }

  return (
    <div
      className="flex border-1 border-white mb-2 mr-170 ml-170 p-2 rounded-sm md:mr-40 md:ml-80 hover:bg-gray-50 cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      <ul className="w-full">
        <li className="font-medium">{name}</li>
        <li className="capitalize text-gray-700">Quantity: {quantity}</li>
        <li className="capitalize text-gray-700">Category: {category}</li>
      </ul>
    </div>
  );
}
