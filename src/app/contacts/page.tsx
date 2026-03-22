import { redirect } from "next/navigation";

async function submitContact(formData: FormData) {
  "use server";

  const name = formData.get("name");
  const email = formData.get("email");

  console.log("New Contact:", name, email);
  redirect("/thank-you");
}

export default function ContactsPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contact Form</h1>
      <form action={submitContact}>
        <div>
          <label>Name: </label>
          <input name="name" type="text" required />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>Email: </label>
          <input name="email" type="email" required />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
