import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import SideMenu from "./SideMenu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const NavBar = () => {
  const [openSideMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { totalQuantitites } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    setOpenMenu(false);
    setOpenCart(false);
  }, [router.query]);

  return (
    <nav className="w-full  bg-primary">
      <div className="w-full flex items-center justify-between p-4 ">
        <div
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center lg:cursor-pointer"
          onClick={() => setOpenMenu(true)}
        >
          <AiOutlineMenu className="text-xl text-details" />
        </div>

        <h1 className="hidden lg:block text-white font-bold text-2xl">
          Food <span className="text-details">Club</span>
        </h1>

        <div className="flex text-xl text-details space-x-4">
          <AiOutlineUser />

          <div
            className="relative  lg:cursor-pointer"
            onClick={() => setOpenCart(true)}
          >
            <BsBag className="text-xl" />
            <span className="absolute bg-details top-3 left-2  h-4 w-4 text-center text-[12px] text-white  flex items-center justify-center rounded-full ">
              {totalQuantitites}
            </span>
          </div>
        </div>
      </div>
      {openSideMenu && <SideMenu active={setOpenMenu} />}
      {openCart && <Cart active={setOpenCart} />}
    </nav>
  );
};

export default NavBar;
