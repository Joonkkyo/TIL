// Export / 모듈 내보내기
// 1) Default Export / 기본 내보내기
// - 가져오는 곳에서 이름을 만듦
// - 1개 데이터 내보내기 가능
// 2) Named Export / 이름 내보내기
// - 내보내는 곳에서 이름을 필수로 만듦
// - 여러개 데이터 내보내기 가능

// 1) Default Export
// export default function () {}
export default 123 // import abc from './abc'

// 2) Named Export
export 123 // import { abc as abc123} from './abc'