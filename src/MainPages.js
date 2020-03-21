/*
 * @Date: 2020-03-19 04:13:57
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-20 17:43:58
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

@observer
class MainPages extends Component {
  state = {
    clientHeight: 736
  }
  componentDidMount() {
    this.setState({
      clientHeight: window.screen.height
    })
  }
  render() {
    console.log(this.props)
    const { clientHeight } = this.state
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Suspense fallback={null}>
            <Route path="/main/home" component={() => <Home clientHeight={clientHeight} />} />
            <Route path="/main/schedule" component={() => <Schedule clientHeight={clientHeight} />} />
            <Route path="/main/discovery" component={() => <Discovery clientHeight={clientHeight} />} />
            <Route path="/main/mine" component={() => <Mine clientHeight={clientHeight} />} />
          </Suspense>
        </Switch>
        <TabNav />
      </HashRouter>
    );
  }
}

export default MainPages;
