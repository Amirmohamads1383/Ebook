import { NextResponse } from "next/server";

export async function POST() {
    try {
        const response = NextResponse.json(
            {
                message: "با موفقیت از حساب کاربری خارج شدید",
            },
            {
                status: 200,
            }
        );

        // حذف Token
        response.cookies.set({
            name: "token",
            value: "",
            httpOnly: true,
            expires: new Date(0),
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Logout Error:", error);

        return NextResponse.json(
            {
                message: "خطایی هنگام خروج از حساب کاربری رخ داد",
            },
            {
                status: 500,
            }
        );
    }
}