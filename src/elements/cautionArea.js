import React, {Component} from 'react';


/**
 * 注意事项区域
 */
class CautionArea extends Component {


  render() {
    const { node } = this.props

    const cautionStyle = {
      display: "inline-block",
      border: "1px solid #000",
      padding: '10px',
      //height: "30mm",
      margin: "10px",
      marginLeft: '0px'
    }

    return (
      <div className="cautionArea" style={cautionStyle} {...this.props.attributes}>
        <h3>注意事项</h3>
        <p>1．答题前，考生先将自己的姓名、班级、座位号填写清楚，并认真核对条形码上的姓名和准考证号。</p>
        <p>2．选择题部分请按题号用2B铅笔填涂方框，修改时用橡皮擦干净，不留痕迹。</p>
        <p>3．非选择题部分请按题号用0.5毫米黑色墨水签字笔书写，否则作答无效。要求字体工整、笔迹清晰。作图时，必须用2B铅笔，并描浓。</p>
      </div>

    )
  }
}


export default CautionArea;