import { create } from 'zustand'

export const useColorStore = create<{
  color: string
  setColor: (color: string) => void
}>(set => {
  return {
    color: 'red', // Zustand에서 함수 제외한 나머지 데이터 => 상태
    setColor: (color: string) => {
      // 액션
      set({
        color // color: color, 속성과 값이 같으면 축약 가능
      })
    }
  }
})
