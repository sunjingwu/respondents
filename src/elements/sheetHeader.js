import React, {Component} from 'react';
import StudyNo from "./studyNo";
import StudyBarCode from "./studyBarCode";
import {ASConfig} from "../desc/asConfig";


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
      clear: 'both',
      height: ASConfig.gap
    }

    const otherStyle = {
      float: 'left',
      display: 'inline-block',
      border: '1px solid #000',
      padding: '0 10px',
      fontWeight: 'bold'
    }

    const correctStyle = {
      display: 'inline-block',
      width: '40mm'
    }

    const absentStyle = {
      display: 'inline-block',
      width: '40mm'
    }

    const blockStyle = {
      display: 'inline-block',
      width: '5mm',
      height: '3mm',
      border: '1px solid #000',
      verticalAlign: 'middle'
    }

    const fillBlockStyle = {
      display: 'inline-block',
      width: '5mm',
      height: '3mm',
      backgroundColor: '#000',
      verticalAlign: 'middle'
    }

    return (
      <div className="sheetHeader" style={sheetHeaderStyle} {...this.props.attributes}>
        {children}
        {studentInfo == "studyNo" ? <StudyNo {...this.props}/> : <StudyBarCode/>}
        <div contentEditable={false} style={otherStyle} className={'otherInfo'}>
          <div style={correctStyle}>正确填涂 &nbsp; &nbsp; &nbsp; &nbsp;
            <span style={fillBlockStyle}> </span>
          </div>
          <div style={absentStyle}>缺考标记 &nbsp; &nbsp; &nbsp; &nbsp;
            <span style={blockStyle}> </span>
          </div>
        </div>
        <div style={clear}></div>
      </div>
    )
  }

}


export default SheetHeader;