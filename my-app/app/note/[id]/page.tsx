import { createNote, getNote, updateNote } from "@/actions/note";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Note } from "@prisma/client";

export default async function EditNote({ params }: { params: { id: number } }) {
  const idAsNumber = Number(params.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid app id");

  const data = await getNote(idAsNumber);

  async function editNote(formData: FormData) {
    "use server";

    const rawData: Omit<Note, "id"> = {
      title: formData.get("title")?.toString() || "",
      content: formData.get("content")?.toString() || "",
    };
    await updateNote(idAsNumber, rawData);
  }

  return (
    <div>
      <h3 className="text-xl">New Note</h3>
      <form action={editNote} className="flex flex-col gap-4">
        <Input
          name="title"
          placeholder="Title"
          defaultValue={data?.title || ""}
        />
        <Textarea
          name="content"
          placeholder="Content"
          defaultValue={data?.content || ""}
        />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}
