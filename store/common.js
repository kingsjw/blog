export const state = () => ({
  isMobile: false,
});

export const mutations = {
  changeDevice(state, isMobile) {
    const storeData = state;
    storeData.isMobile = isMobile;
  },
};
