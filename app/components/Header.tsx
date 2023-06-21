"use client";
import { Menu, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";

const Header = () => {
  return (
    <header className="p-2">
      <div className="flex justify-around items-center md:text-lg font-semibold">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Filmic App" priority />
          </Link>
        </div>
        <div></div>
        <div className="flex flex-row gap-4 items-center text-[#B9BCFF]">
          <Menu trigger="hover" openDelay={100} closeDelay={400}>
            <Menu.Target>
              <Text className="px-2 py-1 text-xl cursor-pointer hover:underline hover:decoration-[#000561] hover:decoration-2">
                Series
              </Text>
            </Menu.Target>
            <Menu.Dropdown bg="#B9BCFF" className="border-none ">
              <Link href="/series/popular">
                <Menu.Item className="hover:bg-[#000561] hover:text-[#B9BCFF] text-[#000561]">
                  Popular
                </Menu.Item>
              </Link>
              <Link href="/series/toprated">
                <Menu.Item className="hover:bg-[#000561] hover:text-[#B9BCFF] text-[#000561]">
                  Top Rated
                </Menu.Item>
              </Link>
            </Menu.Dropdown>
          </Menu>
          <Menu trigger="hover" openDelay={100} closeDelay={400}>
            <Menu.Target>
              <Text className="px-2 py-1 text-xl cursor-pointer hover:underline hover:decoration-[#000561] hover:decoration-2">
                Movies
              </Text>
            </Menu.Target>
            <Menu.Dropdown bg="#B9BCFF" className="border-none">
              <Link href="/movies/popular">
                <Menu.Item className="hover:bg-[#000561] hover:text-[#B9BCFF] text-[#000561]">
                  Popular
                </Menu.Item>
              </Link>
              <Link href="/movies/toprated/">
                <Menu.Item className="hover:bg-[#000561] hover:text-[#B9BCFF] text-[#000561]">
                  Top Rated
                </Menu.Item>
              </Link>
              <Link href="/movies/upcoming">
                <Menu.Item className="hover:bg-[#000561] hover:text-[#B9BCFF] text-[#000561]">
                  Upcoming
                </Menu.Item>
              </Link>
            </Menu.Dropdown>
          </Menu>
          <Link href="/popular" className="px-2 py-1">
            Popular
          </Link>
          <Link href="/theatres" className="bg-[#000561] px-2 py-1 rounded-lg">
            In Theatres
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
