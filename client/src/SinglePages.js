/*
 * @Date: 2020-03-19 04:13:57
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-28 17:36:17
 */
import React, { Suspense, Component } from 'react';
import { observer, inject } from 'mobx-react';
import logo from './logo.svg';
import { Button } from 'antd-mobile'
import { HashRouter, Route, withRouter, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Singup from './pages/Singup';
import Activities from './pages/Activities'
import Article from './pages/Article'
import SelectTag from './pages/Article/selectTag.js'

@observer
class SinglePages extends Component {
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
    const { screenInfo } = this.state
    return (
      <HashRouter>
        <Switch>
          <Suspense fallback={null}>
            <Route path="/single/welcome" exact component={() => <Welcome screenInfo={screenInfo} />} />
            <Route path="/single/singup" component={() => <Singup screenInfo={screenInfo} />}></Route>
            <Route path="/single/activities" component={() => <Activities screenInfo={screenInfo} />}></Route>
            <Route path="/single/article" exact component={() => <Article screenInfo={screenInfo} />}></Route>
            <Route path="/single/article/tag" exact component={() => <SelectTag screenInfo={screenInfo} />}></Route>
          </Suspense>
        </Switch>
      </HashRouter>
    );
  }
}

export default SinglePages;
