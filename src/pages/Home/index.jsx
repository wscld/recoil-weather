import React, { Suspense } from 'react';
import { useRecoilState } from 'recoil';
import { locationState } from '../../atoms/weather';
import { useState } from 'react';
import Weather from '../../components/Weather';
import './styles.scss';

export const Home = () => {
    const [location, setLocation] = useRecoilState(locationState);
    const [input, setInput] = useState('');

    const handleSearch = () => {
        setLocation(input);
    }

    const handleChange = (text) => {
        setInput(text)
    }

    return (
        <div className="home-component">
            <div className="form">
                <input placeholder="cidade..." onChange={e => handleChange(e.target.value)}></input>
                <button onClick={handleSearch}> Procurar </button>
            </div>
            <Suspense fallback={<div className="loading">carregando...</div>}>
                <Weather />
            </Suspense>
            <div className="footer">API from <a href="http://openweathermap.org/" target="_blank">openweathermap</a></div>
        </div>
    );
}

export default Home;