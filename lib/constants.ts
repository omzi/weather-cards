import { StaticImageData } from 'next/image';
import sun from '#/public/assets/icons/weather/0-sun.png';
import mainlySunny from '#/public/assets/icons/weather/1-mainly-sunny.png';
import partlyCloudy from '#/public/assets/icons/weather/2-partly-cloudy.png';
import cloudy from '#/public/assets/icons/weather/3-cloudy.png';
import foggy from '#/public/assets/icons/weather/45-foggy.png';
import rimeFog from '#/public/assets/icons/weather/48-rime-fog.png';
import lightDrizzle from '#/public/assets/icons/weather/51-light-drizzle.png';
import drizzle from '#/public/assets/icons/weather/53-drizzle.png';
import heavyDrizzle from '#/public/assets/icons/weather/55-heavy-drizzle.png';
import lightFreezingDrizzle from '#/public/assets/icons/weather/56-light-freezing-drizzle.png';
import freezingDrizzle from '#/public/assets/icons/weather/57-freezing-drizzle.png';
import lightRain from '#/public/assets/icons/weather/61-light-rain.png';
import rain from '#/public/assets/icons/weather/63-rain.png';
import heavyRain from '#/public/assets/icons/weather/65-heavy-rain.png';
import lightFreezingRain from '#/public/assets/icons/weather/66-light-freezing-rain.png';
import freezingRain from '#/public/assets/icons/weather/67-freezing-rain.png';
import lightSnow from '#/public/assets/icons/weather/71-light-snow.png';
import snow from '#/public/assets/icons/weather/73-snow.png';
import heavySnow from '#/public/assets/icons/weather/75-heavy-snow.png';
import snowGrains from '#/public/assets/icons/weather/77-snow-grains.png';
import lightShowers from '#/public/assets/icons/weather/80-light-showers.png';
import showers from '#/public/assets/icons/weather/81-showers.png';
import heavyShowers from '#/public/assets/icons/weather/82-heavy-showers.png';
import lightSnowShowers from '#/public/assets/icons/weather/85-light-snow-showers.png';
import snowShowers from '#/public/assets/icons/weather/86-snow-showers.png';
import thunderstorm from '#/public/assets/icons/weather/95-thunderstorm.png';
import lightThunderstormsWithHail from '#/public/assets/icons/weather/96-light-thunderstorms-with-hail.png';
import thunderstormWithHail from '#/public/assets/icons/weather/99-thunderstorm-with-hail.png';


export const defaultLocations = [
  {
    location: 'Lagos, Nigeria',
    latitude: 6.5244,
    longitude: 3.3792
  },
  {
    location: 'Zagreb, Croatia',
    latitude: 45.815,
    longitude: 15.9819
  },
  {
    location: 'Abu Dhabi, Emirates',
    latitude: 24.4539,
    longitude: 54.3773
  },
  {
    location: 'Washington, US',
    latitude: 38.9072,
    longitude: -77.0369
  },
  {
    location: 'Sydney, Australia',
    latitude: -33.8688,
    longitude: 151.2093
  },
  {
    location: 'Alberta, Canada',
    latitude: 53.9333,
    longitude: -116.5765
  },
  {
    location: 'Berlin, Germany',
    latitude: 52.52,
    longitude: 13.405
  },
];

export const weatherCodeToDescription: Record<number, string> = {
  0: 'Sunny',
  1: 'Mainly Sunny',
  2: 'Partly Cloudy',
  3: 'Cloudy',
  45: 'Foggy',
  48: 'Rime Fog',
  51: 'Light Drizzle',
  53: 'Drizzle',
  55: 'Heavy Drizzle',
  56: 'Light Freezing Drizzle',
  57: 'Freezing Drizzle',
  61: 'Light Rain',
  63: 'Rain',
  65: 'Heavy Rain',
  66: 'Light Freezing Rain',
  67: 'Freezing Rain',
  71: 'Light Snow',
  73: 'Snow',
  75: 'Heavy Snow',
  77: 'Snow Grains',
  80: 'Light Showers',
  81: 'Showers',
  82: 'Heavy Showers',
  85: 'Light Snow Showers',
  86: 'Snow Showers',
  95: 'Thunderstorm',
  96: 'Light Thunderstorms With Hail',
  99: 'Thunderstorm With Hail'
};


export const weatherIconMap: Record<number, StaticImageData> = {
  0: sun,
  1: mainlySunny,
  2: partlyCloudy,
  3: cloudy,
  45: foggy,
  48: rimeFog, // Closest Match: foggy
  51: lightDrizzle,
  53: drizzle,
  55: heavyDrizzle,
  56: lightFreezingDrizzle,
  57: freezingDrizzle,
  61: lightRain,
  63: rain,
  65: heavyRain,
  66: lightFreezingRain, // Closest Match: heavyRain
  67: freezingRain, // Closest Match: heavyRain
  71: lightSnow,
  73: snow,
  75: heavySnow,
  77: snowGrains,
  80: lightShowers,
  81: showers,
  82: heavyShowers,
  85: lightSnowShowers, // Closest Match: snow
  86: snowShowers,
  95: thunderstorm,
  96: lightThunderstormsWithHail, // Closest Match: thunderstorm
  99: thunderstormWithHail // Closest Match: thunderstorm
};
