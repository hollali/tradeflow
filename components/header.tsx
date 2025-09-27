import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="TradeFlow"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
