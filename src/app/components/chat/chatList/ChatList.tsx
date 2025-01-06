import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatItem } from "./ChatItem";

interface Props {
  activeChat?: string;
  onChatSelect: (chatId: string) => void;
}

export function ChatList({ activeChat, onChatSelect }: Props) {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>채팅 목록</CardTitle>
      </CardHeader>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="flex flex-col">
          <ChatItem
            avatar="https://github.com/shadcn.png"
            name="John Doe"
            lastMessage="마지막 메시지입니다..."
            time="오후 2:23"
            unreadCount={2}
            isActive={activeChat === "1"}
            onClick={() => onChatSelect("1")}
          />
          <ChatItem
            avatar="https://github.com/shadcn.png"
            name="Jane Kim"
            lastMessage="네, 반갑습니다!"
            time="오후 2:20"
            isActive={activeChat === "2"}
            onClick={() => onChatSelect("2")}
          />
        </div>
      </ScrollArea>
    </Card>
  );
}
