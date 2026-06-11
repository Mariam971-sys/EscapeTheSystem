import { useInventory } from "../context/InventoryContext";

export default function Inventory() {
  const { inventory } = useInventory();

  return (
    <div>
      <h2>Inventory</h2>

      {inventory.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.item} width={50} />
          <p>{item.item}</p>
        </div>
      ))}
    </div>
  );
}