import React, {Component} from 'react';


/**
 * 注意事项区域
 */
class CautionArea extends Component {


  render() {
    const { children,node } = this.props
    const width = node.data.get("width")

    const cautionStyle = {
      display: "inline-block",
      border: "1px solid #000",
      padding: '10px',
      //height: "30mm",
      margin: "1mm",
      marginLeft: '0px',
      width: width+'mm',
      fontSize: '12px',
      float: 'left'
    }

    const headStyle = {
      textAlign: 'center',
      fontSize: '14px',
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