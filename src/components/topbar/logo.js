
import React, {Component} from 'react';

import './logo.css'
import {Icon} from "antd";

const url = '//www.eiduo.com'

class Logo extends Component{


  gotoUrl = () => {
    window.open(url);
  }


  render() {

    return (
      <div onMouseUp={this.gotoUrl} className="logo">

        <Icon type="menu-fold" style={{lineHeight:'84px', fontSize: '46px', color: '#08c' }}/>

        {/*<img src={logo} alt="dtk" width="84" height="84" />*/}

      </div>
    )
  }
}

export default Logo;