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

    const { attributes, children, parent, node } = this.props
    const score = node.data.get("score")
    const gridCount = node.data.get("gridCount")
    const topicId = node.data.get("id")


    const containerStyle = {
      border: '1px solid #000'
    }

    //页面宽度
    const pageWidth = 100

    return (
      <div tpid={topicId} {...attributes} style={containerStyle} className={'compositionTopic'}>
        {isNaN(score) ? null : <ScoreBar score={score}/>}
        {children}
        
        <GridArea width={pageWidth} gridCount={gridCount}></GridArea>
      </div>
    )
  }
}

/**
 * Export.
 */

export default ChineseCompositionTopic
