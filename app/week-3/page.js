import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main>
      <header>
        <h1>Shopping List</h1>
      </header>
      <div>
        <ItemList />
      </div>
    </main>
  );
}
