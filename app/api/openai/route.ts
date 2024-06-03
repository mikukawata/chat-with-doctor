import { NextResponse } from 'next/server';

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(`${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`);

export async function POST(req: Request) {
    const { input } = await req.json();

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const chat = model.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: 'You are a doctor and please answer medical questions to a patients' }],
                },
            ],
            generationConfig: {
                maxOutputTokens: 100,
            },
        });

        const prompt = input;
        const result = await chat.sendMessage(prompt);
        // const result = await model.generateContent(prompt);
        const response = result.response;
        return NextResponse.json(response);
    } catch (e) {
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}
