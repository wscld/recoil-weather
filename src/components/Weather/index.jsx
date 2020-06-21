import React from 'react'
import { useRecoilValue } from 'recoil';
import fetchForecast from '../../atoms/weather/selectors/forecast';
import './styles.scss'
import { formatTime } from '../../utils';

export const Weather = () => {
    const forecast = useRecoilValue(fetchForecast);

    return (
        <div className="weather-component">
            {forecast.list?forecast.list.map((item) => (
                <div className="item">
                    <div className="date">{formatTime(item.dt)}</div>
                    <div className="content">
                        <div className="icon"><img alt="" src={'http://openweathermap.org/img/wn/' + (item.weather[0].icon) +'@2x.png'} /></div>
                        <div>
                            <div className="temp">Temperatura: {item.main.temp}</div>
                            <div className="max-temp">Máxima: {item.main.temp_max}</div>
                            <div className="min-temp">Mínima: {item.main.temp_min}</div>
                        </div>
                    </div>
                </div>
            )):<div className="error">Não encontrado.</div>}
        </div>
    );
}

export default Weather;