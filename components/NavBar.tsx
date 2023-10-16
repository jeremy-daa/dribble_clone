import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

const NavBar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href={"/"}>
          <Image src={"/logo.svg"} height={43} width={115} alt="logo"></Image>
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link key={link.key} href={link.href}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            userPhoto <Link href="/create-project">Share Project</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
