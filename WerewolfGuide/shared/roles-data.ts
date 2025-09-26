// Roles database - Edit this file to add/modify roles
// Format: { team: "werewolf" | "villager", order: number, name: string, toggles?: string[] }

export interface RoleToggle {
  name: string;
  enabled: boolean;
}

export interface RoleData {
  team: "werewolf" | "villager";
  order: number;
  name: string;
  toggles?: string[]; // Optional array of toggle names
}

export const rolesDatabase: RoleData[] = [
  // Werewolves (typically go first in night order)
  { team: "werewolf", order: 4, name: "Weerwolf" },
  
  // Villagers and special roles (in night order)
  { team: "villager", order: 1, name: "Cupido", toggles: ["love arrow"] },
  { team: "villager", order: 2, name: "ziener" },
  { team: "villager", order: 5, name: "heks", toggles: ["healing  Potion", "Poison Potion"] },
  { team: "villager", order: 3, name: "dief"},
  { team: "villager", order: -1, name: "jager" },
  { team: "villager", order: -1, name: "stiekeme meisje" },
  { team: "villager", order: -1, name: "Villager" },
  
  
  // -1 indicates no night action
  
  // Add your custom roles below:
  // { team: "villager", order: 6, name: "Your Custom Role", toggles: ["Toggle 1", "Toggle 2"] },
  // { team: "werewolf", order: 1, name: "Alpha Werewolf" },
];