"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation"; // Changed from 'next/router'

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter(); // Properly initialize the router

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
          </div>
        </MenuItem>
        <div
          className="flex items-center gap-2 cursor-pointer text-white font-medium py-2 px-4 rounded transition-colors duration-200 ml-32"
          onClick={handleLogout}
        >
          <IoIosLogOut className="text-lg" />
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;