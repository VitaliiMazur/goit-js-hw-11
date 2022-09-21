export function fetchImages(query) {
  return fetch(
    `https://pixabay.com/api?key=30082189-fb5a0b1dd2fb2cd96e9007a4e&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
