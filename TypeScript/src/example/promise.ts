// 1) Pending - 대기
// 2) Fulfilled - 이행
// 3) Rejected - 거부

const promise = new Promise((resolve, reject) => {
  // resolve 함수 호출될 때까지 대기
  setTimeout(() => {
    resolve()
  }, 1000)
})

function fetchMovies(searchText) {
  const promise = new Promise((resolve, reject) => {
    if (!searchText || !searchText.trim()) {
      reject(new Error('검색어가 없어요~'))
    }
    setTimeout(() => {
      //   resolve(123) // 이행
      resolve([{ title: '어벤져스' }])
    }, 1000)
  })
  return promise
}

try {
  const res = await fetchMovies('avengers')
  console.log(res)
} catch (error) {
  console.log(error.message)
}
