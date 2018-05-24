/**
 * 答题卡描述控制类
 */
export class DescCtrl {


  constructor(sheetJson){
    this.sheetDesc = JSON.parse(sheetJson)
  }



  getPageType () {
    return this.sheetDesc.pageType;
  }
  /**
   * 设置试卷类型
   */
  setPageType (type) {
    this.sheetDesc.pageType = type;
  }



  /**
   * 添加题型
   */
  addTopicType(){

  }


  /**
   * 题型中添加题目
   */
  addTopic(){

  }


  removeTopicType(){

  }

  /**
   * 移除题目
   */
  removeTopic(){
    // 如果题型中没有题目了，则清除该题型
  }

}