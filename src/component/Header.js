import React, { Component } from 'react'
import {
    Collapse, Navbar, NavbarToggler, Nav, NavItem,
    NavLink, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, NavbarBrand 
} from 'reactstrap'

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
            <Navbar color="secondary" light expand="md">
              <img src='white-logo.svg' style={{width: 150, height: 50}}/>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/" style={{color:"white"}}>Products</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/putranugroho/page360" style={{color:"white"}}>GitHub</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={{color:"white"}}>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}


export default Header