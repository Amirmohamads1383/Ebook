import { NextResponse } from "next/server";
import connectToDb from "@/lib/db";
import Contact from "@/model/contact";

export async function POST(request) {
    try {
        const body = await request.json();

        const { name, phone, message } = body;

        if (!name || !phone || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "لطفاً تمام فیلدها را پر کنید.",
                },
                {
                    status: 400,
                }
            );
        }

        const cleanName = name.trim();
        const cleanPhone = phone.trim();
        const cleanMessage = message.trim();

        if (cleanName.length < 2) {
            return NextResponse.json(
                {
                    success: false,
                    message: "نام باید حداقل ۲ کاراکتر باشد.",
                },
                {
                    status: 400,
                }
            );
        }

        const phoneRegex = /^09\d{9}$/;

        if (!phoneRegex.test(cleanPhone)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "شماره موبایل معتبر نیست.",
                },
                {
                    status: 400,
                }
            );
        }

        if (cleanMessage.length < 5) {
            return NextResponse.json(
                {
                    success: false,
                    message: "پیام باید حداقل ۵ کاراکتر باشد.",
                },
                {
                    status: 400,
                }
            );
        }

        if (cleanMessage.length > 500) {
            return NextResponse.json(
                {
                    success: false,
                    message: "پیام نمی‌تواند بیشتر از ۵۰۰ کاراکتر باشد.",
                },
                {
                    status: 400,
                }
            );
        }

        await connectToDb();

        const contact = await Contact.create({
            name: cleanName,
            phone: cleanPhone,
            message: cleanMessage,
        });

        return NextResponse.json(
            {
                success: true,
                message: "پیام شما با موفقیت ارسال شد.",
                data: {
                    id: contact._id,
                },
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        console.error("Contact API Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "خطایی در ارسال پیام رخ داد.",
            },
            {
                status: 500,
            }
        );
    }
}