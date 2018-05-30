/**
 *
 * 文档控制器
 *
 * @class
 * @public
 */
export class DocCtrl {

  constructor(slateValue){
    this.value = slateValue

    //参考slatejs 的 document
    this.document = slateValue.get("document")
  }


  /**
   * 设置纸张类型
   */
  setPageType(pageType){

  }

  /**
   * 设置答题卡模式
   */
  setSheetMode(){

  }

  setSheetName(){

  }


  setStudentInfo(){

  }





  /**
   * 获取当前页面内容的的最后一个block，用于跨页
   */
  getLastBlock(pageIndex){
    var page = this.getPage(pageIndex);

    var pageContent = this.getPageContent(page);




  }



  /**
   * 题目跨页生成第二部分
   */
  genNextPart(){

  }


  /**
   * 创建新的页面，指的是新的一栏
   * @param pageIndex
   */
  createPage(pageIndex){

  }


  /**
   * 补齐页面，用于A3两栏或三栏场景
   */
  complatePages(){

  }


  /**
   * 根据页面索引，获取对应的page
   * @param pageIndex 页面索引
   * @public
   */
  getPage(pageIndex){

  }

  /**
   * 获取页面内容部分
   * @param page
   */
  getPageContent(page){





  }










}