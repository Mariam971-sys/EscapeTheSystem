import { createContext, useContext, useState } from "react";
import items from "../data/items.json";

type Item = {
  id: number;
  item: string;
  description: string;
  image: string;
};

type InventoryContextType = {
  inventory: Item[];
  addItem: (itemId: number | null) => void;
};

const InventoryContext = createContext<InventoryContextType | null>(null);

export function InventoryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const startItem = items.find((item) => item.id === 1)!;

  const [inventory, setInventory] = useState<Item[]>([startItem]);

  function addItem(itemId: number | null) {
    if (!itemId) return;

    const item = items.find((i) => i.id === itemId);

    if (
      item &&
      !inventory.some((inventoryItem) => inventoryItem.id === itemId)
    ) {
      setInventory((prev) => [...prev, item]);
    }
  }

  return (
    <InventoryContext.Provider value={{ inventory, addItem }}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const context = useContext(InventoryContext);

  if (!context) {
    throw new Error("InventoryContext missing");
  }

  return context;
}