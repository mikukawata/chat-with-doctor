import Link from 'next/link';
import React from 'react';
import ChatList from '../components/ChatList';

async function getMessageList() {
  const response = await fetch('http://localhost:3000/api/message', {
    cache: 'no-store',
  });

  const messageList = await response.json();
  return messageList;
}

const ChatPage = async () => {
  const messageList = await getMessageList();
  return (
    <div className='flex min-h-screen flex-col items-center px-24 py-6'>
      <Link href={'/'} className='cursor-pointer mr-auto'>
        ←ホームへ戻る
      </Link>
      <ChatList messageList={messageList} />
    </div>
  );
};

export default ChatPage;
