import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const FacilitiesSection = () => {
  const facilities = [
    {
      title: 'Library',
      description: 'A well-stocked library with a wide range of books for students of all ages.',
      icon: '📚',
    },
    {
      title: 'Science Labs',
      description: 'State-of-the-art science labs equipped for practical experiments and research.',
      icon: '🔬',
    },
    {
      title: 'Sports Facilities',
      description: 'Modern sports facilities including a playground, basketball court, and swimming pool.',
      icon: '⚽',
    },
    {
      title: 'Computer Lab',
      description: 'A dedicated computer lab with internet access for computer literacy and research.',
      icon: '💻',
    },
    {
      title: 'Art Studio',
      description: 'A creative space for students to explore various forms of art and express their creativity.',
      icon: '🎨',
    },
    {
      title: 'Outdoor Education',
      description: 'Opportunities for outdoor education, nature walks, and environmental awareness programs.',
      icon: '🌳',
    },
    {
      title: 'Music Room',
      description: 'A dedicated music room with instruments for students to learn and practice music.',
      icon: '🎵',
    },
    {
      title: 'Cafeteria',
      description: 'A clean and hygienic cafeteria providing nutritious meals for students and staff.',
      icon: '🍔',
    },
    {
      title: 'Friendly Learning Environment',
      description: 'A supportive and inclusive environment that fosters collaboration and positive learning experiences.',
      icon: '🌈',
    },
  ];

  return (
    <div style={{ background: '#f0f2f5', padding: '80px 0' }}>
      <div style={{ textAlign: 'center' }}>
        <Title level={2}>Facilities and Services</Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', marginTop: '40px' }}>
        {facilities.map((facility, index) => (
          <Card key={index} style={{ width: 300 }} hoverable>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{facility.icon}</div>
            <Title level={4}>{facility.title}</Title>
            <p>{facility.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesSection;
