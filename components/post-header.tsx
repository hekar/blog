import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <div className="max-w-2xl">
        <PostTitle>{title}</PostTitle>
        {coverImage ? (
          <div className="mb-8 md:mb-16 sm:mx-0">
            <CoverImage title={title} src={coverImage} />
          </div>
        ) : undefined}
        <div className="block mb-6">
          <Avatar author={author ?? 'Hekar Khani'} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
