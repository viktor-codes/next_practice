 
import { limiter } from "../config/limiter" 


export async function GET() {
    const remaining = await limiter.removeTokens(1)
    return Response.json({"message": "Hello, Next.js!"})
}