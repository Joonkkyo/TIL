import { useState, useEffect } from 'react'
import './index.css'

export type Movies = Movie[]

// API 명세를 통하여 타입 정의 (https://transform.tools/json-to-typescript)
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

// React Hook(훅)
// useXXX <= Hook
// 컴포넌트 함수를 일반적으로 비동기 함수로 만들지 않음
// movies 내용이 변경되면 App 컴포넌트가 리렌더링 됨
export default function App() {
  const [movies, setMovies] = useState<Movies>([])

  async function fetchMovies() {
    const res = await fetch('https://omdbapi.com?apikey=7035c60c&s=avengers')
    const { Search } = await res.json()
    setMovies(Search)
  }

  // useEffect(실행할 함수, 의존성 배열)
  // 의존성 배열에 있는 값이 변경되면 실행할 함수를 실행
  // 컴포넌트가 준비되면 최초 1회 실행됨
  useEffect(() => {
    fetchMovies()
  }, []) // 빈 의존성 배열은 컴포넌트가 처음 마운트될 때만 실행

  return (
    <>
      <h1>영화 목록</h1>
      <ul>
        {movies.map(movie => {
          return <li key={movie.imdbID}>{movie.Title}</li>
        })}
      </ul>
    </>
  )
}
