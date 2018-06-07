import React, {Component} from 'react';


/**
 * 作答区，或编辑区
 */
class EditArea extends Component {

  render() {

    const answerAreaStyle = {
      width: '100%',
      borderCollapse: 'collapse',
      border: 'solid 1px black',
      padding: '10px',
      boxSizing: 'border-box',
      marginTop: '-1px'
    }

    return (
      <div style={answerAreaStyle} className="answerArea" {...this.props.attributes}>
        {this.props.children}
      </div>
    )
  }
}

export default EditArea;