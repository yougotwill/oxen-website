import { GetStaticProps, GetStaticPropsContext } from 'next';
import classNames from 'classnames';

import { IPost } from '../types/cms';
import { CMS } from '../constants';
import { CmsApi } from '../services/cms';
import generateRSSFeed from '../utils/rss';
import { useScreen } from '../contexts/screen';
import { fetchCurrentPrice } from '../services/coingecko';

import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats, { StatsProps } from '../components/sections/Stats';
import Products from '../components/sections/Products';
import Privacy from '../components/sections/Privacy';
import GetInvolved from '../components/sections/GetInvolved';
import EmailSignup from '../components/EmailSignup';
import { containerStyles } from '../components/Contained';

export default function Index(props: StatsProps) {
  const { currentValue, coinsLocked } = props;
  const { isDesktop, isHuge } = useScreen();

  return (
    <>
      <Hero />
      <About />
      <Stats currentValue={currentValue} coinsLocked={coinsLocked} />
      <Products />
      <Privacy />
      <GetInvolved />
      <div className={classNames('w-full mx-auto')} style={containerStyles}>
        <EmailSignup
          buttonPosition={isDesktop || isHuge ? 'left' : 'center'}
          classes={classNames(
            'border-none pt-10 pb-16',
            'tablet:py-8 tablet:max-w-lg',
            'desktop:py-12 desktop:pl-0 desktop:ml-0',
          )}
        />
      </div>
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
  const currentValue = await fetchCurrentPrice();
  let coinsLocked = 0.48;

  return {
    props: { currentValue, coinsLocked },
    revalidate: CMS.CONTENT_REVALIDATE_RATE,
  };
};
