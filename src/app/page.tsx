'use client';

import { useState } from 'react';
import { ChatLayout } from './components/chat/ChatLayout';
import { ChatList } from './components/chat/chatList/ChatList';
import { ChatRoom } from './components/chat/chatRoom/ChatRoom';

export default function Home() {
  const [activeChatId, setActiveChatId] = useState<string>("1");

  return (
    <ChatLayout>
      <ChatList
        activeChat={activeChatId}
        onChatSelect={setActiveChatId}
      />
      <ChatRoom chatId={activeChatId} />
    </ChatLayout>
  );
}