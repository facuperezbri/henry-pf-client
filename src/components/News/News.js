import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './News.module.css'
import { useSearchParams } from 'react-router-dom'

const NewsComponent = () => {
  const [news, setNews] = useState([])
  const [riesgo, setRiesgo] = useState([])
  const[searchParams,setSearchParams] = useSearchParams()


  const filter = searchParams.get("filter") ?? ""

  const getRP = async () => {
    const info = await axios.get('http://localhost:4000/api/currency/riesgopais')
    const data = info.data
    setRiesgo(data)
  }
  const getNews = async () => {
    const info = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=66b54c0b1d0444a48de1291d57f5e137')
    const data = info.data.articles
    setNews(data)
  }
  const handleFilter= (e)=>{
    setSearchParams({filter:e.target.value})
  }

  useEffect(() => {
    getNews()
    getRP()
  }, []);
  console.log(news)

  return (
    <div className={styles.boxContainer}>
      <h1>News</h1><h2>Riesgo Pais: {riesgo.value}</h2>
      <input type="text" placeholder='Search' onChange={handleFilter}/>
      <div className={styles.columns_3_2_1}>
        {news?.filter(e=>{
          if(!filter) return true
          const title = e.title.toLowerCase()
          return title.includes(filter.toLowerCase())
        }).map((news) =>
          <a href={news.url} target="_blank">
            <div className={styles.card_news} key={news.title}>
              <img className={styles.img_new} src={news.urlToImage} alt={news.urlToImage} width={200} />
              <h1 className={styles.title}>{news.title}</h1>
              <p>{news.content}</p>
            </div>
          </a>
        )}
      </div>
    </div>
  )
}

export default NewsComponent
