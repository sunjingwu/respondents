import React, {Component} from 'react';
import {Operation} from "slate";
import {
  cloneFragment,
  findDOMNode,
  findDOMRange,
  findNode,
} from 'slate-react'
import {ASUtil} from "../utils/ASUtil";

/**
 * 页面，指一张纸的一面
 */
class PageContent extends Component {


  componentDidUpdate(params) {

    const { node } = this.props
    const element = findDOMNode(node)

    const pageHeight = this.props.parent.data.get('pageHeight')
    const pageMargin = node.data.get("pageMargin")
    const pageContentHeight = (pageHeight - pageMargin[0]*2) * ASUtil.pxPerMm();

    if(element.clientHeight > pageContentHeight){
      //TODO 内容超出页面高度则处理


      /*const change = this.props.editor.state.value.change()
      const operation = new Operation({type: "move_node", path: [1], newPath: [2, 1]})


      change.applyOperation(operation).applyOperation(Operation.invert(operation))*/
      this.setState(this.props.editor.state)
    }
  }

  render() {

    const { node } = this.props
    var pageMargin = node.data.get('pageMargin')

    const pageStyle = {
      padding: pageMargin.map(e=>e+"mm").join(" ")
    }

    return (
      <div className="pageContent" style={pageStyle} onFocus={this.onChange} {...this.props.attributes}>
        {this.props.children}
      </div>
    )
  }
}


export default PageContent;