import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      isLoading: false,
      message: '',
      movies: [] as Movies // 단언
    },
    (set, get) => ({
      setSearchText: (searchText: string) => {
        set({ searchText })
      },
      fetchMovies: async () => {
        const { searchText, isLoading } = get()
        if (!searchText.trim()) return
        if (isLoading) return
        set({ isLoading: true, message: '', movies: [] })
        await new Promise(resolve => setTimeout(resolve, 3000)) // 3초 대기 후 API 호출
        try {
          const {
            data: { Search: movies = [], Response, Error }
          } = await axios(
            `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
          )
          if (Response === 'False') {
            set({ message: Error, isLoading: false })
            return
          }

          set({ movies, isLoading: false })
          if (!movies.length) {
            set({ message: '검색된 결과가 없습니다.' })
          }
        } catch (error) {
          if (error instanceof Error) {
            set({ message: error.message, isLoading: false })
          }
        }
        // const { Search: movies = [], Response, Error } = await res.json()
      }
    })
  )
)
