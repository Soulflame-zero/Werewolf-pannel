import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThemeToggle from "@/components/ThemeToggle";
import GameHeader from "@/components/GameHeader";
import Home from "@/pages/Home";
import Notes from "@/pages/Notes";
import { useState } from "react";

function App() {
  const [gamePhase, setGamePhase] = useState<"day" | "night">("night");
  const [roleCount] = useState(5); // todo: remove mock functionality
  const [notes, setNotes] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col h-screen">
          <GameHeader
            gamePhase={gamePhase}
            roleCount={roleCount}
            onPhaseToggle={() => setGamePhase(gamePhase === "day" ? "night" : "day")}
            onResetGame={() => console.log("Reset game")}
            onSettings={() => console.log("Open settings")}
          />
          <header className="flex items-center justify-between p-4 border-b bg-card">
            <div></div>
            <ThemeToggle />
          </header>
          <main className="flex-1 overflow-hidden">
            <Tabs defaultValue="game" className="h-full flex flex-col">
              <TabsList className="mx-6 mt-6">
                <TabsTrigger value="game" data-testid="tab-game">Game</TabsTrigger>
                <TabsTrigger value="notes" data-testid="tab-notes">Notes</TabsTrigger>
              </TabsList>
              <TabsContent value="game" className="flex-1 overflow-auto p-6 mt-0">
                <Home />
              </TabsContent>
              <TabsContent value="notes" className="flex-1 overflow-hidden p-6 mt-0">
                <Notes notes={notes} setNotes={setNotes} />
              </TabsContent>
            </Tabs>
          </main>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
