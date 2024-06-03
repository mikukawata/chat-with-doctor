'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import ChatList from '../components/ChatList';
import { supabaseBrowser } from '@/lib/supabese/browser';
import { MessageType, ReqPostMessage } from '@/lib/types';
import SignIn from '../components/SignIn';
import { User } from '@supabase/supabase-js';
import { postMessage } from '../actions/postMessage';
interface Payload {
    new: MessageType;
}

const ChatPage = () => {
    const [messageList, setMessageList] = React.useState<MessageType[]>([]);
    const [user, setUser] = React.useState<User | null>(null);
    const supabase = supabaseBrowser();
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            const { data } = await supabase.auth.getUser();

            if (!data.user) {
                router.push('/');
                return;
            }

            setUser(data.user);
            getMessageList();
        }

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // if payload.new is empty, please check this issue: https://github.com/supabase/supabase-js/issues/848
        const channel = supabase
            .channel('room1')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'message' }, (payload: Payload) => {
                console.log('Received event:', payload);
                setMessageList((prev) => [...prev, payload.new]);
                console.log(payload.new);
                if (payload.new.author === 'PATIENT') {
                    getAIResponse(payload.new.content);
                }
            })
            .subscribe();

        return () => {
            channel.unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getAIResponse = async (input: string) => {
        const response = await fetch('api/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input }),
            cache: 'no-store',
        });

        const data = await response.json();
        const item: ReqPostMessage = {
            author: 'DOCTOR',
            content: data.candidates[0].content.parts[0].text,
        };
        postMessage(item);
    };

    async function getMessageList() {
        const response = await fetch('http://localhost:3000/api/message', {
            cache: 'no-store',
        });

        const messageList = await response.json();
        setMessageList(messageList);
    }

    if (!user) {
        return <div>loading...</div>;
    }

    return (
        <div className="flex min-h-screen flex-col items-center px-24 py-6">
            <div className="flex justify-around w-full">
                <Link href={'/'} className="cursor-pointer mr-auto">
                    ←ホームへ戻る
                </Link>
                <SignIn user={user} />
            </div>
            <ChatList messageList={messageList} />
        </div>
    );
};

export default ChatPage;
