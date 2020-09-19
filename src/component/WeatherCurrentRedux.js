import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getWeather } from '../action/weather';

function WeatherCurrentRedux() {
  const [city, setCity] = useState('');
  const [key, setKey] = useState('30c62ac2026d1b23885f88ee7d8d98a8');

  // redux의 selector (state값 getter)와 dispatch 설정
  const weather = useSelector(state => state.weather);
  const dispatch = useDispatch();

  const onChangeCity = (e) => {
    setCity(e.target.value);
    getWeather()
  }

  const onChangeKey = (e) => {
    setKey(e.target.value);
  }

  const  fetchWeatherAsync = async () => {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: key
      }
    });
    dispatch(getWeather(response.data.weather));
  }

  return(
    <>
      <input placeholder="도시명" onChange={onChangeCity} value={city} />
      <input placeholder="api키" onChange={onChangeKey} value={key} />
      <button onClick={fetchWeatherAsync}>날씨 조회</button>
      <div>
        <b>response value</b>

        {/*<ul>*/}
        {/*  {weather.map(item => (*/}
        {/*    <li key={item.id}>*/}
        {/*      {item.main}, {item.description}, {item.icon}*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </div>
    </>
  )
}

export default WeatherCurrentRedux;