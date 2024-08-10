"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { HomeIcon, MessageSquareIcon, UserIcon } from "lucide-react";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Cart",
      link: "/cart",
      icon: <UserIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <MessageSquareIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
      <FloatingNav navItems={navItems} />
  );
}
