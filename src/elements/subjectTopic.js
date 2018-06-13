import React from 'react'
import ScoreBar from "./scoreBar";

/**
 * 主观题 component.
 *
 * @type {Component}
 */

class SubjectTopic extends React.Component {

  /**
   * Render.
   *
   * @return {Element}
   */

  render() {

    const { attributes, children, node } = this.props
    const score = node.data.get("score")
    const topicId = node.data.get("id")

    const containerStyle = {
      border: 'solid 1px black'
    }

    return (
      <div {...attributes} className={'subjectTopic'} style={containerStyle} tpid={topicId}>
        {isNaN(score) ? null : <ScoreBar score={score}/>}
        {children}
      </div>
    )
  }

}

/**
 * Export.
 */

export default SubjectTopic
