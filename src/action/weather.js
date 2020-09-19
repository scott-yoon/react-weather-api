const FETCH_WEATHER = 'FETCH_WEATHER'

// action에서 사용할 메소드
export const getWeather = weather => ({
  type: FETCH_WEATHER,
  data: weather
});