import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, BookOpen } from "lucide-react";
import { rolesDatabase, type RoleData } from "@shared/roles-data";

interface RoleLibraryProps {
  onAddToGame: (role: RoleData & { id: string }) => void;
}

const teamColors = {
  werewolf: "bg-red-600 text-white",
  villager: "bg-blue-600 text-white"
};

export default function RoleLibrary({ onAddToGame }: RoleLibraryProps) {
  const handleAddRole = (role: RoleData, index: number) => {
    console.log(`Adding ${role.name} to game`);
    onAddToGame({
      ...role,
      id: `${role.name.toLowerCase().replace(/\s+/g, '-')}-${index}`
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2" data-testid="title-role-library">
          <BookOpen className="h-5 w-5 text-primary" />
          Available Roles
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {rolesDatabase.map((role, index) => (
            <div 
              key={`${role.name}-${index}`}
              className="flex items-start gap-3 p-3 rounded-md border hover-elevate"
              data-testid={`library-role-${role.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {role.order >= 0 && (
                    <Badge 
                      variant="outline" 
                      className="font-mono text-xs"
                      data-testid={`library-order-${role.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      #{role.order}
                    </Badge>
                  )}
                  <Badge 
                    variant="secondary" 
                    className={`text-xs capitalize ${teamColors[role.team]}`}
                    data-testid={`library-team-${role.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {role.team}
                  </Badge>
                </div>
                <h4 
                  className="font-medium"
                  data-testid={`library-name-${role.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {role.name}
                </h4>
              </div>
              <Button
                size="sm"
                onClick={() => handleAddRole(role, index)}
                data-testid={`button-add-${role.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Plus className="h-3 w-3 mr-1" />
                Add
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}