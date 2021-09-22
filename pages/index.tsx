import { useContext } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';

import { IPost } from '../types/cms';
import { CMS } from '../constants';
import { CmsApi } from '../services/cms';
import generateRSSFeed from '../utils/rss';
import { ScreenContext } from '../contexts/screen';

import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Products from '../components/sections/Products';
import Privacy from '../components/sections/Privacy';
import GetInvolved from '../components/sections/GetInvolved';
import EmailSignup from '../components/EmailSignup';
import classNames from 'classnames';

export default function Index() {
  const { isDesktop } = useContext(ScreenContext);

  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Products />
      <Privacy />
      <GetInvolved />
      <EmailSignup
        buttonPosition={isDesktop ? 'left' : 'center'}
        classes={classNames(
          'border-none pt-10 pb-16',
          'tablet:py-8 tablet:max-w-lg',
          'desktop:py-12 desktop:ml-0',
        )}
      />
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

  // TODO Fetch stats here and pass through

  return {
    props: {},
    revalidate: CMS.CONTENT_REVALIDATE_RATE,
  };
};
