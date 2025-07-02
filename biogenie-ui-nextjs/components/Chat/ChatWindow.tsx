'use client';

import { useChatStore } from "@/store/chat";
import { useEffect, useRef } from "react";

export default function ChatWindow() {
  const { messages, addMessage } = useChatStore();
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <div ref={chatRef} className="flex-1 overflow-y-auto p-4 bg-white dark:bg-[#101010]">
      <div className="max-w-3xl mx-auto space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`p-4 rounded-md shadow ${msg.role === "user" ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-[#1e1e1e]"}`}>
            <div className="text-xs text-gray-500 mb-1">
              {msg.role === "user" ? "You" : "BioGenie"} • {msg.timestamp}
            </div>
            <div>{msg.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
