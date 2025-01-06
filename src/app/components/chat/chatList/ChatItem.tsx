import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  avatar: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export function ChatItem({
  avatar,
  name,
  lastMessage,
  time,
  unreadCount,
  isActive,
  onClick,
}: Props) {
  return (
    <button
      className={`flex items-center gap-3 p-4 hover:bg-accent transition-colors border-b w-full
        ${isActive ? "bg-accent" : ""}`}
      onClick={onClick}
    >
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1 text-left">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground truncate">{lastMessage}</p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-xs text-muted-foreground">{time}</span>
        {unreadCount && (
          <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </div>
    </button>
  );
}
