import React from 'react'
import Option from "./option";

/**
 * 客观题 单个客观题.
 *
 * @type {Component}
 */

class ATopic extends React.Component {

  render() {


    const topicStyle = {
      height: '5mm'
    }

    return (
      <div style={topicStyle} className={'aTopic'}>

        <span style={{textAlign: 'right', display: 'inline-block', width: '8mm'}}>{this.props.topicNo}&nbsp;</span>
        <Option optionStyle={'Brackets'} choice={'A'}/>
        <Option optionStyle={'Brackets'} choice={'B'}/>
        <Option optionStyle={'Brackets'} choice={'C'}/>
        <Option optionStyle={'Brackets'} choice={'D'}/>

      </div>
    )
  }
}

/**
 * Export.
 */

export default ATopic
