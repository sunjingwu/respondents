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

    const { attributes, children, node } = this.props


    return (
      <div className={'subjectTopic'}>
        {this.renderScoreBar()}
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

    const tableStyle = {
      borderBottom: '0px'
    }

    return (
      <table className={'scoreBar'} style={tableStyle}>
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
