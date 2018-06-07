/**
 *
 * 文档控制器
 * 处理SlateJS 的document 工具
 *
 * @class
 * @public
 */
import {ASConfig} from "../desc/asConfig";
import {Document, Text, Block, Value} from 'slate'


export class DocCtrl {

  /**
   * 根据页面获取pageContent
   * @param pageIndex
   * @param value
   */
  static getPageContentbyIndex(pageIndex,value){

  }


  /**
   * 初始化答题卡基本信息，除题目信息外的东西
   * 初始化默认信息
   // 1.纸张类型栏数
   // 2.考生信息类型
   // 3.答题卡名称
   // 4.答题卡模式：手阅网阅等
   // 5.AB卡、禁止作答区等
   * 返回初始化后的value
   */
  static initFromDefault(){


    let pageType = ASConfig.defaultPageType


    let slateValue = Value.create({
      document: Document.create({
        nodes: [
          Block.create({
            type: "page",
            data: {
              "pageIndex":0,
              "pageType":"A4",
              "pageWidth":pageType.width / pageType.colCount,
              "pageHeight":pageType.height,
            },
            nodes: [
              Block.create({
                type: "pageContent",
                data: {
                  "pageMargin":[20,15]
                },
                nodes: [
                  Block.create({
                    type: "sheetHeader",
                    data: {
                      "studentInfo": "studyNo",
                      "studyNoCount": 8,
                      "studentType": [],
                      "displayAB": false,
                      "displayABPaper": false,
                      "displayAbsent": false
                    },
                    nodes: [
                      Block.create({
                        type: "sheetTitle",
                        nodes: [
                          Text.create("Some text sheetTitle.")
                        ]
                      }),
                      Block.create({
                        type: "handWrite",
                        nodes: [
                          Block.create({
                            type: 'paragraph',
                            nodes: [
                              Text.create("Some text handWrite.")
                            ]
                          })
                        ]
                      }),
                      Block.create({
                        type: "caution",
                        nodes: [
                          Block.create({
                            type: 'paragraph',
                            nodes: [
                              Text.create("3．非选择题部分请按题号用0.5毫米黑色墨水签字笔书写，否则作答无效。要求字体工整、笔迹清晰。作图时，必须用2B铅笔，并描浓。.")
                            ]
                          })
                        ]
                      })
                    ]
                  })

                ]
              })
            ]
          })
        ]
      })
    })

    return slateValue

  }

  /**
   * 设置纸张类型
   */
  setPageType(pageType){
    //获取所有的page,设置纸张大小




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