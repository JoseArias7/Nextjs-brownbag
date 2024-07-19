import { getNotes } from "@/actions/note";
import { NoteComponent } from "@/components/custom/note-component";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const data = await getNotes();
  return (
    <main className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl">Notes list</h3>
        <Button asChild>
          <Link href="/note">New Note</Link>
        </Button>
      </div>
      <div className="flex gap-4 flex-wrap">
        {data.map((x) => (
          <NoteComponent data={x} key={`note-id-${x.id}`} />
        ))}
      </div>
    </main>
  );
}
