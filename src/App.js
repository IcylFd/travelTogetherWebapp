/*
 * @Date: 2020-03-19 04:13:57
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-21 01:09:06
 */
import React, { Suspense, Component } from 'react';
import { observer, inject, Provider } from 'mobx-react';
import logo from './logo.svg';
import { Button } from 'antd-mobile'
import { HashRouter, Route, withRouter, Switch, Redirect } from 'react-router-dom';
import MainPages from './MainPages'
import SinglePages from './SinglePages'
import stores from './stores'

@observer
class App extends Component {
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
      <Provider {...stores}>
        <HashRouter>
          <Switch>
            <Suspense fallback={null}>
              <Route path="/main" component={MainPages} />
              <Route path="/single" component={SinglePages} />
            </Suspense>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
