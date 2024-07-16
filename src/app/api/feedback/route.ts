import { NextResponse, NextRequest } from "next/server"

type Feedback = {
    name?: string,
    email?: string,
    message?: string,
}

export async function POST(request: NextRequest) {
    const data: Feedback = await request.json()
    console.log('data: ', data)

    const { name, email, message } = data

    return NextResponse.json({ name, email, message })
}