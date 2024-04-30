import { ChatSideBar } from "./(components)/sidebar";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
      <div className="flex gap-3">
        <ChatSideBar />
        {children}
      </div>
    );

}
