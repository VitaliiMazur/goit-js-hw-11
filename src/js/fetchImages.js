import axios from 'axios';

export class FetchImages {
  constructor() {
    this.page = 1;
    this.perPage = 40;
    this.query = '';
  }

  setQuery(newQuery) {
    this.query = newQuery;
    this.page = 1;
  }

  setNextPage() {
    this.page += 1;
  }

  getCurrentPage() {
    return this.page;
  }

  getPerPageAmount() {
    return this.perPage;
  }

  async getData() {
    const BASE_URL = 'https://pixabay.com/api/';
    const key = '30082189-fb5a0b1dd2fb2cd96e9007a4e';
    const url = `${BASE_URL}?key=${key}&q=${this.query}s&image_type=photo&per_page=${this.perPage}&page=${this.page}&orientation=horizontal&safesearch=true`;

    const res = await axios.get(url);
    const data = await res.data;
    return data;
  }
}
