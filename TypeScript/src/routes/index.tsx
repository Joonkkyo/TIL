// routes: 페이지 관리, 내비게이션 구현시 필요
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from '@/routes/layouts/Default'
import EmptyLayout from '@/routes/layouts/Empty'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'
import Movies from '@/routes/pages/Movies'
import MovieDetails from '@/routes/pages/MovieDetails'
import Todos from '@/routes/pages/Todos'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home /> // 메인페이지로 접속하면 해당 요소를 보여준다
      },
      {
        path: '/about',
        element: <About /> // */about으로 접속하면 해당 요소를 보여준다
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/movies/:movieId', // movieId가 주소 변수로 사용됨 (동적 세그먼트))
        element: <MovieDetails />
      }
    ]
  },
  {
    element: <EmptyLayout />,
    children: [
      {
        path: '/todos',
        element: <Todos />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}

// https://heropy.dev/
// https://heropy.dev/about
