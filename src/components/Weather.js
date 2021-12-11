import { useState, useEffect } from "react";

export default function Weather() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weather, setWeather] = useState('');
    const [icon, setIcon] = useState('50n')
    const [url, setUrl] = useState('')

    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Thiruvananthapuram,Kerala&appid=ad55a7aa0cc1cab5ff298dd34193a21b")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setWeather(result.weather[0].main);
              setIcon(result.weather[0].icon)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
          setUrl(`http://openweathermap.org/img/w/${icon}.png`)
      }, [weather, icon, url])

    return (
        <div>
            <h1>Weather Report</h1>
            <h2>{weather}</h2>
            <img src={url} alt="Could not render"/>
        </div>
    )
}
