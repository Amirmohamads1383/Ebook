import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import connectToDB from "@/lib/db";
import User from "@/model/user";
import { createToken } from "@/lib/auth";

export async function POST(req) {
    try {
        await connectToDB();

        const { mobile, password } = await req.json();

        // Validation
        if (!mobile?.trim() || !password) {
            return NextResponse.json(
                {
                    message: "لطفاً شماره موبایل و رمز عبور را وارد کنید",
                },
                {
                    status: 400,
                }
            );
        }

        /* Find User */
        const user = await User.findOne({
            mobile: mobile.trim(),
        });

        /* Dont Exist User */
        if (!user) {
            return NextResponse.json(
                {
                    message: "شماره موبایل یا رمز عبور اشتباه است",
                },
                {
                    status: 401,
                }
            );
        }

        /* Check Password */
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        /* Incorect Password */
        if (!isPasswordCorrect) {
            return NextResponse.json(
                {
                    message: "شماره موبایل یا رمز عبور اشتباه است",
                },
                {
                    status: 401,
                }
            );
        }

        /* Create Token */
        const token = await createToken(user);

        /* Response */
        const response = NextResponse.json(
            {
                message: "ورود با موفقیت انجام شد",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    mobile: user.mobile,
                    role: user.role,
                },
            },
            {
                status: 200,
            }
        );

        /* Save Token */
        response.cookies.set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Login Error:", error);

        return NextResponse.json(
            {
                message: "خطایی در ورود به حساب کاربری رخ داد",
            },
            {
                status: 500,
            }
        );
    }
}
