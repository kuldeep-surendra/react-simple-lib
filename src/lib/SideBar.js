import React, { Component } from 'react';
import 'hpe-css-grommet';

import {Sidebar, 
  Header, 
  Title, 
  Box,  
  Footer,
  Button 
} from 'grommet';

class SideBar extends Component {

  render() {
  return (
  <Sidebar colorIndex='neutral-1'>
    <Header pad='medium'
      justify='between'>
      <Title>
        {this.props.title}
      </Title>
    </Header>
    <Box flex='grow'
      justify='start'>
      { this.props.menu }
      
    </Box>
    <Footer pad='medium'>
      <Button />
    </Footer>
  </Sidebar>
  )
}
}

export default SideBar;

