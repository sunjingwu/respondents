import React, {Component} from 'react';
import {ASUtil} from "../utils/ASUtil";
import * as PubSub from "pubsub-js";
import {DocCtrl} from "../controller/docCtrl";

import $ from 'jquery';

/**
 * 页面，指一张纸的一面
 */
class PageContent extends Component {


  componentDidMount(){
    //页面重绘 处理跨页

  }

  /**
   * 页面更新后，进行跨页处理逻辑
   */
  componentDidUpdate() {

    const element = this.myRef
    const value = this.props.editor.state.value;
    const parentNode = this.props.parent

    const pageHeight = parentNode.data.get('pageHeight')
    //const pageMargin = node.data.get("pageMargin")
    const pageContentHeight = (pageHeight) * ASUtil.pxPerMm()
    const currentPageIndex = parentNode.data.get("pageIndex")

    let pageSize = DocCtrl.getPageCount(value)

    if(element.clientHeight > pageContentHeight){
      //内容超出页面高度则处理
      //0.如果当前是最后一页，需要添加新的页
      if (pageSize == currentPageIndex + 1) {
        // 添加新页面
        let newValue = DocCtrl.createPage(value)

        PubSub.publish('val', newValue)
        return;
      }


      //1. 获取当前页面最后一个第一层的block，并从当前pageContent 中移除最后一个block
      let currentPageContent = DocCtrl.getPageContentByIndex(currentPageIndex,value)

      // TODO 找到最后一块，可优化：直接找到内容不再超出的block
      let lastBlock = currentPageContent.get("nodes").get(-1)
      // TODO 暂时整块移动，待优化

      //2. 寻找第二页对应的pageContent，把第一页删除掉的block添加当前第二页最前面

      let nextPageContent = DocCtrl.getPageContentByIndex(currentPageIndex+1,value)
      let nextKey = nextPageContent.get('key')

      //3. 更新state

      var firstKey = lastBlock.get('key')
      var change = value.change()
      // nextKey 父级block 第0个
      change.moveNodeByKey(firstKey,nextKey,0);

      PubSub.publish('val', change.value)
    } else {
      //判断是否需要从后面向前面移动
      //1. 后面还有一页；2.后面一页第一块类型是支持跨页的；3.第一块可跨页的高度 < 前一页剩余高度
      if (pageSize == currentPageIndex + 1) {
        //最后一页
        return;
      }

      //判断页面有没有内容：pageContent 中除了 sheetHeader 还有没有其他的block
      /*** 第一个块：
       * 1.客观题
       * 2.填空题、英语作文题
       * 3.语文作文题
       * 4.解答题、题干区域等
       * 5.答题卡头部*/
      let firstFlexibleBlock = DocCtrl.getFirstFlexibleBlock(currentPageIndex + 1, value)
      if (!firstFlexibleBlock) {
        // 后面没有可以移动的内容
        return;
      }

      // 从下一个pageContent 中 的block 获取第一个block的key
      let firstKey = firstFlexibleBlock.get('key')
      // 根据key 从页面上获取对应html节点的高度: 通过JQuery获取页面上data-key 为firstKey的元素的高度
      let ele = $("[data-key=" + firstKey + "]")
      const nextBlockHeight = ele.outerHeight();
      //从第二页页面上获取第一个块的高度，与当前页剩余高度对比，如果可以放下，则移动。
      const leftHeight = pageContentHeight - element.clientHeight;
      if (leftHeight >= nextBlockHeight) {
        // 当前页面有空余空间，需要把后面页面的内容放到前面
        var change = value.change()

        //后一页放到前面
        let prePageContent = DocCtrl.getPageContentByIndex(currentPageIndex,value);
        let preKey = prePageContent.get('key')
        let index = prePageContent.get('nodes').size
        change.moveNodeByKey(firstKey,preKey,index);


        // 如果后面一页没有内容，且不需要补全页面的话，连同Page页面一同删除
        var newValue = DocCtrl.delEndPage(change.value);


        PubSub.publish('val', newValue)
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