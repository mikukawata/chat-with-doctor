'use client';
import React, { useState } from 'react';
import Input from '../components/Input';
import SwitchUser from './SwitchUser';
import { MessageType } from '@/lib/types';

const ChatList = () => {
  const [message, setMessage] = useState<string>('');
  const [messageList, setMessageList] = useState<MessageType[]>([]);
  const [isDoctor, setIsDoctor] = useState<boolean>(false);

  // TODO: uuidつける
  const handleSubmit = () => {
    const author = isDoctor ? 'DOCTOR' : 'PATIENT';
    setMessageList([...messageList, { message, author }]);
    setMessage('');
  };

  const handleSwitchUser = () => {
    setIsDoctor(!isDoctor);
  };

  return (
    <>
      <div className='flex items-center space-x-2'>
        <SwitchUser isDoctor={isDoctor} handleSwitchUser={handleSwitchUser} />
      </div>
      <div className='w-full py-7 px-8'>
        {messageList.length > 0 ? (
          messageList.map((message, _i) => {
            const className = message.author === 'DOCTOR' ? 'mr-auto border border-red-300' : 'ml-auto bg-red-300';
            return <div className={`w-fit max-w-80 ${className} rounded-lg p-3 mb-3`}>{message.message}</div>;
          })
        ) : (
          <div className='text-center py-8'>メッセージはありません</div>
        )}
        <Input handleSubmit={handleSubmit} message={message} setMessage={setMessage} />
      </div>
    </>
  );
};

export default ChatList;
