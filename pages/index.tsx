import { GetStaticProps, GetStaticPropsContext } from 'next';

import { IPost } from '../types/cms';
import { CMS } from '../constants';
import { CmsApi } from '../services/cms';
import generateRSSFeed from '../utils/rss';

import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  if (process.env.NEXT_PUBLIC_SITE_ENV !== 'development') {
    const cms = new CmsApi();
    const posts: IPost[] = [];
    let page = 1;
    let foundAllPosts = false;

    // Contentful only allows 100 at a time
    while (!foundAllPosts) {
      const { entries: _posts } = await cms.fetchBlogEntries(100, page);

      if (_posts.length === 0) {
        foundAllPosts = true;
        continue;
      }

      posts.push(..._posts);
      page++;
    }

    generateRSSFeed(posts);
  }

  return {
    props: {},
    revalidate: CMS.CONTENT_REVALIDATE_RATE,
  };
};
