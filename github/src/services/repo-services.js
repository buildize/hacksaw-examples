import axios from 'axios';

export default class RepoStore {
  static fetch(viewStore, login) {
    if (viewStore.repos.all.length) return;
    viewStore.set({ isLoading: true });

    axios.get(`/users/${login}/repos`).then(({ data }) => {
      viewStore.repos.put(data);
      viewStore.set({ isLoading: false });
    });
  }
}
