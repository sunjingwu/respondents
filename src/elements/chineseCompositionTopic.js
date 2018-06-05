import React from 'react'
import ScoreBar from "./scoreBar";
import GridArea from "./gridArea";

/**
 * 主观题 component.
 *
 * @type {Component}
 */

class ChineseCompositionTopic extends React.Component {

  /**
   * Render.
   *
   * @return {Element}
   */

  render() {

    const { attributes, children, node } = this.props
    const score = node.data.get("score")
    const gridCount = node.data.get("gridCount")
    const topicId = node.data.get("id")

    return (
      <div tpid={topicId} {...attributes} className={'compositionTopic'}>
        {isNaN(score) ? null : <ScoreBar score={score}/>}
        {children}
        
        <GridArea gridCount={gridCount}></GridArea>
      </div>
    )
  }
}

/**
 * Export.
 */

export default ChineseCompositionTopic
