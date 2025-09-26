import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Moon } from "lucide-react";

interface Role {
  id: string;
  name: string;
  nightOrder: number;
  team: "werewolf" | "villager";
}

interface NightSequenceProps {
  roles: Role[];
}

const teamColors = {
  werewolf: "bg-red-600 text-white",
  villager: "bg-blue-600 text-white"
};

export default function NightSequence({ roles }: NightSequenceProps) {
  const sortedRoles = [...roles]
    .filter(role => role.nightOrder >= 0) // Only show roles with night actions
    .sort((a, b) => a.nightOrder - b.nightOrder);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2" data-testid="title-night-sequence">
          <Moon className="h-5 w-5 text-primary" />
          Night Phase Sequence
        </CardTitle>
      </CardHeader>
      <CardContent>
        {sortedRoles.length === 0 ? (
          <p className="text-muted-foreground text-center py-8" data-testid="text-no-roles">
            No roles added yet. Add some roles to see the night sequence.
          </p>
        ) : (
          <div className="space-y-3">
            {sortedRoles.map((role, index) => (
              <div 
                key={role.id}
                className="flex items-center gap-3 p-3 rounded-md bg-muted/30 hover-elevate"
                data-testid={`sequence-item-${role.id}`}
              >
                <Badge 
                  variant="outline" 
                  className="font-mono text-sm min-w-12 justify-center"
                  data-testid={`sequence-order-${role.id}`}
                >
                  #{role.nightOrder}
                </Badge>
                <span 
                  className="font-medium flex-1"
                  data-testid={`sequence-name-${role.id}`}
                >
                  {role.name}
                </span>
                <Badge 
                  variant="secondary" 
                  className={`text-xs capitalize ${teamColors[role.team]}`}
                  data-testid={`sequence-team-${role.id}`}
                >
                  {role.team}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}