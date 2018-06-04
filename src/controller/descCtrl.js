/**
 * 答题卡描述控制类
 * 用于生成答题卡描述信息，从页面上获取，使用原生的document
 */
import {SheetDesc} from "../desc/sheetDesc/sheetDesc";
import $ from 'jquery';

export class DescCtrl {


  constructor(desc){
    this.sheetDesc = desc
  }


  /**
   * 根据slate 的 value 的document属性生成答题卡描述
   *
   * @param doc 页面Value
   */
  genSheetDesc(slateValue){

    //从第一页获取答题卡的标题，考生信息等
    let sheetName = $(".sheetTitle").text()// document.getElementsByClassName('sheetTitle')
    var desc = new SheetDesc(sheetName)

    //TODO 题目信息、排版、题目等信息



    this.sheetDesc = desc;
  }


  /**
   * 生成答题卡基本描述信息
   */
  genBaseDesc(){

  }

  /**
   * 生成题目描述信息
   */
  genTopicDesc(){

  }


  /**
   * 判断对应试卷的试题结构，与已经存在的答题卡题目结构是否相同
   * 可能需要比较的内容有：题目数量、对应题号的题型、选项个数
   */
  isTopicSame(){

  }

  /**
   * 组卷或划题，初始化答题卡
   */
  initFormDesc(){

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