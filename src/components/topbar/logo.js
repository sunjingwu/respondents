
import React, {Component} from 'react';

import logo from '../../asset/logo.svg'

import './logo.css'
import {Icon} from "antd";

class Logo extends Component{


  render() {

    const logoStyle = {
      width: '84px',
      height: '84px',
      textAlign: 'center'
    }

    return (
      <div style={logoStyle} className="logo">

        <Icon type="menu-fold" style={{lineHeight:'84px', fontSize: '46px', color: '#08c' }}/>

        {/*<img src={logo} alt="dtk" width="84" height="84" />*/}

      </div>
    )
  }
}

export default Logo;