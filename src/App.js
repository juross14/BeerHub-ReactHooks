import * as React from 'react'
import './styles.css'

import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  StarOutlined,
  ShopOutlined,
  AppstoreOutlined,
  FireOutlined
} from '@ant-design/icons'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Overview from './pages/Overview'
import Beers from './pages/Beers'
import Favorites from './pages/Favorites'
import Shotoff from './pages/Shotoff'
import Root from './pages/Root'

const { Header, Sider, Content } = Layout

export default function App() {
  return (
    <Router>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <div className="logo"> logo here </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              <Link to="/overview">Overview</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ShopOutlined />}>
              <Link to="/beers">Your Beers</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<StarOutlined />}>
              <Link to="/favorites">Alcohol Rate</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<FireOutlined />}>
              <Link to="/shotoff">About App</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="head-top" style={{ padding: 0 }}>
            Welcome to my Beer Hub
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 1000
            }}
          >
            <Switch>
              <Route path="/overview">
                <Overview />
              </Route>
              <Route path="/beers">
                <Beers />
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route path="/shotoff">
                <Shotoff />
              </Route>
              <Route path="/">
                <Root />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}
