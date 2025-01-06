interface Props {
  children: React.ReactNode;
}

export function ChatLayout({ children }: Props) {
  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="grid grid-cols-[350px_1fr] gap-4 h-[calc(100vh-2rem)]">
        {children}
      </div>
    </div>
  );
}
