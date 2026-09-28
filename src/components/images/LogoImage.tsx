"use client"

import Image from "next/image";

const LogoImage = () => {
    return (
      <div>
        <Image
          src="/logo.png"
          alt="Gear Up Logo"
          width={20}
          height={20}
          priority
          className="block dark:hidden"
        />
      </div>
    );
};

export default LogoImage;