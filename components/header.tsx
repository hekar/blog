import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4 mt-8">
        <Link href="/">
          <a className="hover:underline">Mov Log</a>
        </Link>
      </h2>
      <a
        className="hover:underline cursor-pointer"
        onClick={() => router.back()}
      >
        <Image
          className="align-middle pt-4"
          src="back.png"
          width={16}
          height={16}
        />{" "}
        <span className="md:text-xl">Articles</span>
      </a>
    </section>
  );
};

export default Header;
