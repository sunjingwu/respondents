/**
 *
 * 文档控制器
 * 处理SlateJS 的document 工具
 *
 * 读取类的：返回对应的object
 * 更新类的：返回新的value
 * @class
 * @public
 */
import {ASConfig} from "../desc/asConfig";
import {Document, Text, Block, Value} from 'slate'
import {PageType} from "../desc/sheetDesc/sheetEnum";
import {SHEET_HEADER} from "../desc/docDesc/blockType";


export class DocCtrl {


  /**
   * 页面内容向前移动后，删除多余的一页；
   * TODO A3纸张，需要考虑页面补全的场景
   * @param value
   */
  static delEndPage(value){

    let document = value.get('document');

    let endPage = document.get('nodes').get(-1)

    let pageKey = endPage.get('key')

    let change = value.change().removeNodeByKey(pageKey)

    return change.value;
  }

  /**
   * 根据页面获取pageContent
   * @param pageIndex
   * @param value
   */
  static getPageContentByIndex(pageIndex,value){
    let document = value.get('document')
    let pageList = document.get("nodes")

    var page = pageList.find((p)=>{
      return p.get('data').get('pageIndex') === pageIndex
    })

    var pageNodes = page.get('nodes')

    return pageNodes.find((pn)=>{
      return pn.get('type') == 'pageContent'
    })
  }


  /**
   * 获取页面上可以移动的第一个block
   * @param pageIndex
   * @param value
   * @returns {undefined}
   */
  static getFirstFlexibleBlock(pageIndex,value){
    let nextPageContent = DocCtrl.getPageContentByIndex(pageIndex,value)

    let contentBlockList = nextPageContent.get("nodes")
    return contentBlockList.find(block=>{
      return block.get("type") !== SHEET_HEADER
    })
  }

  /**
   * 获取页面数
   */
  static getPageCount(value) {
    let document = value.get('document')
    let nodeList = document.get("nodes")
    let pageList = nodeList.filter((block)=>{
      return block.get('type') == 'page'
    })

    return pageList.size;
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
  setPageType(value,pageType){
    //获取所有的page,设置纸张大小


  }


  /**
   * 生成新的页面:创建新的页面，指的是新的一栏
   * TODO 多页、自动补全
   * @param pageType
   */
  static createPage(value){

    let lastPage = value.get('document').get('nodes').get(-1)
    let pageData = lastPage.get('data');

    // 多页的场景需要生成：sheetHeader

    let page = Block.create({
      type: "page",
      data: {
        pageIndex: pageData.get('pageIndex') + 1,
        pageType: pageData.get('pageType'),
        pageWidth: pageData.get('pageWidth'),
        pageHeight: pageData.get('pageHeight'),
      },
      nodes: [
        Block.create({
          type: "pageContent",
          data: {
            pageMargin: ASConfig.defaultPageMargin
          },
          nodes: [
            //多页的话需要
            /*Block.create({
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
            })*/
          ]
        })
      ]
    })


    let insertIndex = value.get('document').get('nodes').size;

    let insertKey = value.get('document').get('key')

    let change = value.change().insertNodeByKey(insertKey,insertIndex,page)

    return change.value;
  }


  /**
   * 补齐页面，用于A3两栏或三栏场景
   *
   * @param document
   * @param pageType
   */
  static completePages(value, pageType) {
    let needAddPageCount//需要添加的页面数量
    let pageCount = DocCtrl.getPageCount(value.get("document"));
    switch (pageType.name) {
      case PageType.A3_2.name:
        needAddPageCount = pageCount % PageType.A3_2.colCount;

      case PageType.A3_3.name:
        needAddPageCount = pageCount % PageType.A3_3.colCount;

      default:
        needAddPageCount = 0;
    }

    //生成页面到document中
    for (let i = 0; i < needAddPageCount; i++) {
      let newPage = DocCtrl.createPage(pageType, pageCount);

    }


    return value;
  }


  /**
   * 根据页面索引，获取对应的page
   * @param pageIndex 页面索引
   * @public
   */
  static getPage(pageIndex){

  }



  //处理页面，跨页处理：
  static correctPage(value){


    //返回新的value
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

}