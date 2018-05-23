import React, {Component} from 'react';
import {Value} from 'slate'
import {ASUtil} from "../utils/ASUtil";
import * as PubSub from "pubsub-js";

/**
 * 页面，指一张纸的一面
 */
class PageContent extends Component {

  componentDidMount(){
    const element = this.myRef
  }

  componentDidUpdate(params) {

    const element = this.myRef
    const pageHeight = this.props.parent.data.get('pageHeight')
    //const pageMargin = node.data.get("pageMargin")
    const pageContentHeight = (pageHeight) * ASUtil.pxPerMm()


    if(element.clientHeight > pageContentHeight){
      //内容超出页面高度则处理
      //1. 获取当前页面最后一个block，并从当前pageContent 中移除最后一个block
      // 最后一个block
      //2. 寻找第二页对应的pageContent，把第一页删除掉的block添加当前第二页最前面
      //3. 更新state


      var val = this.props.editor.state.value.toJS()
      const currentPageIndex = this.props.parent.data.get("pageIndex")
      const value = Value.fromJSON(val);

      PubSub.publish('val', value);
    }
  }

  render() {

    const { node } = this.props
    var pageMargin = node.data.get('pageMargin')

    const pageStyle = {
      padding: pageMargin.map(e=>e+"mm").join(" ")
    }

    return (
      <div ref={div => { this.myRef = div}} className="pageContent" style={pageStyle} {...this.props.attributes}>
        {this.props.children}
      </div>
    )
  }
}


export default PageContent;