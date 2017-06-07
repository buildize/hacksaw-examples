import axios from 'axios';

export default class UserServices {
  static search(viewStore, keyword, location, language) {
    if (viewStore.users.all.length) return;
    viewStore.set({ isLoading: true });

    let queryArray = [keyword];
    if (location) queryArray.push(`location:${location}`);
    if (language) queryArray.push(`language:${language}`);
    const params = { q: queryArray.join('+') };

    axios.get(`/search/users?q=${queryArray.join('+')}`).then(({ data: { items } }) => {
      viewStore.users.put(items);
      viewStore.set({ isLoading: false });
    });
  }

  static get(viewStore, login) {
    axios.get(`/users/${login}`).then(({ data }) => {
      viewStore.users.put(data);
      viewStore.set({ isLoading: false });
    });
  }
}
