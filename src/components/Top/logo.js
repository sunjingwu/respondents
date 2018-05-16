
import React, {Component} from 'react';

import logo from '../../asset/logo.svg'

import './logo.css'

class Logo extends Component{


  render() {

    return (
      <div className="logo">

        <img src={logo} alt="dtk" width="50" height="50" />

      </div>
    )
  }
}

export default Logo;