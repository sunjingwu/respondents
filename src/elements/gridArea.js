import React from 'react'


/**
 * 语文作文格子区域
 * @param score
 * @returns {*}
 * @constructor
 */
const GridArea = ({ gridCount }) => {



  const gridAreaStyle = {
    border: '1px solid #000',
    margin: '0 6px 6px'
  }


  return (
    <div style={gridAreaStyle} className={'GridArea'}>
      这是格子{gridCount}个
    </div>
  )
}

export default GridArea