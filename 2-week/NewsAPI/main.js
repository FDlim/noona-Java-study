const API_KEY = "3168ee9b3c9d45d6b57b5fb04d1b6f37";
let news = [];
const getLatestNews = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  // new URL() 안에 API를 받아오면 알아서 객체로 필요한 요소들을 정리해줌
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log(news);
};
getLatestNews();
