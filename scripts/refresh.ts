import sources from "../shared/sources.json"

Promise.all(Object.keys(sources).map(id =>
  fetch(`https://news.dengchangdong.com/api/s?id=${id}`),
)).catch(console.error)
