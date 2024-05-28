import { createStore } from "@/server/queries";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const body = await request.json();
    const { name } = body;

    if (!userId) return new NextResponse("Unathorized", { status: 401 });

    if (!name) return new NextResponse("Name is required", { status: 400 });

    const store = await createStore(userId, name);
    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
