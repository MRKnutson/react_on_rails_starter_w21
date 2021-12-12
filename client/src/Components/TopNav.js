import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import { Container, Navbar } from 'react-bootstrap'

const TopNav = () => {
  return(
    <Container>
      <Navbar>
        <Link to = "/">
          Home
        </Link>
      </Navbar>
    </Container>
    // <Menu>
    //   <Link to="/">
    //     <Menu.Item>
    //       Home
    //     </Menu.Item>
    //   </Link>
    // </Menu>
  )
};

export default TopNav;