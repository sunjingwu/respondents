import React from 'react'
import {ASConfig} from "../../desc/asConfig";


/**
 * 语文作文格子
 * @param score
 * @returns {*}
 * @constructor
 */
const Grid = ({ index }) => {
  const gridStyle = {
    display: 'inline-block',
    border: '1px solid #000',
    width: ASConfig.gridWidth+'mm',
    height: ASConfig.gridHeight+'mm',
    marginBottom: '6px',
    marginLeft: '-1px'
  }


  return (
    <div style={gridStyle} className={'grid'}>
      {index%100===0?<span style={{fontSize:'2mm',marginTop:ASConfig.gridHeight-1+'mm',float:'left'}}>{index}</span>:null}
    </div>
  )
}

export default Grid