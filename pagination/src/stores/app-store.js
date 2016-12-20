import { store } from 'hacksaw';
import axios from 'axios';

class AppStore {
  static fetch() {
    if (this.all.length) return;

    this.set({ isLoading: true });

    axios.get('/generate').then(({ data }) => {    
      this.put(data);
      this.set({ isLoading: false });
    });
  }
}

export default store(AppStore);
