import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        hello: "world!",
    });
}

//the routes under api have to names route
