import { ISideMenuItem } from '../components/navigation/SideMenu';
import { SideMenuItem } from '../state/navigation';

export interface IMenuItem {
  label: string;
  href: string;
  newTab: boolean;
  subtle: boolean;
  external: boolean;
  mobileMenuOnly?: boolean;
}

export interface INavItem {
  href: string;
  alt: string;
  target: '_self' | '_blank';
  rel?: string;
  items?: INavList;
}

interface INavList {
  [key: string]: INavItem; // key is what user sees
}

const NAV_ITEMS: INavList = {
  Products: {
    href: '/products',
    alt: 'Heading of Oxen Products',
    target: '_self',
    items: {
      Session: {
        href: '/products/session',
        alt: 'Link to product Session',
        target: '_self',
      },
      Lokinet: {
        href: '/products/lokinet',
        alt: 'Link to product Lokinet',
        target: '_self',
      },
    },
  },
  Learn: {
    href: '/learn',
    alt: 'Link to learning more about Oxen',
    target: '_self',
  },
  News: {
    href: '/news',
    alt: 'Link to News page',
    target: '_self',
  },
};

const airdropFinishedTimestamp = 1624975200000;
const shouldHideAirdropItem = Date.now() > airdropFinishedTimestamp;

// Hrefs are generated from Keys using slugify.
// Eg. WHO_ARE_WE -> /who-are-we
const SIDE_MENU_ITEMS = {
  [SideMenuItem.AIRDROP]: {
    id: 1,
    label: '$FLIP AIRDROP',
    href: 'https://airdrop.oxen.io',
    shouldHide: shouldHideAirdropItem,
  },
  [SideMenuItem.WHO_ARE_WE]: {
    id: 1,
    label: 'What is Oxen?',
    href: '/who-are-we',
  },
  [SideMenuItem.BUY_OXEN]: {
    id: 2,
    label: 'Why buy $OXEN?',
    href: '/buy-oxen',
  },
  [SideMenuItem.STAKE]: {
    id: 3,
    label: 'How do I stake $OXEN?',
    href: '/stake',
  },
  [SideMenuItem.USES]: {
    id: 4,
    label: 'Who uses Oxen?',
    href: '/uses',
  },
  [SideMenuItem.BUILD]: {
    id: 5,
    label: 'What can be built?',
    href: '/build',
  },
  [SideMenuItem.SESSION_LOKINET]: {
    id: 6,
    label: 'Session & Lokinet',
    href: '/session-lokinet',
  },
  [SideMenuItem.GET_INVOLVED]: {
    id: 7,
    label: 'Get involved',
    href: '/get-involved',
  },
  [SideMenuItem.ROADMAP]: {
    id: 8,
    label: "Oxen's 2021 roadmap",
    href: '/roadmap',
    hasOwnRoute: true,
  },
  [SideMenuItem.FAQ]: {
    id: 9,
    label: 'FAQ',
    href: '/faq',
    hasOwnRoute: true,
  },
} as { [name: string]: ISideMenuItem };

const MENU_ITEMS: IMenuItem[] = [
  {
    label: 'Blog',
    href: '/blog',
    newTab: false,
    subtle: false,
    external: false,
  },
  {
    label: 'Dev Updates',
    href: '/tag/dev-update',
    newTab: false,
    subtle: true,
    external: false,
  },
  {
    label: '$WOXEN',
    href: 'https://ethereum.oxen.io',
    newTab: false,
    subtle: false,
    external: true,
  },
  {
    label: 'Docs',
    href: '/docs',
    newTab: false,
    subtle: false,
    external: true,
  },
  {
    label: 'CoinGecko',
    href: 'https://www.coingecko.com/en/coins/oxen',
    newTab: true,
    subtle: false,
    external: true,
    mobileMenuOnly: true,
  },
  {
    label: 'Explorer',
    href: 'https://oxen.observer/',
    newTab: true,
    subtle: true,
    external: true,
  },
  {
    label: 'Downloads',
    href: '/downloads',
    newTab: false,
    subtle: true,
    external: true,
  },
];

const NAVIGATION = {
  NAV_ITEMS,
  MENU_ITEMS,
  SIDE_MENU_ITEMS,
  BLOG_REGEX: /^\/(blog|tag)/,
  POST_REGEX: /^\/(blog\/)(([\w-]{1,100})|(\[slug\]))$/,
};

export default NAVIGATION;
