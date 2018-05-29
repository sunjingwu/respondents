import React from 'react'
import AnswerArea from "./answerArea";
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

    return (
      <div tpid={topicId} className={'subjectTopic'}>
        {isNaN(score)?null:this.renderScoreBar()}
        <AnswerArea {...attributes}>
          {children}
        </AnswerArea>
      </div>
    )
  }

  /**
   * Render the Youtube iframe, responsively.
   *
   * @return {Element}
   */

  renderScoreBar = () => {
    const { node } = this.props
    const s = node.data.get("score");

    return (
      <ScoreBar score={s}/>
    )
  }
}

/**
 * Export.
 */

export default SubjectTopic
