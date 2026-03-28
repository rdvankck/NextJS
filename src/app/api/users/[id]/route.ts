import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, { params }: Props) {
  const { id } = await params;
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(request: Request, { params }: Props) {
  const { id } = await params;
  const body = await request.json();
  const userIndex = users.findIndex((u) => u.id === parseInt(id));

  if (userIndex === -1) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  users[userIndex] = { ...users[userIndex], ...body };
  return NextResponse.json(users[userIndex]);
}

export async function DELETE(request: Request, { params }: Props) {
  const { id } = await params;
  const userIndex = users.findIndex((u) => u.id === parseInt(id));

  if (userIndex === -1) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  users.splice(userIndex, 1);
  return NextResponse.json({ message: "User deleted" });
}
