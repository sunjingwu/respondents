import React from 'react'


/**
 * 打分条
 *
 * //不同页面宽度不一样
 * @param score
 * @returns {*}
 * @constructor
 */
const ScoreBar = ({ score }) => {
  let Node = 'div'






  return (
    <Node score={score}>
      <span>{score}分</span>
    </Node>
  )
}

export default ScoreBar