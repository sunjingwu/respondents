import React from 'react'
import ATopic from "./aTopic";

/**
 * 客观题 SubArea.
 *
 * @type {Component}
 */

class SubArea extends React.Component {

  render() {


    const subStyle = {
      display: 'inline-block',
      padding: '2.5mm 0mm'
    }

    return (
      <div style={subStyle} className={'subArea'}>

        <ATopic topicNo={22}/>
        <ATopic topicNo={223}/>
        <ATopic topicNo={11}/>
        <ATopic topicNo={2}/>
        <ATopic topicNo={23}/>

      </div>
    )
  }
}

/**
 * Export.
 */

export default SubArea
