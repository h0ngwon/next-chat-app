import { Card, CardContent } from "@/components/ui/card";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

interface Props {
  chatId: string;
}

export function ChatRoom({}: Props) {
  return (
    <Card>
      <ChatHeader
        avatar="https://github.com/shadcn.png"
        name="Jane Kim"
        status="온라인"
      />
      <CardContent className="p-0 flex-1">
        <ChatMessages
          messages={[
            {
              id: "1",
              content: "안녕하세요!",
              isMe: false,
              avatar: "https://github.com/shadcn.png",
              name: "Jane",
            },
            {
              id: "2",
              content: "네, 반갑습니다!",
              isMe: true,
              avatar: "https://github.com/shadcn.png",
              name: "Me",
            },
          ]}
        />
      </CardContent>
      <ChatInput onSendMessage={(message) => console.log(message)} />
    </Card>
  );
}
