import { store } from 'hacksaw';
import axios from 'axios';

class PostStore {
  static fetch() {
    this.set({ isLoading: true });

    axios.get('/posts').then(({ data }) => {
      this.clean().put(data);
      this.set({ isLoading: false });
    });
  }

  static get(id) {
    this.set({ isLoading: true });

    axios.get(`/posts/${id}`).then(({ data }) => {
      this.put(data);
      this.set({ isLoading: false });
    });
  }

  static save(post) {
    let promise;

    this.set({ isSaving: true });

    if (post.id) {
      promise = axios.patch(`/posts/${post.id}`, post);
    } else {
      promise = axios.post('/posts', post);
    }

    return promise.then(({ data }) => {
      this.put(data);
      this.set({ isSaving: false });
      return data;
    });
  }
}

export default store(PostStore);
