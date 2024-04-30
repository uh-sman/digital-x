import AdminSideBar from "./(components)/admin-sidebar";
// import { currentUser } from "@clerk/nextjs"
import Menu from "./(components)/menu";
import { UserProvider } from "@/hooks/user";

export default async function DashBoardLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
    // const user = await currentUser();
    const user = "usman"
    return (
      <UserProvider>
        <div className="flex h-screen">
        <div className="sr-only md:not-sr-only fixed top-0 bottom-0">
          <AdminSideBar
           name={ user || ""}
           />
        </div>
        <div className="flex flex-col w-full">
        {/* <Menu /> */}
            {children}
        </div>
      </div>
      </UserProvider>
    );

}
