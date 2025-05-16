import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useOutlet, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'

export default function Default() {
  const outlet = useOutlet()
  const location = useLocation()
  return (
    <>
      <Header /> {/* 헤더는 고정 */}
      <AnimatePresence>
        {/* 모션 컴포넌트 적용 */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: 'absolute' }}
          transition={{ duration: 0.3 }}>
          {outlet}
        </motion.div>
      </AnimatePresence>
      {/* 헤더 아래 내용은 유동적 */}
      <Footer /> {/* 푸터는 고정 */}
    </>
  )
}
