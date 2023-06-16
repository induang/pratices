import { useEffect, useState } from "react";

export default () => {
  console.log("app update..");
  const [roomId, setRoomId] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoomId(e.target.value);
  };

  return (
    <div className="w-48 ml-4">
      <div>
        <select value={roomId} onChange={handleChange}>
          <option value="travel" label="travel" />
          <option value="food" label="food" />
          <option value="music" label="music" />
        </select>
      </div>
      <div className="mt-4">
        <ChatRoom roomId={roomId} />
      </div>
    </div>
  );
};

function ChatRoom({ roomId }: { roomId: string }) {
  console.log("Chat room update..");
  useEffect(() => {
    console.log("✅ connect start...");
    return () => {
      console.log("❌ connect close...");
    };
  }, [roomId]);

  return (
    <div>
      <h4>Hello, Welcome to {roomId}</h4>
    </div>
  );
}
