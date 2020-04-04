/*
 * @Date: 2020-03-19 04:13:57
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-04 14:58:15
 */
import React, { Suspense, Component } from 'react';
import { observer, inject } from 'mobx-react';
import logo from './logo.svg';
import { Button } from 'antd-mobile'
import { HashRouter, Route, withRouter, Switch, Redirect } from 'react-router-dom';
import TabNav from './components/Nav'
import Header from './components/Header'
import Home from './pages/Home'
import Mine from './pages/Mine'
import Schedule from './pages/Schedule'
import Discovery from './pages/Discovery'

@withRouter
@observer
class MainPages extends Component {
  state = {
    screenInfo: {
      clientHeight: 736,
      clientWidth: 414
    }
  }
  componentDidMount() {
    this.setState({
      screenInfo: {
        clientHeight: window.screen.height,
        clientWidth: window.screen.width,
      }
    })
  }
  render() {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Suspense fallback={null}>
            <Route path="/main/home" component={() => <Home screenInfo={this.state.screenInfo} />} />
            <Route path="/main/schedule" component={() => <Schedule screenInfo={this.state.screenInfo} />} />
            <Route path="/main/discovery" component={() => <Discovery screenInfo={this.state.screenInfo} />} />
            <Route path="/main/mine" component={() => <Mine screenInfo={this.state.screenInfo} transparent />} />
          </Suspense>
        </Switch>
        <TabNav />
      </HashRouter>
    );
  }
}

export default MainPages;
