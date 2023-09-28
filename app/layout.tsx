import '#/styles/fonts.css';
import '#/styles/app.css';
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: 'Weather Cards',
  description: 'A dynamic weather card application built with Next.js 13 and Open Meteo API 😍⚡.'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
