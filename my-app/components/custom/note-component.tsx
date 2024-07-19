import { Note } from "@prisma/client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { deleteNote } from "@/actions/note";
import Link from "next/link";

interface NoteProps {
  data: Note;
}

export function NoteComponent(props: NoteProps) {
  const { content, title, id } = props.data;

  const deleteThisNote = deleteNote.bind(null, id);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{content}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/note/${id}`}>Edit</Link>
        </Button>
        <form action={deleteThisNote}>
          <Button variant="destructive">Delete</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
