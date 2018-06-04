import React, {Component} from 'react';


/**
 * 注意事项区域
 */
class HandWrite extends Component {



  render() {
    const { children } = this.props

    const handStyle = {
    }

    return (
      <div style={handStyle} className={"handWrite"}>
        {children}
      </div>

    )
  }
}


export default HandWrite;