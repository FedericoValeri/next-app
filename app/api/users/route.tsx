import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // fetch users from a db
  return NextResponse.json([
    { id: 1, name: "Mario" },
    { id: 2, name: "Giovanni" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validation
  // If invalid, return 400
  if (!body.name)
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  // Else, return created data
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
