import { titleCase } from '@/utils/text';

export interface IMetadata {
  DESCRIPTION: string;
  TYPE?: string;
  CANONICAL_URL?: string;
  OG_IMAGE?: {
    URL: string;
    WIDTH: number;
    HEIGHT: number;
    ALT: string;
  };
  TAGS?: string[];
  ARTICLE_SECTION?: string;
  PUBLISHED_TIME?: string;
}

export function generateTitle(prefix: string) {
  return prefix && prefix.length > 0
    ? `${titleCase(prefix)} - ${METADATA.TITLE}`
    : METADATA.TITLE;
}

export function generateURL(prefix: string) {
  return prefix ? `${METADATA.HOST_URL}${prefix}` : METADATA.HOST_URL;
}

const METADATA = {
  HOST_URL:
    process.env.NEXT_PUBLIC_SITE_ENV === 'production'
      ? 'https://oxen.io'
      : 'https://staging.oxen.io',
  SITE_NAME: 'Oxen',
  TITLE: 'Oxen | Privacy made simple.',
  DESCRIPTION:
    'Oxen is built by the OPTF, a passionate team of advocates, creatives, and engineers building a world where the internet is open, software is free and accessible, and your privacy is protected. The OPTF also builds other platforms using Oxen technology, and supports other developers in building on Oxen.',
  TAGS: [
    'Privacy',
    'decentralisation',
    'decentralised',
    'Open Source',
    'Private messaging',
    'Onion routing',
    'Cryptocurrency',
    'Digital finance',
    'Privacy Tools',
  ],
  OG_TYPE: 'website',
  OG_IMAGE: {
    URL: '/site-banner.png',
    WIDTH: 800,
    HEIGHT: 450,
    ALT: 'Oxen Logo Blue Background',
  },
  LOCALE: 'en_US',
  FAVICON: {
    MEDIUM: '/favicon-32x32.png',
    SMALL: '/favicon-16x16.png',
    APPLE_TOUCH_ICON: '/apple-touch-icon.png',
  },
  MANIFEST: '/site.webmanifest',
  MASK_ICON: { PATH: '/safari-pinned-tab.svg', COLOR: '#5bbad5' },
  MSAPPLICATION_TILECOLOR: '#343132',
  THEME_COLOR: '#ffffff',
  TWITTER_CREATOR: 'Oxen_io',
  ITUNES_ID: 'app-id=1547745078',
  404: {
    DESCRIPTION: 'It looks like the link pointing here was faulty.',
  },
  BLOG_PAGE: {
    TYPE: 'article',
    DESCRIPTION: "View Oxen's Blog Updates Here",
  },
  TAG_PAGE: {
    TYPE: 'article',
    DESCRIPTION: "View Oxen's Blog Updates Sorted By Tag Here",
  },
  ROADMAP_PAGE: {
    DESCRIPTION: "View Oxen's plan for the future here.",
  },
  FAQ_PAGE: {
    DESCRIPTION: 'View Some Frequently Asked Questions here',
    OG_IMAGE: {
      URL: '/img/faq.png',
      WIDTH: 1920,
      HEIGHT: 1080,
      ALT: 'Question mark with server boxes surrounding it',
    },
  },
  SESSION_PAGE: {
    TITLE: 'Session Private Messenger',
    DESCRIPTION:
      'Session is a private messenger that aims to remove any chance of metadata collection by routing all messages through an onion routing network.',
    OG_IMAGE: {
      URL: '/img/session.png',
      WIDTH: 960,
      HEIGHT: 510,
      ALT:
        'Two phones next to each other. One showing the Session logo and the other showing a conversation.',
    },
  },
};

export default METADATA;
