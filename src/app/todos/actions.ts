"use server";

import { revalidatePath } from "next/cache";

let todos: string[] = ["Server Action Practice", "Learn Next.js", "Learn React"];

export async function addTodo(formData: FormData): Promise<void> {
  const title = formData.get("title") as string;
  if (title) {
    todos.push(title);
    revalidatePath("/todos");
  }
}

export { todos };
