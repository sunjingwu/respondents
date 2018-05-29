import React, {Component} from 'react';


class StudyBarCode extends Component {


  render() {

    const containerStyle ={
      display: "inline-block",
      border: "dashed 1px #555",
      width: '82mm',
      height: '40mm'
    }

    return (
      <div style={containerStyle} contentEditable={false} className="barCode" {...this.props.attributes}>
        <div>贴条码位置</div>
        <div>正面朝上</div>
      </div>
    )
  }
}

export default StudyBarCode;