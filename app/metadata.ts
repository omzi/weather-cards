import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Weather Cards',
    short_name: 'Weather Cards',
    description: 'A dynamic weather card application built with Next.js 13 and Open Meteo API 😍⚡.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      },
    ],
  };
}
