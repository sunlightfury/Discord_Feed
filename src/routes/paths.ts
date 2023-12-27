// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  DISCORDFEED: '/discordfeed',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    one: `${ROOTS.DASHBOARD}/one`,
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      six: `${ROOTS.DASHBOARD}/group/six`,
      seven: `${ROOTS.DASHBOARD}/group/seven`,
    },
  },
  // DISCORD FEED
  discordfeed: {
    root: ROOTS.DISCORDFEED,
    one: `${ROOTS.DISCORDFEED}/one`,
    two: `${ROOTS.DISCORDFEED}/two`,
    three: `${ROOTS.DISCORDFEED}/three`,
  },
};
