import { NextResponse } from "next/server"
// import { auth } from "@clerk/nextjs"
// import { getOrganizationById } from "@/lib/query-func"
// export async function POST (request: Request) {
//     if (request.method !== 'POST') {
//         throw new Error("Method not allowed")
//     }
//     try {
//         const { userId } = auth()
//         if (!userId) {
//             return NextResponse.json({error: "Unauthorized"}, { status: 401 })   
//         }
//         const existingOrg = await getOrganizationById(userId)
//         if (!existingOrg) return NextResponse.json({error: "Organization not found"}, { status: 404 })
//         return NextResponse.json({message: "Organization api"}, { status: 200 })
//     } catch (error) {
//         console.log(error)
//             return NextResponse.json(error, { status: 500 })
//     }
// }

// ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],