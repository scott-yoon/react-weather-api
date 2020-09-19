import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherCurrent() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');
  const [key, setKey] = useState('30c62ac2026d1b23885f88ee7d8d98a8');

  // 조회 버튼을 통해 API 호출하기 때문에 useEffect 사용 안함
  // useEffect(() => {
  //
  // }, [])

  const onChangeCity = (e) => {
    setCity(e.target.value);
  }

  const onChangeKey = (e) => {
    setKey(e.target.value);
  }

  // Promise 객체로 처리할 경우
  const fetchWeather = () => {
    axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: key
      }
    }).then((response) => {
      console.log(response);
      setWeather(response.data.weather);
    })
  }

  // async await를 이요해서 처리할 경우
  const  fetchWeatherAsync = async () => {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: key
      }
    });
    console.log(response);
    setWeather(response.data.weather);
  }

  return(
    <>
      <input placeholder="도시명" onChange={onChangeCity} value={city} />
      <input placeholder="api키" onChange={onChangeKey} value={key} />
      <button onClick={fetchWeather}>날씨 조회</button>
      <div>
        <b>response value</b>
        <ul>
          {weather.map(item => (
            <li key={item.id}>
              {item.main}, {item.description}, {item.icon}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default WeatherCurrent;