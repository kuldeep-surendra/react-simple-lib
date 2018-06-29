import React, { Component } from 'react';
import 'hpe-css-grommet';

import {Sidebar, 
  Header, 
  Title, 
  Box, 
  Menu, 
  Footer,
  Button 
} from 'grommet';
import { Link, BrowserRouter } from "react-router-dom";


class SideBar extends Component {

  constructor(){
    super();
    this.state = {
      active: window.location.pathname
    }
  }

  location(path,e){
    e.preventDefault()
    this.setState({active: path})
  }

  render() {
  return (
  <BrowserRouter>
  <Sidebar colorIndex='neutral-1'>
    <Header pad='medium'
      justify='between'>
      <Title>
        {this.props.title}
      </Title>
    </Header>
    <Box flex='grow'
      justify='start'>
      <Menu primary={true}>
        { this.props.menu.map(menu => 
          (
            <Link className={this.state.active === menu.path ? 'active' : '' } key={menu.name} to={menu.path} onClick={(e) => this.location(menu.path, e)}>{menu.name}</Link>
          )
        )
      }
      </Menu>
    </Box>
    <Footer pad='medium'>
      <Button />
    </Footer>
  </Sidebar>
  </BrowserRouter>
  )
}
}

export default SideBar;

