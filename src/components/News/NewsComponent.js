import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './NewsComponent.module.css'


const NewsComponent = () => {
  const [news, setNews] = useState([])

  const getNews = async () => {
    const info = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=66b54c0b1d0444a48de1291d57f5e137')
    const data = info.data.articles
    setNews(data)
  }
  
  useEffect(() => {
    getNews()
  }, []);
  console.log(news)
  
  return (
    <div className={styles.boxContainer}>
      <h1>News</h1>
      { news.map((news) => 
        
        <div className={styles.Container} key={news.title}>
          <h1>{news.title}</h1>
          <h2>{news.source.name}</h2>
          <img src={news.urlToImage} alt={news.urlToImage} width={200}/>
          <p>{news.content}</p>
          </div>
        
      )}
    </div>
  )
}

export default NewsComponent
