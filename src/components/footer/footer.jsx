import React from 'react';
import { Layout, Row, Col, Typography, Divider } from 'antd';

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterPage = () => {
  return (
    <Footer style={{ background: '#121212', padding: '40px 0', color: '#fff' }}>
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={4} style={{ color: '#fff' }}>Contact Us</Title>
          <Text style={{ color: '#fff' }}>Yangwarak-4, Tharpu, Panchthar, Nepal <br /> 9815989236</Text>
        </Col>
      </Row>
      <Divider style={{ margin: '20px 0', backgroundColor: '#fff' }} />
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Text style={{ color: '#fff' }}>© 2023 Shining Star English School. All rights reserved.</Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterPage;
