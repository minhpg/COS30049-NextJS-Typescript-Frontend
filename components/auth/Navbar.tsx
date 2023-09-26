"use client";

import { Flex } from "@tremor/react";
import { NavbarLogo } from "../Logo";

const Navbar = () => {

  return (
    <>
      <Flex className="my-6" justifyContent="between" alignItems="center">
        <Flex justifyContent="start">
          <div className="hidden lg:block w-full text-xl">
            <NavbarLogo />
          </div>
          <div className="lg:hidden w-full text-xl">
            <NavbarLogo />
          </div>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar