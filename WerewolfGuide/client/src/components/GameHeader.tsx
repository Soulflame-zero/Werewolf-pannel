import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, Settings, RotateCcw } from "lucide-react";

interface GameHeaderProps {
  gamePhase: "day" | "night";
  roleCount: number;
  onPhaseToggle: () => void;
  onResetGame: () => void;
  onSettings: () => void;
}

export default function GameHeader({ 
  gamePhase, 
  roleCount, 
  onPhaseToggle, 
  onResetGame, 
  onSettings 
}: GameHeaderProps) {
  const handlePhaseToggle = () => {
    console.log(`Switching to ${gamePhase === "day" ? "night" : "day"} phase`);
    onPhaseToggle();
  };

  const handleReset = () => {
    console.log("Resetting game");
    onResetGame();
  };

  const handleSettings = () => {
    console.log("Opening settings");
    onSettings();
  };

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Moon className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-semibold" data-testid="title-app">
                Werewolves Manager
              </h1>
            </div>
            <Badge 
              variant="outline" 
              className="font-mono"
              data-testid="badge-role-count"
            >
              {roleCount} roles
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={gamePhase === "night" ? "default" : "outline"}
              size="sm"
              onClick={handlePhaseToggle}
              className="gap-2"
              data-testid="button-phase-toggle"
            >
              {gamePhase === "night" ? (
                <>
                  <Moon className="h-4 w-4" />
                  Night
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4" />
                  Day
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              data-testid="button-reset"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleSettings}
              data-testid="button-settings"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}