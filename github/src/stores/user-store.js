import { store } from 'hacksaw';
import axios from 'axios';

class UserStore {
  static search(keyword, location, language) {
    if (this.all.length) return;
    this.set({ isLoading: true });

    let queryArray = [keyword];
    if (location) queryArray.push(`location:${location}`);
    if (language) queryArray.push(`language:${language}`);
    const params = { q: queryArray.join('+') };

    axios.get(`/search/users?q=${queryArray.join('+')}`).then(({ data: { items } }) => {
      this.put(items);
      this.set({ isLoading: false });
    });
  }

  static get(login) {
    axios.get(`/users/${login}`).then(({ data }) => {
      this.put(data);
      this.set({ isLoading: false });
    });
  }
}

export default store(UserStore);
