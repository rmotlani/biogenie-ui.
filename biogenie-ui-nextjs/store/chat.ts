import { create } from "zustand";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
};

interface ChatStore {
  messages: Message[];
  addMessage: (msg: Omit<Message, "id" | "timestamp">) => void;
  resetChat: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [
    {
      id: "1",
      role: "user",
      text: "What are the latest developments in mRNA vaccines?",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: "2",
      role: "assistant",
      text: "Recent developments include thermostable formulations and personalized cancer vaccines.",
      timestamp: new Date().toLocaleTimeString(),
    },
  ],
  addMessage: ({ role, text }) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: crypto.randomUUID(),
          role,
          text,
          timestamp: new Date().toLocaleTimeString(),
        },
      ],
    })),
  resetChat: () =>
    set({
      messages: [],
    }),
}));
