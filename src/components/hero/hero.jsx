import React from 'react';
import { Button, Typography } from 'antd';

const { Title, Text } = Typography;

const HeroSection = () => {
  return (
    <div style={{ background: '#f0f2f5', padding: '100px 0', display: 'flex', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', flex: 1 }}>
        <div>
        <Title style={{ fontSize: '3rem', color: '#333', marginBottom: '1rem' }}>Welcome to Shining Star English School</Title>
        </div>
        <div>
        <Text style={{ fontSize: '1.2rem', color: '#555', marginBottom: '1rem' }}>Providing quality education for over <span style={{backgroundColor: '#1890ff', color: 'white'}}>30 years</span></Text>
        </div>
        <div style={{marginTop: '6rem'}}>
        <Button type="primary" size="large" style={{ borderRadius: '30px', padding: '0 40px' }}>Learn More</Button>
        </div>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <img src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1685864808/school_jwqrdl.jpg" alt="School Image" style={{ width: '100%', height: '100%', maxWidth: '500px', borderRadius: '10px' }} />
      </div>
    </div>
  );
};

export default HeroSection;
