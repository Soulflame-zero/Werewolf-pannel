import RoleLibrary from '../RoleLibrary';

export default function RoleLibraryExample() {
  const handleAddToGame = (role: any) => {
    console.log("Added to game:", role);
  };

  return (
    <div className="p-4">
      <RoleLibrary onAddToGame={handleAddToGame} />
    </div>
  );
}