import { createNote } from "@/actions/note";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Note } from "@prisma/client";

export default async function NewNote() {
  async function newNote(formData: FormData) {
    "use server";

    const rawData: Omit<Note, "id"> = {
      title: formData.get("title")?.toString() || "",
      content: formData.get("content")?.toString() || "",
    };
    await createNote(rawData);
  }

  return (
    <div>
      <h3 className="text-xl">New Note</h3>
      <form action={newNote} className="flex flex-col gap-4">
        <Input name="title" placeholder="Title" />
        <Textarea name="content" placeholder="Content" />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}
