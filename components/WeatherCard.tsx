'use client';

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { weatherCodeToDescription, weatherIconMap } from '#/lib/constants';

type WeatherCardProps = {
  location: string;
  latitude: number;
  longitude: number;
};

type WeatherData = {
  weatherDescription: string;
  weatherIcon: StaticImageData | null;
  highestTemperature: number;
  lowestTemperature: number;
  currentTemperature: number;
};

// TODO: Add a spinning loader while data is being fetched using `react-ts-loaders`
const WeatherCard: React.FC<WeatherCardProps> = ({ location, latitude, longitude }) => {
	const [data, setData] = useState<WeatherData>({
    weatherDescription: '',
    weatherIcon: null,
    highestTemperature: 0,
    lowestTemperature: 0,
    currentTemperature: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
        );
        const result = await response.json();

        const weatherCode = result.daily.weathercode[0];
        const highestTemperature = result.daily.temperature_2m_max[0];
        const lowestTemperature = result.daily.temperature_2m_min[0];

        // I'm using the average here because there's no exact daily temperature for a location on Open Meteo
        const currentTemperature = (highestTemperature + lowestTemperature) / 2;

        const weatherDescription = weatherCodeToDescription[weatherCode];
        const weatherIcon = weatherIconMap[weatherCode];

        setData({
          weatherDescription,
          weatherIcon,
          highestTemperature,
          lowestTemperature,
          currentTemperature
        });
      } catch (error) {
        console.error('An error occurred while fetching weather data :>>', error);
      }
    }

    fetchData();
  }, [latitude, longitude]);

	return (
		<div className="weather-card">
			<div className='left-side'>
				<h3>{data.currentTemperature.toFixed(1)}°</h3>
				<div>
					<p className='high-low'>H: {data.highestTemperature}°C&nbsp;&nbsp;L: {data.lowestTemperature}°C</p>
					<p>{location}</p>
				</div>
			</div>
			<div className='right-side'>
				{data.weatherIcon && (
					<Image src={data.weatherIcon} alt={data.weatherDescription} height={150} />
				)}
				<p>{data.weatherDescription}</p>
			</div>
		</div>
  );
}

export default WeatherCard;
