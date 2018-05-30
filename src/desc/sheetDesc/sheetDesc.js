import {ASUtil} from "../../utils/ASUtil";
import {StudentInfo} from "./sheetEnum";
import {ASConfig} from "../asConfig";

export class SheetDesc {


  constructor(sheetName,topicTypeDescs){

    /**
     * 答题卡名称，与paper名称一致
     */
    this.sheetId = ASUtil.guid()

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


    /**
     * 纸张类型
     * @type {{}}
     */
    this.pageType = ASConfig.defaultPageType;


    /**
     * 考生信息类型
     * @type {string}
     */
    this.studentInfo = StudentInfo.BARCODE;

    /**
     * 考生信息位数
     * @type {number}
     */
    this.studentNoCount = ASConfig.defaultStudyNoCount;


    /**
     * 页眉
     * @type {string}
     */
    this.pageHeader = "";

    /**
     * 密封线内容
     * @type {string}
     */
    this.sealingLine = "";

  }
}