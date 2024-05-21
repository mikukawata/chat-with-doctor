import prisma from '@/lib/prismaClient';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const messageList = await prisma.message.findMany();
  return NextResponse.json(messageList);
}

// export async function POST(req: Request) {
//   const { content, author } = await req.json();

//   const message = await prisma.message.create({
//     data: {
//       content,
//       author,
//     },
//   });
//   return NextResponse.json(message);
// }
