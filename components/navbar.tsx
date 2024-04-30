// "use client"
// import { useCallback, useMemo } from "react"
// import { usePathname } from "next/navigation"
import Link from "next/link";
// import { auth, UserButton, currentUser } from "@clerk/nextjs";
import ModalButton from "@/app/(routes)/(components)/modal-button";
interface NavbarProps {
  user: any;
}
export const Navbar = async () => {
  // const user = await currentUser();
  // const pathname = usePathname()
  // const nav = useMemo(() => [
  //     {
  //         title: "Home",
  //         href: "/",
  //         // pathname: pathname === "/"
  //     },
  //     {
  //         title: "About us",
  //         href: "/about",
  //         // pathname: pathname === "/about"
  //     },
  //     {
  //         title: "Services",
  //         href: "/services",
  //         // pathname: pathname === "/services"
  //     },
  // ],[pathname])

  const nav = [
    {
      title: "Home",
      href: "/",
      // pathname: pathname === "/"
    },
    {
      title: "About us",
      href: "/about",
      // pathname: pathname === "/about"
    },
    {
      title: "Services",
      href: "/services",
      // pathname: pathname === "/services"
    },
  ];

  return (
    <div className="flex w-full text-gray-900 justify-between px-4 py-8 items-center mx-auto border-b border-4 border-[#F2F7F6]">
      <a className="text-2xl lg:text-3xl font-bold">Digital X</a>
      <nav className="hidden md:flex max-w-6xl gap-8">
        {nav.map((item, index) => (
          <Link key={index} href={item.href} className="text-black">
            {item.title}
          </Link>
        ))}
      </nav>
      <ActionButtons />
    </div>
  );
};

const ActionButtons = async () => {
  // const user = await currentUser()
  // const { user, userId } = auth();

  return (
    <menu className="flex gap-4">
      <button className="hidden lg:block border-2 border-gray py-3 px-4 rounded-md hover:bg-gray-200">
        Contact Us
      </button>
      <Link href="/login" className="border-2 border-gray py-3 px-4 rounded-md hover:bg-gray-200">
        Join Us
      </Link>
    </menu>
  );
};

// return userId ? (
//   <div className="pr-4 flex items-center gap-3">
//       <ModalButton />
//     {/* <UserButton showName afterSignOutUrl="/" /> */}
//   </div>
// ) : (
//   <menu className="flex gap-4">
//     <button className="hidden lg:block border-2 border-gray py-3 px-4 rounded-md hover:bg-gray-200">
//       Contact Us
//     </button>
//     <button  className="border-2 border-gray py-3 px-4 rounded-md hover:bg-gray-200">
//       Join Us
//     </button>
//   </menu>
// );