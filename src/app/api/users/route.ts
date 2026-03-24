import { NextResponse } from "next/server";

let users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
]

export async function GET(){
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newUser = {
        id: users.length + 1,
        name: body.name,
        email: body.email,
    }
    users.push(newUser);
    return NextResponse.json(newUser, { status: 201 });
}
}