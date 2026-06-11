import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import rooms from "../data/rooms.json";
import { useInventory } from "../context/InventoryContext";

export default function Room() {
  const { roomPath } = useParams();
  const { inventory, addItem } = useInventory();

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [exitSolved, setExitSolved] = useState(false);

  const room = rooms.find((r) => r.roomPath === roomPath);

  if (!room) {
    navigate("/");
    return null;
  }

  const isExitRoom = room.itemToAdd === null;

  const roomSolved = isExitRoom
    ? exitSolved
    : inventory.some((item) => item.id === room.itemToAdd);

  const showHint = searchParams.get("hint") === "true";

  function handleItemClick(itemId: number) {
    if (roomSolved) return;

    if (itemId === room.itemToSolve) {
      if (isExitRoom) {
        setExitSolved(true);
      } else {
        addItem(room.itemToAdd);
      }
    }
  }

  return (
    <div>
      <h1>{room.roomName}</h1>

      <img
        src={roomSolved ? room.solvedImage : room.unsolvedImage}
        alt={room.roomName}
        width={500}
      />

      <p>
        {roomSolved
          ? room.solvedInstruction
          : room.unsolvedInstruction}
      </p>

      <button
        onClick={() =>
          setSearchParams(
            showHint ? {} : { hint: "true" }
          )
        }
      >
        {showHint ? "Hide Hint" : "Show Hint"}
      </button>

      {showHint && <p>{room.hint}</p>}

      {!roomSolved && (
        <>
          <h3>Use Item</h3>

          {inventory.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
            >
              {item.item}
            </button>
          ))}
        </>
      )}

      {roomSolved && isExitRoom && (
        <button onClick={() => navigate("/victory")}>
          Escape Facility
        </button>
      )}
    </div>
  );
}