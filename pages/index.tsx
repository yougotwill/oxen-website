import { GetStaticProps, GetStaticPropsContext } from 'next';
import classNames from 'classnames';

import { IPost } from '../types/cms';
import { CMS } from '../constants';
import { CmsApi } from '../services/cms';
import generateRSSFeed from '../utils/rss';
import {
  fetchCurrentPrice,
  fetchActiveNodes,
  fetchCoinsLocked,
} from '../services/oxenObserver';

import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats, { StatsProps } from '../components/sections/Stats';
import Products from '../components/sections/Products';
import Privacy from '../components/sections/Privacy';
import GetInvolved from '../components/sections/GetInvolved';
import Footer from '../components/navigation/Footer';

export default function Index(props: StatsProps) {
  const { currentValue, coinsLocked, serviceNodes } = props;

  return (
    <div className={classNames('relative bg-alt')}>
      <Hero />
      <About />
      <Stats
        currentValue={currentValue}
        coinsLocked={coinsLocked}
        serviceNodes={serviceNodes}
      />
      <Products />
      <Privacy />
      <GetInvolved />
      <Footer />
    </div>
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

  const currentValue = await fetchCurrentPrice();
  const coinsLocked = await fetchCoinsLocked();
  const serviceNodes = await fetchActiveNodes();

  return {
    props: { currentValue, coinsLocked, serviceNodes },
    revalidate: CMS.CONTENT_REVALIDATE_RATE,
  };
};
