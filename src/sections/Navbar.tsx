"use client";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="text-gray-600  bg-[#FAFAFA] border-b">
      <div className="container mx-auto flex flex-wrap py-3 px-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className=" text-xl">MySkill</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button
            className="flex p-3 text-center z-0"
            style={{ color: pathname === "/dashboard" ? "#10a4b0" : "" }}
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Dashboard
          </button>
          <button
            className="flex p-3 text-center z-0"
            style={{ color: pathname === "/" ? "#10a4b0" : "" }}
            onClick={() => {
              router.push("/");
            }}
          >
            Profile
          </button>
        </nav>
      </div>
    </header>
    // <header>
    //   <nav className="flex text-black items-center px-20 py-4 justify-between bg-[#FAFAFA] border-b">
    //     <div className="flex">
    //       <h1 className="font-bold">MySkill</h1>
    //     </div>
    //     <div className="flex h-full gap-6 justify-center items-center">
    //       <button
    //         className="flex p-3 text-center z-0"
    //         style={{ color: pathname === "/dashboard" ? "#10a4b0" : "" }}
    //         onClick={() => {
    //           router.push("/dashboard");
    //         }}
    //       >
    //         Dashboard
    //       </button>
    //       <button
    //         className="flex p-3 text-center z-0"
    //         style={{ color: pathname === "/" ? "#10a4b0" : "" }}
    //         onClick={() => {
    //           router.push("/");
    //         }}
    //       >
    //         Profile
    //       </button>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Navbar;
