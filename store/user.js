export const state = () => ({
  isLogin: false,
});

export const mutations = {
  loginCheck(store, flag) {
    const storeState = store;
    storeState.isLogin = flag !== null && flag !== undefined && flag !== '';
    // console.log(storeState.isLogin);
  },
};
