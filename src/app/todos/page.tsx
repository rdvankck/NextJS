import { revalidatePath } from "next/cache";

let todos: string[] = ["Server Action Practice", "Learn Next.js", "Learn React"];

async function addTodo(formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  if (title) {
    todos.push(title);
    revalidatePath("/todos");
  }
}

export default function TodosPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Todos</h1>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <form action={addTodo}>
          <input name="title" type="text" placeholder="Yeni todo..." required />
          <button type="submit" style={{ marginLeft: "0.5rem" }}>Ekle</button>
        </form>
      </div>
    </div>
  );
}
