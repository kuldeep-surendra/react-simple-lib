import React, { Component } from 'react';
import { render } from 'react-dom'
import Home from './home';
import Signup from './signup';
import { Anchor, Menu  } from 'grommet';
import { Router, Route, Switch } from 'react-router-dom'
import { TextInput, SideBar } from "./lib";
import createHistory from 'history/createBrowserHistory';
const history = createHistory()

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: window.location.pathname
    }
  }

  handleClick(path) {
    this.setState({
      active: path
    })
    history.push(path)
  }

  render() {
    return (
      <div>
        <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
        </Router>
        <SideBar 
          title="Copernicus"
          menu={
            <Menu primary={true}>
              <Anchor className={this.state.active === '/home' ? 'active' : ''} onClick={() => this.handleClick('/home')}>Home</Anchor>
              <Anchor className={this.state.active === '/signup' ? 'active' : ''} onClick={() => this.handleClick('/signup')}>Signup</Anchor>
            </Menu>
          } 
        />
      </div>
    );
  }
}

export default App;