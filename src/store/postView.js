export const state = () => ({
  data: {},
});

export const mutations = {
  saveData(store, postViewData) {
    const storeData = store.data;
    const id = postViewData.id;
    storeData[id] = postViewData;
    // console.log(storeData);
  },
};
