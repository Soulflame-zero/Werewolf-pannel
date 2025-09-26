import NightSequence from '../NightSequence';

export default function NightSequenceExample() {
  const mockRoles = [
    {
      id: "werewolf-1",
      name: "Werewolf",
      nightOrder: 1,
      team: "werewolf" as const
    },
    {
      id: "seer-1", 
      name: "Seer",
      nightOrder: 2,
      team: "villager" as const
    },
    {
      id: "witch-1",
      name: "Witch",
      nightOrder: 3,
      team: "villager" as const
    },
    {
      id: "hunter-1",
      name: "Hunter", 
      nightOrder: 5,
      team: "villager" as const
    },
    {
      id: "cupid-1",
      name: "Cupid",
      nightOrder: 0,
      team: "villager" as const
    }
  ];

  return (
    <div className="p-4">
      <NightSequence roles={mockRoles} />
    </div>
  );
}