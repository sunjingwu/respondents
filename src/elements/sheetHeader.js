import React, {Component} from 'react';
import StudyNo from "./studyNo";
import CautionArea from "./cautionArea";
import StudyBarCode from "./studyBarCode";


/**
 * 页面，指一张纸的一面
 */
class SheetHeader extends Component {


  render() {
    const { node } = this.props
    const studentInfo = node.data.get('studentInfo')

    const sheetHeaderStyle = {
      position: 'relative',
      backgroundColor: '#fff',
      margin: '1px auto'
    }

    const leftStyle = {
      display: 'inline-block',
      width: '90mm'
    }

    return (
      <div className="sheetHeader" style={sheetHeaderStyle} {...this.props.attributes}>
        <div style={leftStyle}>
          <div className={"handWrite"}>
            <p>姓名：___________ 班级：_____________</p>
            <p>座位号：___________</p>
          </div>
          <CautionArea/>
        </div>
        {studentInfo == "studyNo" ? <StudyNo {...this.props}/> : <StudyBarCode/>}
      </div>
    )
  }

}


export default SheetHeader;