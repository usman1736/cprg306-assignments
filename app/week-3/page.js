import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main>
      <header className="flex ml-50 ">
        <h1 className="text-2xl font-bold my-3">Shopping List</h1>
      </header>
      <div>
        <ItemList />
      </div>
    </main>
  );
}
