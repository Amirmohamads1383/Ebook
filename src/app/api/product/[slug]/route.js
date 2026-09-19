import { NextResponse } from "next/server";
import connectToDB from "@/lib/db";
import Product from "@/model/product";

export async function GET(req, { params }) {
    try {
        await connectToDB();

        const { slug } = await params;

        const product = await Product.findOne({ slug });

        if (!product) {
            return NextResponse.json(
                {
                    success: false,
                    message: "محصول پیدا نشد",
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                product,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("GET SINGLE PRODUCT ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "خطا در دریافت محصول",
                error: error.message,
            },
            { status: 500 }
        );
    }
}