import React from 'react';


// icons
import { FaHome } from 'react-icons/fa';
import { BsFillPostcardFIll } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


function Navbar() {

  const navItems = [
    {
      icon: <FaHome />,
      name: 'Home',
      path: '/'
    },
    {
      icon: <BsFillPostcardFIll />,
      name: 'Posts',
      path: '/posts'
    },
  ];

  return (
    <div className="navbar-container">
      <div className="container mx-auto">
        <ul>
          {navItems.map((el, index) => {
            return (
              <li key={index}>
                {el.icon}
                <NavLink to={el.route}>{el.label}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar