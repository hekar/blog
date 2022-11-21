import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-4">
      {children}
    </h1>
  );
};

export default PostTitle;
