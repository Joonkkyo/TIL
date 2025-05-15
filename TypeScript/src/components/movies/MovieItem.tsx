import { Link } from 'react-router'
import type { Movie } from '@/stores/movie'
import Image from '@/components/Image'

export default function MovieItem({ movie }: { movie: Movie }) {
  return (
    // alt: 대체 텍스트
    <div className="w-[200px]">
      <Image
        src={movie.Poster}
        width={200}
        height={300}
      />
      {/* /movies/영화id */}
      <Link to={`/movies/${movie.imdbID}`}>
        {movie.Title} / {movie.Year}
      </Link>
    </div>
  )
}
