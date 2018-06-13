import React, {Component} from 'react';
import {ASConfig} from "../desc/asConfig";


/**
 * 作答区，或编辑区
 */
class EditArea extends Component {

  render() {

    const answerAreaStyle = {
      width: '100%',
      borderCollapse: 'collapse',
      padding: ASConfig.paddingSize,
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