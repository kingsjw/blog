export const state = () => ({
  travel: [],
  movie: [],
});

export const mutations = {
  saveData(store, dataObj) {
    const storeData = store;
    const key = Object.keys(dataObj)[0];
    storeData[key] = dataObj[key];
    // console.log(storeData);
  },
};
