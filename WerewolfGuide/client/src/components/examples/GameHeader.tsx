import { useState } from "react";
import GameHeader from '../GameHeader';

export default function GameHeaderExample() {
  const [gamePhase, setGamePhase] = useState<"day" | "night">("night");

  return (
    <div>
      <GameHeader
        gamePhase={gamePhase}
        roleCount={5}
        onPhaseToggle={() => setGamePhase(gamePhase === "day" ? "night" : "day")}
        onResetGame={() => console.log("Reset game")}
        onSettings={() => console.log("Open settings")}
      />
    </div>
  );
}