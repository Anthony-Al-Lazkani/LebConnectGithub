import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './news.css';
import { motion } from 'framer-motion';
import axios from 'axios';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsdata.io/api/1/news?country=lb&category=top&language=en&apikey=pub_32760fc2f024b9100b38deea29a08c4851469')
      .then(response => response.json())
      .then(async data => {
        const articlesWithImages = await Promise.all(data.results.map(async article => {
          const image = await fetchImage(article.title, article.id);
          return { ...article, image };
        }));

        setArticles(articlesWithImages);
        articlesWithImages.forEach(saveArticleToDatabase);
      });
  }, []);

  async function fetchImage(title, articleId) {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: `${title} ${articleId}`,
          client_id: 'tSESqp1J4tgSJHlmwrcbRD5vqj9sSwjXH7WtUOOCW3U',
        },
      });

      console.log('Unsplash API Response:', response.data);

      const firstImage = response.data.results[0];
      return firstImage ? firstImage.urls.small : '';
    } catch (error) {
      console.error('Error fetching image:', error);
      return '';
    }
  }

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
            {article.image && <Card.Img variant="top" src={article.image} className="card-img" />}
            <Card.Body className="Card-TXT">
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
