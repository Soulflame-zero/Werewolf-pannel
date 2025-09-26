import { Textarea } from "@/components/ui/textarea";

interface NotesProps {
  notes: string;
  setNotes: (notes: string) => void;
}

export default function Notes({ notes, setNotes }: NotesProps) {
  return (
    <div className="h-full">
      <Textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your game notes here..."
        className="h-full resize-none border-0 focus-visible:ring-0 text-base"
        data-testid="textarea-notes"
      />
    </div>
  );
}