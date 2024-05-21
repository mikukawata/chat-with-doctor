'use server';
// route.tsに POST API を記述する代わりに、
// ここにServer actionsを書いて直接Serverにアクセスできる

import prisma from '@/lib/prismaClient';
import { ReqPostMessage } from '@/lib/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const postMessage = async ({ content, author }: ReqPostMessage) => {
  await prisma.message.create({
    data: { content, author },
  });

  revalidatePath('/chat');
  redirect('/chat');
};
