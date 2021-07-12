// DUCKS 패턴으로 가!

// 1. 액션 타입

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 2. 액션 생성 함수
export const increase = () => ({
  type: INCREASE
});

export const decrease = () => ({
  type: DECREASE
});

// 3. 초기값
const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}