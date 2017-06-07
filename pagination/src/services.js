import axios from 'axios';

export default {
  fetch(viewStore) {
    if (viewStore.items.first) return;

    viewStore.set({ isLoading: true });

    axios.get('/generate').then(({ data }) => {
      viewStore.items.put(data);
      viewStore.set({ isLoading: false });
    });
  }
}
