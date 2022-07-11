import React from 'react'
import { useEffect } from 'react'
import { getNews } from '../service/api'
import { useState } from 'react'
import Article from './Article'
import InfiniteScroll from 'react-infinite-scroll-component';

const Articles = () => {
    const [news, setNews] = useState([])
    const [page,setPage] = useState(0)

    useEffect(() => {
        dailyNews()
    },[page])

    const dailyNews = async() => {
        const response = await getNews(page)
        setNews([...news,...response.data])
        console.log(response)
    }
  return (
    <InfiniteScroll
      dataLength={news.length}
      next={() => setPage(page => page+1)}
      hasMore={true}
    > 
      {
      news?.length > 0 && news.map(article => (
        <Article article={article}/>
      ))
      }
    </InfiniteScroll>
  )
}

export default Articles