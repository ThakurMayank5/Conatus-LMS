"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="absolute inset-0 opacity-80 bg-white"></div>

      <div className="relative px-8 flex items-center py-2">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Conatus Logo"
            width={50}
            height={50}
            className="h-10 w-10 object-cover"
          />
          <h1
            className="text-center text-5xl py-2 font-black hover:cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Conatus
          </h1>
        </div>

        <NavigationMenu viewport={false} className="mx-auto my-auto font-semibold">
          <NavigationMenuList>
            
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
              >
                <Link className="text-xl" href="/docs">Platform</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
              >
                <Link className="text-xl" href="/docs">Appproach</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
              >
                <Link className="text-xl" href="/docs">Programs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
              >
                <Link className="text-xl" href="/docs">Faculty</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <div className="">
          <Popover>
            <PopoverTrigger asChild>
              <button className="focus:outline-none border-2 border-gray-5000 rounded-full p-0.5 hover:bg-gray-600 transition duration-300 ease-in-out cursor-pointer">
                {/* {user.photoURL ? ( */}
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={"https://avatar.iran.liara.run/public/16"}
                    alt="User avatar"
                    className="object-cover h-12 w-12"
                    width={32}
                    height={32}
                  />
                </div>
                {/* ) : (
                  <div className="h-8 w-8 rounded-full bg-amber-800 flex items-center justify-center text-white">
                  {user.displayName
                  ? user.displayName.charAt(0).toUpperCase()
                  : user.email
                  ? user.email.charAt(0).toUpperCase()
                  : "U"}
                  </div>
                  )} */}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-fit" align="end">
              <div className="space-y-2">
                <div className="font-medium">{"Mayank Singh"}</div>
                <div className="text-sm text-gray-500">
                  {"maynk.singh5t@gmail.com"}
                </div>
                <div className="border-t pt-2 mt-2">
                  <button
                    className="text-sm text-red-500 hover:text-red-700 cursor-pointer border rounded p-1 hover:bg-red-50 hover:border-red-700 border-red-500"
                    // onClick={() => signOutUser()}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}

export default Header;
