import React from 'react'


/**
 * 打分条
 *
 * //不同页面宽度不一样
 * @param score
 * @returns {*}
 * @constructor
 */
const GridArea = ({ gridCount }) => {
  let Node = 'div'


  return (
    <Node className={'GridArea'}>
      这是格子{gridCount}个
    </Node>
  )
}

export default GridArea