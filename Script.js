const API_KEY = "a1be73e6af2743c5b66a4ece6d999f00"
const url = "https://newsapi.org/v2/everything?q="

window.addEventListener('load', () => fetchNews("India"));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}