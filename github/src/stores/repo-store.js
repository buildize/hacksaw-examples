import { store } from 'hacksaw';
import axios from 'axios';

class RepoStore {
  static fetch(login) {
    if (this.all.length) return;
    this.set({ isLoading: true });

    axios.get(`/users/${login}/repos`).then(({ data }) => {
      this.put(data);
      this.set({ isLoading: false });
    });
  }
}

export default store(RepoStore);
