import React, {Component} from 'react';


/**
 * 作答区
 */
class AnswerArea extends Component {


  render() {

    //作答区高度
    const height = 8;

    const answerAreaStyle = {
      width: '100%',
      borderCollapse: 'collapse',
      border: 'solid 1px black'
    }

    return (
      <div style={answerAreaStyle} className="answerArea" {...this.props.attributes}>
        1.解答题内容
      </div>
    )
  }
}

export default AnswerArea;