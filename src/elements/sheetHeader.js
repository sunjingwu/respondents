import React, {Component} from 'react';
import StudyNo from "./studyNo";
import StudyBarCode from "./studyBarCode";


/**
 * 页面，指一张纸的一面
 */
class SheetHeader extends Component {


  render() {
    const { node,children } = this.props
    const studentInfo = node.data.get('studentInfo')

    const sheetHeaderStyle = {
      position: 'relative',
      backgroundColor: '#fff',
      margin: '1px auto'
    }

    const clear = {
      clear: 'both'
    }


    return (
      <div className="sheetHeader" style={sheetHeaderStyle} {...this.props.attributes}>
        {children}
        {studentInfo == "studyNo" ? <StudyNo {...this.props}/> : <StudyBarCode/>}
        <div style={clear}></div>
      </div>
    )
  }

}


export default SheetHeader;