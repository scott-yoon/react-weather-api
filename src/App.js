import React from 'react';
import { Link, Route } from 'react-router-dom'
import WeatherCurrent from './component/WeatherCurrent';
import WeatherCurrentRedux from './component/WeatherCurrentRedux';
function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">현재 날씨</Link>
        </li>
        <li>
          <Link to="/redux">데일리 날씨</Link>
        </li>
      </ul>
      <Route path="/" exact={true} component={WeatherCurrent} />
      <Route path="/redux" component={WeatherCurrentRedux} />
    </>
  );
}

export default App;
