import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectToDb from "@/lib/db";
import User from "@/model/user";
import { createToken } from "@/lib/auth";

export async function POST(req) {
  try {
    await connectToDb();
    const { name, email, mobile, password } = await req.json();

    // Validation
    if (!name || !email || !mobile || !password) {
      return NextResponse.json(
        {
          message: "لطفاً تمام فیلدها را پر کنید",
        },
        {
          status: 400,
        },
      );
    }

    // Check Correct Password
    if (password.length < 6) {
      return NextResponse.json(
        {
          message: "رمز عبور باید حداقل ۶ کاراکتر باشد",
        },
        {
          status: 400,
        },
      );
    }

    // Normalize Data
    const cleanEmail = email.trim().toLowerCase();
    const cleanMobile = mobile.trim();

    // Check Existing User
    const existingUser = await User.findOne({
      $or: [{ mobile: cleanMobile }, { email: cleanEmail }],
    });

    if (existingUser) {
      if (existingUser.mobile === cleanMobile) {
        return NextResponse.json(
          {
            message: "این شماره موبایل قبلاً ثبت نام کرده است",
          },
          {
            status: 409,
          },
        );
      }

      if (existingUser.email === cleanEmail) {
        return NextResponse.json(
          {
            message: "این ایمیل قبلاً ثبت نام کرده است",
          },
          {
            status: 409,
          },
        );
      }
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({
      name: name.trim(),
      mobile: cleanMobile,
      email: cleanEmail,
      password: hashedPassword,
      role: "User",
    });

    // Create Token
    const token = await createToken(user);

    // Create Response
    const response = NextResponse.json(
      {
        message: "ثبت نام با موفقیت انجام شد",

        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          role: user.role,
        },
      },
      {
        status: 201,
      },
    );

    // Save Token HTTP ONLY
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
    console.error("Register Error:", error);

    return NextResponse.json(
      {
        message: "خطایی در ثبت نام رخ داد",
      },
      {
        status: 500,
      },
    );
  }
}
