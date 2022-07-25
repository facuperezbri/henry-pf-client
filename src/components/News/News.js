import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './News.module.css'


const NewsComponent = () => {
  const [news, setNews] = useState([])
  const [riesgo, setRiesgo] = useState([])

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

  useEffect(() => {
    getNews()
    getRP()
  }, []);

  const [local, setLocal] = useState(1)

  useEffect(() =>{
      setLocal(1)
  }, [news])
  function changeState (e) {
      setLocal(Number(e.target.id))
  }

  let firstPage = [];
  let elemsByPage = 8
  for (let i=1; i <= Math.ceil(news.length/elemsByPage); i++) {
      firstPage.push(i)
  }
  const sliceEnd = elemsByPage*local 
  const sliceBegin = sliceEnd - elemsByPage 
  const newsByPage = news.slice(sliceBegin,sliceEnd)
  
  const pages = firstPage.map((elem) => {
      return <li
      className={styles.pageNumber}
      key={elem}
      id={elem} 
      onClick={changeState} 
      >
          {elem}
          {/* <img
          className={style.imagen}
          id={elem}
          src={local === elem ? abierta : cerrada}
          alt="what?"
          >
          </img> */}
      </li>
  })












  return (
    <div className={styles.boxContainer}>
        <ul className={styles.paginas}>
          {pages}
        </ul>

      {/* <h1>News</h1><h2>Riesgo Pais: {riesgo.value}</h2> */}
      <div className={styles.columns_3_2_1}>
        {newsByPage.map((news) =>
          <a href={news.url} target="_blank" rel="noreferrer">
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
