import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { verifyToken } from "@/lib/auth";

export async function GET() {
    try {
        const cookieStore = await cookies();

        const token = cookieStore.get("token")?.value;

        /* Check Have Token */
        if (!token) {
            return NextResponse.json(
                {
                    authenticated: false,
                    message: "کاربر وارد نشده است",
                },
                {
                    status: 401,
                }
            );
        }

        const user = await verifyToken(token);

        /* Invalid Token */
        if (!user) {
            return NextResponse.json(
                {
                    authenticated: false,
                    message: "توکن نامعتبر یا منقضی شده است",
                },
                {
                    status: 401,
                }
            );
        }

        return NextResponse.json(
            {
                authenticated: true,
                user,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Auth Check Error:", error);

        return NextResponse.json(
            {
                authenticated: false,
            },
            {
                status: 500,
            }
        );
    }
}
