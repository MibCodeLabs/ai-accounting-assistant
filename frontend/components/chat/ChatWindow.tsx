"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import type { ChatMessage } from "@/types/chat";
import { chatWithAssistant } from "@/lib/api";


export default function ChatWindow() {

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: "Hello, I am your AI Accounting Assistant."
    }
  ]);

  const [loading, setLoading] = useState(false);


  async function sendMessage(message: string) {

    const userMessage: ChatMessage = {
      role: "user",
      text: message
    };


    setMessages(prev => [
      ...prev,
      userMessage
    ]);


    setLoading(true);


    try {

      const response = await chatWithAssistant(message);


      const aiMessage: ChatMessage = {
        role: "ai",
        text:
          response.response ||
          response.message ||
          "No response received."
      };


      setMessages(prev => [
        ...prev,
        aiMessage
      ]);


    } catch (error) {


      setMessages(prev => [
        ...prev,
        {
          role: "ai",
          text: "Unable to connect to assistant."
        }
      ]);


    } finally {

      setLoading(false);

    }

  }


  return (

    <div className="bg-white border rounded-xl shadow h-[600px] flex flex-col">


      <div className="flex-1 overflow-y-auto p-5 space-y-3">


        {
          messages.map((message, index) => (

            <MessageBubble
              key={index}
              role={message.role}
              text={message.text}
            />

          ))
        }


        {
          loading && (

            <MessageBubble
              role="ai"
              text="Thinking..."
            />

          )
        }


      </div>


      <ChatInput
        onSend={sendMessage}
      />


    </div>

  );

}