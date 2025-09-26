import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import RoleCard from "@/components/RoleCard";
import NightSequence from "@/components/NightSequence";
import RoleLibrary from "@/components/RoleLibrary";
import { type RoleData } from "@shared/roles-data";

interface RoleToggle {
  name: string;
  enabled: boolean;
}

interface Role {
  id: string;
  name: string;
  nightOrder: number;
  team: "werewolf" | "villager";
  toggles?: RoleToggle[];
}

export default function Home() {
  const [roles, setRoles] = useState<Role[]>([
    // todo: remove mock functionality - start with some example roles
    {
      id: "werewolf-1",
      name: "Werewolf",
      nightOrder: 1,
      team: "werewolf"
    },
    {
      id: "seer-1", 
      name: "Seer",
      nightOrder: 2,
      team: "villager"
    },
    {
      id: "witch-1",
      name: "Witch",
      nightOrder: 3,
      team: "villager",
      toggles: [
        { name: "Healing Potion", enabled: true },
        { name: "Poison Potion", enabled: true }
      ]
    }
  ]);

  const [isActiveRolesOpen, setIsActiveRolesOpen] = useState(true);

  const handleAddRole = (newRole: RoleData & { id: string }) => {
    const role: Role = {
      id: newRole.id,
      name: newRole.name,
      nightOrder: newRole.order,
      team: newRole.team,
      toggles: newRole.toggles?.map(toggleName => ({
        name: toggleName,
        enabled: true
      }))
    };
    setRoles(prev => [...prev, role]);
    console.log("Added role:", role);
  };

  const handleToggleChange = (roleId: string, toggleIndex: number, enabled: boolean) => {
    setRoles(prev => prev.map(role => {
      if (role.id === roleId && role.toggles) {
        const updatedToggles = [...role.toggles];
        updatedToggles[toggleIndex] = { ...updatedToggles[toggleIndex], enabled };
        return { ...role, toggles: updatedToggles };
      }
      return role;
    }));
  };

  const handleRemoveRole = (id: string) => {
    setRoles(prev => prev.filter(role => role.id !== id));
    console.log("Removed role:", id);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2" data-testid="title-home">Game Setup</h1>
        <p className="text-muted-foreground" data-testid="text-subtitle">
          Manage your Werewolves game roles and night sequence
        </p>
      </div>

      <Tabs defaultValue="current-game" className="space-y-6">
        <TabsList data-testid="tabs-main">
          <TabsTrigger value="current-game" data-testid="tab-current-game">Current Game</TabsTrigger>
          <TabsTrigger value="role-library" data-testid="tab-role-library">Available Roles</TabsTrigger>
        </TabsList>

        <TabsContent value="current-game" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Collapsible open={isActiveRolesOpen} onOpenChange={setIsActiveRolesOpen}>
              <div className="space-y-4">
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="flex items-center justify-between w-full p-0 h-auto hover:bg-transparent"
                    data-testid="button-toggle-active-roles"
                  >
                    <h2 className="text-xl font-semibold" data-testid="title-active-roles">
                      Active Roles ({roles.length})
                    </h2>
                    {isActiveRolesOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="space-y-3">
                  {roles.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground" data-testid="text-no-active-roles">
                      <p>No roles added yet.</p>
                      <p className="text-sm">Add roles from the available roles tab.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {roles.map((role) => (
                        <RoleCard
                          key={role.id}
                          id={role.id}
                          name={role.name}
                          nightOrder={role.nightOrder}
                          team={role.team}
                          toggles={role.toggles}
                          onRemove={handleRemoveRole}
                          onToggleChange={handleToggleChange}
                        />
                      ))}
                    </div>
                  )}
                </CollapsibleContent>
              </div>
            </Collapsible>

            <div>
              <NightSequence roles={roles} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="role-library">
          <RoleLibrary onAddToGame={handleAddRole} />
        </TabsContent>
      </Tabs>
    </div>
  );
}