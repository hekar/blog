import Image from "next/image";
import React, { Fragment } from "react";

type Author =
  | {
      name: string;
      picture: string;
    }
  | string
  | undefined;

type Props = {
  author: Author;
};

const Avatar = ({ author }: Props): JSX.Element => {
  return typeof author === "string" ? (
    <div className="flex items-center">
      <div className="text-xl font-bold">{author}</div>
    </div>
  ) : author ? (
    <div className="flex items-center">
      <Image
        src={author.picture}
        className="w-12 h-12 rounded-full mr-4"
        alt={author.name}
      />
      <div className="text-xl font-bold">{author.name}</div>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};

export default Avatar;
