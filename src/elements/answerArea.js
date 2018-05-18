import React, {Component} from 'react';


/**
 * 作答区
 */
class AnswerArea extends Component {

  render() {

    const answerAreaStyle = {
      width: '100%',
      borderCollapse: 'collapse',
      border: 'solid 1px black',
      padding: '10px',
      boxSizing: 'border-box'
    }

    return (
      <div style={answerAreaStyle} className="answerArea" {...this.props.attributes}>
        {this.props.children}
      </div>
    )
  }
}

export default AnswerArea;