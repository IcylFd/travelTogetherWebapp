/*
 * @Date: 2020-03-19 04:13:57
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-20 21:32:19
 */
import React, { Suspense, Component } from 'react';
import { observer, inject } from 'mobx-react';
import logo from './logo.svg';
import { Button } from 'antd-mobile'
import { HashRouter, Route, withRouter, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Singup from './pages/Singup';

@observer
class SinglePages extends Component {
  state = {
    clientHeight: 736
  }
  componentDidMount() {
    this.setState({
      clientHeight: window.screen.height
    })
  }
  render() {
    const { clientHeight } = this.state
    return (
      <HashRouter>
        <Switch>
          <Suspense fallback={null}>
            <Route path="/single/welcome" exact component={() => <Welcome clientHeight={clientHeight} />} />
            <Route path="/single/singup" component={() => <Singup clientHeight={clientHeight} />}></Route>
          </Suspense>
        </Switch>
      </HashRouter>
    );
  }
}

export default SinglePages;
