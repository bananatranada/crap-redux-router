export const PAGE_SET_IS_LOADED = 'PAGE_SET_IS_LOADED';

export const pageSetIsLoaded = isPageLoaded => ({
  type: PAGE_SET_IS_LOADED,
  isPageLoaded,
});

export const PAGE_INIT_HOME = 'PAGE_INIT_HOME';

export const pageInitHome = () => ({
  type: PAGE_INIT_HOME,
});
