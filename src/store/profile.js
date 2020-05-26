export const state = () => ({
  project: [],
});

export const mutations = {
  saveData(state, project) {
    const storeData = state;
    storeData.project = [...project];
  },
};
