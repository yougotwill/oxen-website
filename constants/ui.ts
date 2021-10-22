// https://tailwindcss.com/docs/responsive-design
import tailwindConfig from '../tailwind.config.js';

function makeNumber(input: string) {
  return Number(input.split('px')[0]);
}

const UI = {
  MOBILE_BREAKPOINT: makeNumber(tailwindConfig.theme.screens.mobile),
  TABLET_BREAKPOINT: makeNumber(tailwindConfig.theme.screens.tablet),
  DESKTOP_BREAKPOINT: makeNumber(tailwindConfig.theme.screens.desktop),
  XLARGE_BREAKPOINT: makeNumber(tailwindConfig.theme.screens.xl),
  HUGE_BREAKPOINT: makeNumber(tailwindConfig.theme.screens.huge),
  ENORMOUS_BREAKPOINT: makeNumber(tailwindConfig.theme.screens.enormous),
  MAX_CONTENT_WIDTH: 1100,
  MAX_ARTICLE_WIDTH: 900,
  PAGE_CONTAINED_PADDING_VW: 5,

  HEADER_HEIGHT_PX: 50,
  SIDE_MENU_SIDE_BAR_WIDTH_PX: 40,

  USER_QUERY_404_MAX_LEN: 500,

  Z_INDEX_HEADER: 1000,
  Z_INDEX_SEARCH_OVERLAY: 20000,
  Z_INDEX_HEADER_SEARCH: 20001,
  Z_INDEX_SEARCH_DROPDOWN: 20002,
  Z_INDEX_MODAL_OVERLAY: 33333,

  ARTICLE: {
    TITLE_MAX_WIDTH_REM: 45,
  },
};

export default UI;
