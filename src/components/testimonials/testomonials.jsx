import React from 'react';
import { Carousel, Typography, Avatar, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Nisha Sapkota',
      comment: 'The school provides an excellent learning environment for my child. The teachers are caring and dedicated.',
      photo: 'https://res.cloudinary.com/duaz5kg1m/image/upload/v1681545161/73029513_1751057685026973_8732150107450900480_n_f3tcho.jpg',
    },
    {
      name: 'Nikesh Sapkota',
      comment: 'I am impressed with the school\'s curriculum and extracurricular activities. My child has shown great progress since joining.',
      photo: 'https://res.cloudinary.com/duaz5kg1m/image/upload/v1681545154/159093095_148037187186298_4762271257158948677_n_dvi1yf.jpg',
    },
    {
      name: 'Mike Johnson',
      comment: 'The staff at the school is friendly and always available to address any concerns. I highly recommend this school.',
      photo: 'https://example.com/mike.jpg',
    },
  ];

  const arrowStyle = {
    color: '#1890ff',
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '8px',
    cursor: 'pointer',
  };

  return (
    <div style={{ background: '#f0f2f5', padding: '80px 50px' }}>
      <div style={{ textAlign: 'center' , marginLeft: '20px', marginRight: '20px' }}>
        <Title level={2} style={{ marginBottom: '40px' }}>What Do Parents Say About Us</Title>
      </div>
      <Carousel autoplay nextArrow={<RightOutlined style={arrowStyle} />} prevArrow={<LeftOutlined style={arrowStyle} />} dots={{ className: 'testimonial-dots' }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{ textAlign: 'center', padding: '40px', marginLeft: '20px', marginRight: '20px' }}>
            <Row justify="center" align="middle">
              <Col span={6}>
                <Avatar size={200} src={testimonial.photo} alt={testimonial.name} />
              </Col>
              <Col span={16}>
                <Text style={{ fontSize: '18px', marginBottom: '20px' }}>{testimonial.comment}</Text>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>- {testimonial.name}</p>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialsSection;
