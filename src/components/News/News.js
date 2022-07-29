import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

import styles from './News.module.css'

const News2 = () => {

  const getNews = async ({ pageParam = 1 }) => {
    const info = await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=66b54c0b1d0444a48de1291d57f5e137&pageSize=10&page=${pageParam}`)
    const data = info.data.articles
    return data
  }

  const { data, error, isLoading, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(['news'], getNews, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 10) {
        return pages.length + 1
      } else {
        return undefined
      }
    }
  })

  const news = data?.pages.reduce((prevNews, pages) => prevNews.concat(pages)) ?? []

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <InfiniteScroll
      dataLength={news.length}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}>
      <div className={styles.boxContainer}>
        <div className={styles.columns_3_2_1}>
          {news.map((news) =>
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
    </InfiniteScroll >
  )
}

export default News2