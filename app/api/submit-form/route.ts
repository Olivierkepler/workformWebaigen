import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.fullName || !body.email) {
      return NextResponse.json(
        { error: "Full name and email are required." },
        { status: 400 }
      );
    }

    await appendToSheet(body);

    return NextResponse.json(
      { message: "Form submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);

    const message =
      process.env.NODE_ENV !== "production" && error instanceof Error
        ? error.message
        : "Something went wrong.";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}