import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './news.css';
import logo from '../../images/logo.jpg';
import { motion } from 'framer-motion';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsdata.io/api/1/news?country=lb&category=top&language=en&apikey=pub_32760fc2f024b9100b38deea29a08c4851469')
      .then(response => response.json())
      .then(data => {
        setArticles(data.results);
        data.results.forEach(saveArticleToDatabase);
      });
  }, []);

  function limitDescription(description, wordLimit = 10) {
    if (!description) return '';
    const words = description.split(' ');
    if (words.length <= wordLimit) return description;
    return words.slice(0, wordLimit).join(' ') + '...';
  }

  const saveArticleToDatabase = async (article) => {
    try {
      const response = await fetch('http://localhost:8000/save-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
      });

      if (response.ok) {
        console.log('Article saved to the database successfully');
      } else {
        console.error('Failed to save article to the database');
      }
    } catch (error) {
      console.error('Error saving article to the database:', error);
    }
  };

  return (
    <motion.div
      className="news"
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        type: "tween",
        duration: 0.5
      }}
      variants={{
        initialState: {
          opacity: 0
        },
        animateState: {
          opacity: 1
        },
        exitState: {
          opacity: 0
        }
      }}
    >
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
    </motion.div>
  );
}

export default News;
