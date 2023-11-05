
import React, { useState, useEffect } from 'react';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div className="news">
      <h1>Latest News</h1>
      <ul>
        {articles.map(article => (
          <li key={article.url}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
