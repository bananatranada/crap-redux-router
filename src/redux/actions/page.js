export const PAGE_SET_IS_LOADED = 'PAGE_SET_PAGE_LOADED';

export const setPageLoaded = isPageLoaded => ({
  type: PAGE_SET_IS_LOADED,
  isPageLoaded,
});

export const PAGE_INIT_PAGE_HOME = 'PAGES_INIT_PAGE_HOME';

export const initPageHome = () => ({
  type: PAGE_INIT_PAGE_HOME,
});
