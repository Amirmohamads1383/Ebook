import { NextResponse } from "next/server";
import connectToDB from "@/lib/db";
import Product from "@/model/product";

export async function GET() {
    try {
        await connectToDB();

        const products = await Product.find().sort({ createdAt: -1 });

        return NextResponse.json(
            {
                success: true,
                products,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("GET PRODUCTS ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "خطا در دریافت محصولات",
                error: error.message,
            },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        await connectToDB();

        const body = await req.json();

        const {
            name,
            slug,
            description,
            author,
            translator,
            publisher,
            category,
            price,
            discountPrice,
            stock,
            isbn,
            pages,
            publishYear,
            image,
            images,
            isActive,
            isFeatured,
        } = body;

        if (!name || !name.trim()) {
            return NextResponse.json(
                {
                    success: false,
                    message: "نام محصول الزامی است",
                },
                { status: 400 }
            );
        }

        const product = await Product.create({
            name: name.trim(),
            slug: slug?.trim(),
            description,
            author: author?.trim(),
            translator: translator?.trim(),
            publisher: publisher?.trim(),
            category: category?.trim(),
            price,
            discountPrice,
            stock,
            isbn: isbn?.trim(),
            pages,
            publishYear,
            image,
            images,
            isActive,
            isFeatured,
        });

        return NextResponse.json(
            {
                success: true,
                message: "محصول با موفقیت اضافه شد",
                product,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("CREATE PRODUCT ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "خطا در ایجاد محصول",
                error: error.message,
            },
            { status: 500 }
        );
    }
}