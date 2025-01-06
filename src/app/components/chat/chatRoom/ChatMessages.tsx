import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  isMe: boolean;
  avatar: string;
  name: string;
}

interface Props {
  messages: Message[];
}

export function ChatMessages({ messages }: Props) {
  return (
    <ScrollArea className="h-[calc(100vh-13rem)] p-4">
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 max-w-[80%] ${
                message.isMe ? "ml-auto" : ""
              }`}
            >
              {!message.isMe && (
                <Avatar className="w-8 h-8">
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>{message.name[0]}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`p-3 rounded-lg ${
                  message.isMe
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary"
                }`}
              >
                <p>{message.content}</p>
              </div>
              {message.isMe && (
                <Avatar className="w-8 h-8">
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
