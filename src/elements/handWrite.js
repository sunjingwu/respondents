import React, {Component} from 'react';


/**
 * 注意事项区域
 */
class HandWrite extends Component {



  render() {
    const { node,children } = this.props

    const handStyle = {
      display: 'inline-block',
      width: '90mm',
      float: 'left'
    }

    return (
      <div style={handStyle} className={"handWrite"}>
        {children}
      </div>

    )
  }
}


export default HandWrite;