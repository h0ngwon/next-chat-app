import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Props {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("message") as HTMLInputElement;
    if (input.value.trim()) {
      onSendMessage(input.value);
      input.value = "";
    }
  };

  return (
    <CardFooter className="border-t p-4">
      <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
        <Input
          name="message"
          placeholder="메시지를 입력하세요..."
          className="flex-1"
        />
        <Button type="submit">전송</Button>
      </form>
    </CardFooter>
  );
}
