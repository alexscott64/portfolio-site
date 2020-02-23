import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu, Icon} from 'antd';

function App() {

    const [selectedMenuItem, setSelectedMenuItem] = useState('home');

    const componentsSwitch = (key) => {
        switch(key) {
            case 'home':
                return (<h1>home</h1>);
            case 'portfolio':
                return (<h1>portfolio</h1>);
            default:
                break;
        }
    };

    return (
        <div className="App">
            <Menu 
                selectedKeys={selectedMenuItem}
                onClick={(e) => setSelectedMenuItem(e.key)}
                mode="inline"
                style={{ width: 128 }}
            >
                    <Menu.Item key="home"><Icon type="home" /></Menu.Item>
                    <Menu.Item key="portfolio"><Icon type="folder" /></Menu.Item>


            </Menu>
            <div>
                {componentsSwitch(selectedMenuItem)}
            </div>
        </div>
    );
}

export default App;
