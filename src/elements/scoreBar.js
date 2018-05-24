import React from 'react'

const ScoreBar = ({ score }) => {
  let Node = 'div'

  return (
    <Node score={score}>
      <span>{score}分</span>
    </Node>
  )
}

export default ScoreBar