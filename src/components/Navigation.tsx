import { Link } from "react-router-dom";
import rooms from "../data/rooms.json";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>

      {rooms.map((room) => (
        <Link
          key={room.id}
          to={`/room/${room.roomPath}`}
          style={{ marginLeft: "10px" }}
        >
          {room.roomName}
        </Link>
      ))}
    </nav>
  );
}