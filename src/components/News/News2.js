import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

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

      <ul>
        {news.map((n) => {
          return (
            <li>{n.title}</li>
          )
        })}
      </ul>
    </InfiniteScroll >
  )
}

export default News2