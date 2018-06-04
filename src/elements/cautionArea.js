import React, {Component} from 'react';


/**
 * 注意事项区域
 */
class CautionArea extends Component {


  render() {
    const { children } = this.props

    const cautionStyle = {
      display: "inline-block",
      border: "1px solid #000",
      padding: '10px',
      //height: "30mm",
      margin: "1mm",
      marginLeft: '0px',
      width: '88mm',
      float: 'left'
    }

    const headStyle = {
      textAlign: 'center',
      fontWeight: 'bold'
    }

    return (
      <div className="cautionArea" style={cautionStyle} {...this.props.attributes}>
        <h3 style={headStyle}>注意事项</h3>
        { children }
      </div>
    )
  }
}


export default CautionArea;