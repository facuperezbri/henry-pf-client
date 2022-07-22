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
      <div className={styles.columns_3_2_1}>
      { news.map((news) => 
        <div className={styles.card_news} key={news.title}>
          <img className={styles.img_new} src={news.urlToImage} alt={news.urlToImage} width={200}/>
          <h1 className={styles.title}>{news.title}</h1>
          <p>{news.content}</p>
        </div>
        )}
      </div>
    </div>
  )
}

export default NewsComponent
