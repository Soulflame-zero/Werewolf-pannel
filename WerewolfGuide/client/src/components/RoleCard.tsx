import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

interface RoleToggle {
  name: string;
  enabled: boolean;
}

interface RoleCardProps {
  id: string;
  name: string;
  nightOrder: number;
  team: "werewolf" | "villager";
  toggles?: RoleToggle[];
  onRemove: (id: string) => void;
  onToggleChange: (id: string, toggleIndex: number, enabled: boolean) => void;
}

const teamColors = {
  werewolf: "bg-red-600 text-white",
  villager: "bg-blue-600 text-white"
};

export default function RoleCard({ 
  id, 
  name, 
  nightOrder, 
  team, 
  toggles, 
  onRemove,
  onToggleChange 
}: RoleCardProps) {
  const handleRemove = () => {
    console.log(`Remove role: ${name}`);
    onRemove(id);
  };

  const handleToggleChange = (toggleIndex: number, enabled: boolean) => {
    console.log(`Toggle ${toggleIndex} for ${name}: ${enabled}`);
    onToggleChange(id, toggleIndex, enabled);
  };

  return (
    <Card className="hover-elevate">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              {nightOrder >= 0 && (
                <Badge 
                  variant="outline" 
                  className="font-mono text-sm"
                  data-testid={`badge-night-order-${id}`}
                >
                  #{nightOrder}
                </Badge>
              )}
              <Badge 
                variant="secondary" 
                className={`text-xs capitalize ${teamColors[team]}`}
                data-testid={`badge-team-${id}`}
              >
                {team}
              </Badge>
            </div>
            <h3 
              className="font-semibold text-lg mb-1 truncate" 
              data-testid={`text-role-name-${id}`}
            >
              {name}
            </h3>
            {toggles && toggles.length > 0 && (
              <div className="space-y-2 mt-3">
                {toggles.map((toggle, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox
                      id={`toggle-${id}-${index}`}
                      checked={toggle.enabled}
                      onCheckedChange={(checked) => handleToggleChange(index, !!checked)}
                      data-testid={`toggle-${id}-${index}`}
                    />
                    <label 
                      htmlFor={`toggle-${id}-${index}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      data-testid={`toggle-label-${id}-${index}`}
                    >
                      {toggle.name}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <Button
              size="icon"
              variant="ghost"
              onClick={handleRemove}
              data-testid={`button-remove-${id}`}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}