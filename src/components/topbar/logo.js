
import React, {Component} from 'react';

import logo from '../../asset/logo.svg'

import './logo.css'

class Logo extends Component{


  render() {

    return (
      <div className="logo">

        <img src={logo} alt="dtk" width="84" height="84" />

      </div>
    )
  }
}

export default Logo;