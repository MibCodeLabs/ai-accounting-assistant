export type MessageRole = "user" | "ai";


export interface ChatMessage {

  role: MessageRole;

  text: string;

}