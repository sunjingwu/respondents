import React, {Component} from 'react';


class StudyBarCode extends Component {


  render() {

    const containerStyle ={
      display: "inline-block",
      border: "dashed 1px #555",
      width: '70mm',
      height: '30mm',
      color: 'grey',
      float: 'right',
      textAlign: 'center'
    }

    const styleT ={
      fontSize: '24px'
    }

    const styleN ={
      fontSize: '14px'
    }

    return (
      <div style={containerStyle} contentEditable={false} className="barCode" {...this.props.attributes}>
        <div style={styleT}>贴条形码区</div>
        <br />
        <div style={styleN}>（正面朝上，切勿贴出虚线方框）</div>
      </div>
    )
  }
}

export default StudyBarCode;