import MovieList from '@/components/movies/MovieList'
import MovieSearcher from '@/components/movies/MovieSearcher'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <>
      <MovieSearcher />
      <MovieList />
      <Outlet />
    </>
  )
}
