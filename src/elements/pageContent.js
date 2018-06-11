import React, {Component} from 'react';
import {Value} from 'slate'
import {ASUtil} from "../utils/ASUtil";
import * as PubSub from "pubsub-js";
import {DocCtrl} from "../controller/docCtrl";

import $ from 'jquery';

/**
 * 页面，指一张纸的一面
 */
class PageContent extends Component {

  /**
   * 页面更新后，进行跨页处理逻辑
   */
  componentDidUpdate() {

    const element = this.myRef
    const document = this.props.editor.state.value.get('document');
    const parentNode = this.props.parent

    const pageHeight = parentNode.data.get('pageHeight')
    //const pageMargin = node.data.get("pageMargin")
    const pageContentHeight = (pageHeight) * ASUtil.pxPerMm()
    const currentPageIndex = parentNode.data.get("pageIndex")

    if(element.clientHeight > pageContentHeight){
      //内容超出页面高度则处理
      //1. 获取当前页面最后一个第一层的block，并从当前pageContent 中移除最后一个block
      let currentPageContent = DocCtrl.getPageContentByIndex(currentPageIndex,document)
      let lastBlock = currentPageContent.get("nodes").get(-1)
      // TODO 暂时整块移动，待优化

      //2. 寻找第二页对应的pageContent，把第一页删除掉的block添加当前第二页最前面
      //3. 更新state


      var val = this.props.editor.state.value.toJS()
      const value = Value.fromJSON(val);
      PubSub.publish('val', value)
    } else {
      //判断是否需要从后面向前面移动
      //1. 后面还有一页；2.当前一页后有剩余空间；3.后面一页有内容；4.后面一页第一块类型是支持跨页的；
      let pageSize = DocCtrl.getPageCount(document)
      if (pageSize == currentPageIndex + 1) {
        //最后一页
        return;
      }




      //从第二页页面上获取第一个块的高度，与当前页剩余高度对比，如果可以放下，则移动。
      const leftHeight = pageContentHeight - element.clientHeight;

      // 获取下一个元素的高度
      // 1. 从value中获取下一个pageContent
      let nextPageContent = DocCtrl.getPageContentByIndex(currentPageIndex+1,document)
      // 获取下页firstBlock 的Type，根据type进行判断是否可以前移，
      let firstBlock = nextPageContent.get('nodes').get(0)


      // 2. 从下一个pageContent 中 的block 获取第一个block的key
      let firstKey = DocCtrl.getFirstBlockKey(nextPageContent)
      // 3. 根据key 从页面上获取对应html节点的高度: 通过JQuery获取页面上data-key 为firstKey的元素的高度
      let ele = $("[data-key="+ firstKey +"]")
      const nextBlockHeight = ele.outerHeight();




      if(leftHeight >= nextBlockHeight){
        //FIXME 当前页面有空余空间，需要把后面页面的内容放到前面
        // 需要获取后面一页第一个元素的高度，与当前页剩余高度对比




        //PubSub.publish('val', value)
      }


    }

  }

  render() {

    const { node,children,attributes } = this.props
    var pageMargin = node.data.get('pageMargin')

    const pageStyle = {
      padding: pageMargin.map(e=>e+"mm").join(" ")
    }

    return (
      <div ref={div => { this.myRef = div}} className="pageContent" style={pageStyle} {...attributes}>
        {children}
      </div>
    )
  }
}


export default PageContent;