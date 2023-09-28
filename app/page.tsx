'use client';

import WeatherCard from '#/components/WeatherCard';
import { defaultLocations } from '#/lib/constants';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <main className='my-5'>
      <Container>
        <Row>
          {defaultLocations.map(location => (
            <Col key={location.location} lg={6} md={9} sm={12} className='mb-4 mx-auto'>
              <WeatherCard 
                location={location.location}
                latitude={location.latitude}
                longitude={location.longitude}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* <div className='position-fixed bottom-0 end-0 p-3'>
        <div className="mb-3">
          <Button variant="secondary" className={`${styles['icon-button']} mb-2`}>
            🌙
          </Button>
        </div>
        <div className="mb-3">
          <Button variant="secondary" className={`${styles['icon-button']} mb-2`}>
            ⚙️
          </Button>
        </div>
        <div>
          <Button variant="secondary" className={`${styles['icon-button']} mb-2`}>
            ➕
          </Button>
        </div>
      </div> */}
    </main>
  );
}

export default Home;
