import axios from 'axios';
export const getWeatherForCity = async (city) => {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://api.openweathermap.org/data/2.5/forecast',
            params: {
                q: city,
                units:'metric',
                appid:process.env.REACT_APP_KEY
            }
        });
        return response.data;
    } catch(err){
        throw Error(err);
    }
}
