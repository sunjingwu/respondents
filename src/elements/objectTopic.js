import React from 'react'
import ScoreBar from "./scoreBar";
import GridArea from "./gridArea";

/**
 * 主观题 component.
 *
 * @type {Component}
 */

class ObjectTopic extends React.Component {

  /**
   * Render.
   *
   * @return {Element}
   */

  render() {

    const { attributes, node } = this.props
    const topicList = node.data.get("topicList")
    const rowCount = node.data.get("rowCount")

    const objectStyle = {
      border: '1px solid #fff'
    }

    return (
      <div style={objectStyle} {...attributes} className={'ObjectTopic'}>

        这里是{topicList.length}个客观题

      </div>
    )
  }
}

/**
 * Export.
 */

export default ObjectTopic
