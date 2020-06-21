import { selector } from "recoil";
import locationState from '../index';
import { getWeatherForCity } from "../../../services/openweathermap";

export const fetchForecast = selector({
    key: 'fetchForecast',
    get: async ({ get }) => {
        const location = get(locationState);
        if (location !== '') {
            try {
                const forecast = await getWeatherForCity(location);
                return forecast;
            } catch(err){
                return {error:err}
            }
        } else {
            return {list:[]}
        }
    }
});

export default fetchForecast;