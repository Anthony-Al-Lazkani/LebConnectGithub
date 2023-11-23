import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './news.css';
import logo from '../../images/logo.jpg';
function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsdata.io/api/1/news?country=lb&category=top&language=en&apikey=pub_32760fc2f024b9100b38deea29a08c4851469')
      .then(response => response.json())
      
      .then(data => setArticles(data.results));
  }, []);
  function limitDescription(description, wordLimit = 10) {
    if (!description) return '';
    const words = description.split(' ');
    if (words.length <= wordLimit) return description;
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  


  return (
    <div className="news">
    <h1>Latest News</h1>
    <div className="cards">
      {articles && articles.map(article => (
        <Card key={article.url}>
          <Card.Img variant="top" src={logo} className="card-img" />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
            {limitDescription(article.description)}
            </Card.Text>
            <Card.Link href={article.link}>Read More</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  </div>
  );
}

export default News;