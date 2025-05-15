import Header from '@/components/Header'
import { Outlet } from 'react-router'
import Footer from '@/components/Footer'

export default function Default() {
  return (
    <>
      <Header /> {/* 헤더는 고정 */}
      <Outlet /> {/* 헤더 아래 내용은 유동적 */}
      <Footer /> {/* 푸터는 고정 */}
    </>
  )
}
