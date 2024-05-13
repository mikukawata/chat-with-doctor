'use client';
import React, { useState } from 'react';
import Input from '../components/Input';

const ChatList = () => {
  const [message, setMessage] = useState<string>('');
  const [messageList, setMessageList] = useState<string[]>([]);

  const handleSubmit = () => {
    setMessageList([...messageList, message]);
    setMessage('');
  };

  return (
    <div className='w-full py-7 px-8'>
      {messageList.length > 0 ? (
        messageList.map((message, _i) => {
          return <div className='w-fit max-w-80 ml-auto bg-red-300 rounded-lg p-3 mb-3'>{message}</div>;
        })
      ) : (
        <div className='text-center py-8'>メッセージはありません</div>
      )}
      <Input handleSubmit={handleSubmit} message={message} setMessage={setMessage} />
    </div>
  );
};

export default ChatList;
