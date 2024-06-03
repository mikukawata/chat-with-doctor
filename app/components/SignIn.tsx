'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { supabaseBrowser } from '@/lib/supabese/browser';
import { User } from '@supabase/supabase-js';

type Props = {
    children?: React.ReactNode;
    user: User | null;
};

const SignIn: FC<Props> = ({ children, user }) => {
    const supabase = supabaseBrowser();
    const router = useRouter();

    const signInWithGithub = () => {
        supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: location.origin + '/auth/callback',
            },
        });
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    return user ? (
        <Button
            onClick={signOut}
            className="text-xl bg-red-400 py-2 px-4 rounded-md text-slate-50 cursor-pointer hover:bg-red-300"
            variant="outline"
        >
            ログアウト
        </Button>
    ) : (
        <Button
            onClick={signInWithGithub}
            className="text-xl bg-red-400 py-2 px-4 rounded-md text-slate-50 cursor-pointer hover:bg-red-300"
            variant="outline"
        >
            {children}
        </Button>
    );
};

export default SignIn;
