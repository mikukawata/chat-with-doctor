import React from 'react';
import SignIn from './components/SignIn';
import { supabaseServer } from '@/lib/supabese/server';

export default async function Home() {
    const supabase = supabaseServer();
    const { data } = await supabase.auth.getUser();
    return (
        <main className="p-10">
            <div className="flex min-h-screen flex-col items-center justify-center p-24">
                <h1 className="text-3xl font-bold mb-7">オンラインチャット相談アプリ</h1>
                <SignIn user={data.user}>お医者さんに相談する</SignIn>
            </div>
        </main>
    );
}
