"use client";

import { useState } from "react";

export default function ChatInput({
  onSend,
}: {
  onSend: (message: string) => void;
}) {
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  }

  return (
    <div className="flex gap-3 border-t p-4">
      <input
        className="
    border
    border-slate-300
    bg-white
    text-slate-900
    placeholder:text-slate-400
    rounded-lg
    p-3
    flex-1
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
  "
        placeholder="Ask accounting question..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") send();
        }}
      />

      <button className="bg-blue-600 text-white px-5 rounded" onClick={send}>
        Send
      </button>
    </div>
  );
}
