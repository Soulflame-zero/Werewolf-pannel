import RoleCard from '../RoleCard';

export default function RoleCardExample() {
  return (
    <div className="p-4 space-y-4">
      <RoleCard
        id="werewolf-1"
        name="Werewolf"
        nightOrder={1}
        team="werewolf"
        onRemove={(id) => console.log(`Remove: ${id}`)}
        onToggleChange={(id, index, enabled) => console.log(`Toggle: ${id}-${index}-${enabled}`)}
      />
      <RoleCard
        id="seer-1" 
        name="Seer"
        nightOrder={2}
        team="villager"
        onRemove={(id) => console.log(`Remove: ${id}`)}
        onToggleChange={(id, index, enabled) => console.log(`Toggle: ${id}-${index}-${enabled}`)}
      />
      <RoleCard
        id="witch-1"
        name="Witch"
        nightOrder={3}
        team="villager"
        toggles={[
          { name: "Healing Potion", enabled: true },
          { name: "Poison Potion", enabled: false }
        ]}
        onRemove={(id) => console.log(`Remove: ${id}`)}
        onToggleChange={(id, index, enabled) => console.log(`Toggle: ${id}-${index}-${enabled}`)}
      />
    </div>
  );
}