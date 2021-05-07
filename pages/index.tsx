import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Hekar's Log | Random Posts</title>
        </Head>
        <Container>
          <div className="divide-y-4 divide-black-600 divide-solid">
            <Intro />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
