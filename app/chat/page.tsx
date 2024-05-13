import Link from 'next/link';
import React from 'react';
import ChatList from '../components/ChatList';

const ChatPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center px-24 py-6'>
      <Link href={'/'} className='cursor-pointer mr-auto'>
        ←ホームへ戻る
      </Link>
      <ChatList />
    </div>
  );
};

export default ChatPage;
