import React, { Component } from 'react'
import logo from '../../images/codexo-logo.png'
import { Link } from 'gatsby'
import {FaCartArrowDown} from 'react-icons/fa'

export default class Nav extends Component {
state= {
navbarState: false,
navbarClass: "collapse navbar-collapse show",
menus :  [{ 

    id:1,
    text: "home",
    url:"/",
    }, 
    
    { 
    id:2,
    text: "About",
    url:"/About",
    },
    
    { 
    id:3,
    text: "Services",
    url:"/Services",
    },
    
    {
    id:4,
    text: "Contact",
    url:"/Contact",
    }
    
    ]

}
mytogller=()=>{

this.state.navbarState ? this.setState({
navbarState: false,
navbarClass:" collapse navbar-collapse  "


}) : this.setState({

navbarState : true,
navbarClass:" collapse navbar-collapse show  "
})


}


  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-theme  text-white">
        {/* <Link to="/" className="navbar-brand ml-5"> */}
          <img src={logo} alt="logo" width="80px" />
        {/* </Link> */}

        <button
          className=" navbar-toggler"
          type="button"
          onClick={this.mytogller}
        >
          <span className="navbar-toggler-icon">menu </span>
        </button>

        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5 ">
            {this.state.menus.map(menu => {
              return (
                <li key={menu.id} className="nav-item ">
                  <Link to={menu.url} className=" nav-link  text-white">
                    {menu.text}
                  </Link>
                </li>
              )
            })}

            <li>
              <Link to="/" className=" nav-link  text-white">
                <FaCartArrowDown />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
