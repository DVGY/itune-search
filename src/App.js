import React from 'react';

import './App.css';

import SearchBox from './components/SearchBox';
import Musics from './components/Musics';

import { Layout } from 'antd';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="music-layout">
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SearchBox />
        </Header>
        <Content
          style={{
            paddingTop: '8px',
          }}
        >
          <Switch>
            <Route path="/" component={Musics} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
