import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchParams } from 'react-router-dom'
import styles from './News.module.css'

const News2 = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get("filter") ?? ""

  const handleFilter = (e) => {
    setSearchParams({ filter: e.target.value })
  }
  //---------------------------------------------------------------------------------------------------------------
  const getNews = async ({ pageParam = 1 }) => {
    const apiKey = "66b54c0b1d0444a48de1291d57f5e137"
    const apiKey2 = "353f956d5ff749b18c24aed1332b0b8d"
    const info = await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey2}&pageSize=10&page=${pageParam}`)
    console.log(info)
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
    <div>
      <div className={styles.input}>
        <input value={filter} onChange={handleFilter} type="text" placeholder="Search News" />
      </div>
      <InfiniteScroll
        dataLength={news.length}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}>
        <div className={styles.boxContainer}>
          <div className={styles.columns_3_2_1}>
            {news.filter(e => {
              if (!filter) return true
              const title = e.title.toLowerCase()
              return title.includes(filter.toLowerCase())
            }).map((news) =>
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
    </div>
  )
}

export default News2