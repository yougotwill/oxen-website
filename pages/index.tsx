import { GetStaticProps, GetStaticPropsContext } from 'next';
import Stats, { StatsProps } from '@/components/home/Stats';
import {
  fetchActiveNodes,
  fetchCoinsLocked,
  fetchCurrentPrice,
} from '@/services/oxenObserver';

import About from '@/components/home/About';
import { CMS } from '@/constants';
import { CmsApi } from '@/services/cms';
import GetInvolved from '@/components/home/GetInvolved';
import Hero from '@/components/home/Hero';
import { IPost } from '@/types/cms';
import Privacy from '@/components/home/Privacy';
import Products from '@/components/home/Products';
import classNames from 'classnames';
import generateRSSFeed from '@/utils/rss';

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
