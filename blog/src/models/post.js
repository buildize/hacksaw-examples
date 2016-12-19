import { model } from 'hacksaw';
import axios from 'axios';

class Post {
  static fetch() {
    this.set({ isLoading: true });

    axios.get('/posts').then(({ data }) => {
      this.clean().put(data);
      this.set({ isLoading: false });
    });
  }

  static get(id) {
    axios.get(`/posts/${id}`).then(({ data }) => {
      this.put(data);
    });
  }

  static save(post) {
    let promise;

    if (post.id) {
      promise = axios.patch(`/posts/${post.id}`, post);
    } else {
      promise = axios.post('/posts', post);
    }

    return promise.then(({ data }) => {
      this.put(data);
      return data;
    });
  }
}

export default model(Post);
