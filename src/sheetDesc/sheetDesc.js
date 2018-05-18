export class SheetDesc {


  constructor(sheetName,studentInfo,topicTypeDescs){

    this.sheetName = sheetName;

    //题型列表
    this.topicTypeDescs = topicTypeDescs || [];

    /**
     * 是否启动禁止作答区 默认启用
     */
    this.isDisplayProArea = true;

    /**
     * 是否显示页脚 默认不显示
     */
    this.isDisplayPageNum = false;

    /**
     *是否显示AB卡，默认不显示。
     */
    this.isDisplayABPaper = false;

    /**
     * 是否显示AB卷，默认不显示
     * @type {boolean}
     */
    this.isDisplayABTestPaper = false;


    /**
     * 手写区内容
     * @type {string}
     */
    this.handWrite = "";

    /**
     * 注意事项内容
     * @type {string}
     */
    this.caution = "";


    this.pageType = {};
  }
}