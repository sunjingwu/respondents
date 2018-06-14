import React from 'react'
import SubArea from "./objectTopic/subArea";

/**
 * 客观题 component.
 *
 * @type {Component}
 */

class ObjectTopic extends React.Component {

  /**
   * 渲染样式
   * 填涂样式：Box,Circle,Brackets
   * "optionStyle": "box",
   *
   * 布局样式 '题号-选项'，h水平；v竖直方向
   * "layoutStyle": "h-h",
   *
   * 小块中的行数，横向布局起作用
   * "rowCount": 5
   * @return {Element}
   */

  render() {

    const { attributes, node } = this.props
    const topicList = node.data.get("topicList")
    const rowCount = node.data.get("rowCount")

    const objectStyle = {
      border: '1px solid #000',
      fontFamily: 'SimSun',
      fontSize: '12px'
    }

    return (
      <div style={objectStyle} {...attributes} className={'objectTopic'}>

        <SubArea rowCount={rowCount}>
        </SubArea>

        <SubArea rowCount={rowCount}>
        </SubArea>

      </div>
    )
  }
}

/**
 * Export.
 */

export default ObjectTopic
