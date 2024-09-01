import prisma from "@/lib/db";
import { compare } from "bcryptjs";
import { login } from "@/lib/auth";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const body = await request.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (compare(user.password, body.password)) {
    const data = {
      id: user.id,
      email: user.email,
    };
    await login(data);
    return new NextResponse("Loggin in...", {
      status: 201,
      user: data,
    });
  }
  return new NextResponse("Username or password is incorrect", {
    status: 500,
  });
};
