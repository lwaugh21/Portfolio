import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const App = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="#" active>Lulu's App</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Portfolio
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Art</DropdownItem>
            <DropdownItem>Code</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">Boutique</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default App;
