import { store } from 'hacksaw';
import axios from 'axios';

export default class Services {
  static fetch(viewStore) {
    viewStore.set({ isLoading: true });

    axios.get('/posts').then(({ data }) => {
      viewStore.posts.clean();
      viewStore.posts.put(data);
      viewStore.set({ isLoading: false });
    });
  }

  static get(viewStore, id) {
    viewStore.set({ isLoading: true });

    axios.get(`/posts/${id}`).then(({ data }) => {
      viewStore.posts.put(data);
      viewStore.set({ isLoading: false });
    });
  }

  static save(viewStore, post) {
    let promise;

    viewStore.set({ isSaving: true });

    if (post.id) {
      promise = axios.patch(`/posts/${post.id}`, post);
    } else {
      promise = axios.post('/posts', post);
    }

    return promise.then(({ data }) => {
      viewStore.posts.put(data);
      viewStore.set({ isSaving: false });
      return data;
    });
  }
}
