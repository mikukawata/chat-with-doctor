'use client';
import React, { FC, useState } from 'react';
import Input from '../components/Input';
import SwitchUser from './SwitchUser';
import { MessageType } from '@/lib/types';
import { postMessage } from '../actions/postMessage';

type Props = {
  messageList: MessageType[];
};
const ChatList: FC<Props> = ({ messageList }) => {
  const [input, setInput] = useState<string>('');
  const [isDoctor, setIsDoctor] = useState<boolean>(false);

  // TODO: uuidつける
  const handleSubmit = () => {
    const author = isDoctor ? 'DOCTOR' : 'PATIENT';
    postMessage({ content: input, author });
    setInput('');
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
          messageList.map((message) => {
            const { id, author, content } = message;
            const className = author === 'DOCTOR' ? 'mr-auto border border-red-300' : 'ml-auto bg-red-300';
            return (
              <div key={id} className={`w-fit max-w-80 ${className} rounded-lg p-3 mb-3`}>
                {content}
              </div>
            );
          })
        ) : (
          <div className='text-center py-8'>メッセージはありません</div>
        )}
        <Input handleSubmit={handleSubmit} input={input} setInput={setInput} />
      </div>
    </>
  );
};

export default ChatList;
