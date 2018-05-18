import React from 'react'
import AnswerArea from "./answerArea";

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
    const { node } = this.props
    const con = node.data.get("content");


    return (
      <div className={'subjectTopic'} {...this.props.attributes}>
        {this.renderScoreBar()}
        <AnswerArea/>
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
      <table>
        <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>2</td>
          <td>{s}分</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

/**
 * Export.
 */

export default SubjectTopic
