const initialState = {
  weather: []
};

// reducer에서 사용할 메소드
export default function fetchWeather(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WEATHER':
      return {
        ...state,
        weather: [
          action.data
        ]
      }
    default:
      return state;
  }
}