import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  avatar: string;
  name: string;
  status: string;
}

export function ChatHeader({ avatar, name, status }: Props) {
  return (
    <CardHeader className="border-b">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{status}</CardDescription>
        </div>
      </div>
    </CardHeader>
  );
}
