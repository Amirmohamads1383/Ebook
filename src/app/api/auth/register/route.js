import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import connectToDb from "@/lib/db";
import User from "@/model/user";

export async function POST(req) {
    try {
        await connectToDb();

        const { name, email, mobile, password } = await req.json();

        /* Validation */
        if (!name || !email || !mobile || !password) {
            return NextResponse.json(
                {
                    message: "لطفاً تمام فیلدها را پر کنید",
                },
                {
                    status: 400,
                }
            );
        }

        // بررسی حداقل طول رمز عبور
        if (password.length < 6) {
            return NextResponse.json(
                {
                    message: "رمز عبور باید حداقل ۶ کاراکتر باشد",
                },
                {
                    status: 400,
                }
            );
        }

        // IsUserExist
        const existingUser = await User.findOne({ mobile });

        if (existingUser) {
            return NextResponse.json(
                {
                    message: "این شماره موبایل قبلاً ثبت نام کرده است",
                },
                {
                    status: 409,
                }
            );
        }

        // Hased Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const user = await User.create({
            name,
            mobile,
            email,
            password: hashedPassword,
            role: "User"
        });

        return NextResponse.json(
            {
                message: "ثبت نام با موفقیت انجام شد",
                user: {
                    id: user._id,
                    name: user.name,
                    mobile: user.mobile,
                },
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        console.error("Register Error:", error);

        return NextResponse.json(
            {
                message: "خطایی در ثبت نام رخ داد",
            },
            {
                status: 500,
            }
        );
    }
}
