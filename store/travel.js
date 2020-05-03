export const state = () => ({
  list: [],
});

export const mutations = {
  saveData(store, state) {
    const storeData = store;
    storeData.list = [...state];
  },
};
