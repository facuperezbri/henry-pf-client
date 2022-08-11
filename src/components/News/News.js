import React, {  useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

import styles from './News.module.css'

import Card from '../uiComponents/Card'

import loading from '../../assets/spinner/spinner.svg'

const News2 = () => {

  

  const [search, setSearch] = useState('')

  //---------------------------------------------------------------------------------------------------------------
  const getNews = async ({ pageParam = 1 }) => {
    const info = await axios.get(`${process.env.REACT_APP_API_URL}/api/currency/news/${pageParam}`)
    const data = info.data
    console.log(info)
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

  //sdfsfdssdffdsdfdfsdffrefrfdsdfsfdgfdfg
  
  const ss = news?.filter((e) => {
    return (
      e?.title?.toLowerCase().includes(search.toLowerCase()) ||
      e?.author?.toLowerCase().includes(search.toLowerCase()) 
      )
    })
    
    if (isLoading) {
      return (
        <div className={styles.detailContainer}>
          <div className={styles.loading} >
            <img src={loading} alt="Loading" />
          </div>
        </div>)
    }
 
  return (
    <div className={styles.detailContainer}>
      <h1 className='text-5xl mb-8 font-bold flex justify-center'>Financial News</h1>
      <h6 className='flex justify-center'>Get the latest news about</h6>
      <h6 className='flex justify-center'>international finances and economy.</h6>

      <div className={styles.input}>
        <input style={{ color: "black", border: "solid 1px black" }} onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder="Search News" />
      </div>
      <InfiniteScroll
        dataLength={news.length}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}>
        <div className={styles.boxContainer}>
          <div className={styles.columns_3_2_1}>
            {ss.length > 0 ? ss.map((news) =>
              <a key={news.url} href={news.url} target="_blank" rel="noreferrer">
                <Card className={styles.card_news} key={news.title}>
                  <img className={styles.img_new} src={news.urlToImage} alt={news.urlToImage} width={200} />
                  <h1 className={styles.title}>{news.title}</h1>
                  <p>{news.content}</p>
                </Card>
              </a>
            ) : <h1 style={{ fontSize: "2rem" }}>No results found</h1>}
          </div>
        </div>
      </InfiniteScroll >
    </div>
  )
}

export default News2