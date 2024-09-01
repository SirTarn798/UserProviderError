import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { encodeBase64 } from "bcryptjs";
export const POST = async (request) => {
  const body = await request.json();
  const hashedPassword = encodeBase64(body.password,8);
  try {
    await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
      },
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }

  return new NextResponse("User has been created", {
    status: 201,
  });
};
