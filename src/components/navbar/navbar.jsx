import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <img src="https://res.cloudinary.com/duaz5kg1m/image/upload/v1685866647/school_logo_vkwcj3.png" alt="SHINING STAR" style={{ width: '150px', height: '60px', color: 'white' }} />
        </div>
        <div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="about">
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
        <Menu.Item key="facility">
          <NavLink to="/facility">Facilities</NavLink>
        </Menu.Item>
        <Menu.Item key="notice">
          <NavLink to="/notice">Notices</NavLink>
        </Menu.Item>
        <Menu.Item key="program">
          <NavLink to="/program">Program</NavLink>
        </Menu.Item>
        <Menu.Item key="contact">
          <NavLink to="/contact">Contact</NavLink>
        </Menu.Item>
      </Menu>

        </div>
        <div>
          <Button type="text" icon={<UserOutlined />} style={{ marginRight: '10px', color: 'white' }} />
          <Button type="primary">Sign Up</Button>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
