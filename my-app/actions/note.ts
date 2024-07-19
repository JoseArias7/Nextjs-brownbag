"use server";

import prisma from "@/prisma/db";
import { Note } from "@prisma/client";
import { redirect } from "next/navigation";

export async function getNotes() {
  return await prisma.note.findMany();
}

export async function getNote(id: number) {
  return await prisma.note.findFirst({ where: { id: id } });
}

export async function createNote(note: Omit<Note, "id">) {
  await prisma.note.create({ data: note });
  redirect("/");
}

export async function deleteNote(id: number) {
  await prisma.note.delete({ where: { id } });
  redirect("/");
}

export async function updateNote(id: number, app: Partial<Note>) {
  await prisma.note.update({ where: { id }, data: app });
  redirect("/");
}
