export const PAGE_SET_IS_LOADED = 'PAGE_SET_IS_LOADED';
export const PAGE_INIT_HOME = 'PAGE_INIT_HOME';

export function pageSetIsLoaded(isPageLoaded) {
  return {
    type: PAGE_SET_IS_LOADED,
    payload: {
      isPageLoaded,
    },
  };
}

export function pageInitHome() {
  return {
    type: PAGE_INIT_HOME,
  };
}
