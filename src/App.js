import React, { useState } from 'react';
import './App.css';
import {Menu, Icon, Layout, Avatar} from 'antd';
import logo from "./as.png"
import HomePage from './HomePage.js';


const { Header, Content, Sider } = Layout;

function App() {

    const [selectedMenuItem, setSelectedMenuItem] = useState('home');

    const switchMenuItem = (key) => {
        switch(key) {
            case 'home':
                return <HomePage />
            case 'portfolio':
                return (<h1>portfolio</h1>);
            default:
                break;
        }
    };

    return (
        <div className="App">
            <Layout>
                <Sider>
                    <Menu 
                        selectedKeys={selectedMenuItem}
                        onClick={(e) => setSelectedMenuItem(e.key)}
                        mode="inline"
                        style={{ width: 128 }}
                    >
                            <Menu.Item className="logo-item"><img src={logo} width="128" height="64" className="logo-image"/></Menu.Item>
                            <Menu.Item key="home"><Icon type="home" /></Menu.Item>
                            <Menu.Item key="portfolio"><Icon type="folder" /></Menu.Item>


                    </Menu>
                </Sider>
                <Content>

                    <div>
                        {switchMenuItem(selectedMenuItem)}
                    </div>
                </Content>
 
            </Layout>
        </div>
    );
}

export default App;
