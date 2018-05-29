import {Section} from "./section";

export class PageSheet {

  constructor(pageIndex){

    //页面序号，从0开始
    this.pageIndex = pageIndex;

    //二维码位置
    //对于手阅卡指的是答题卡标识二维码位置，对于网阅卡暂时标识答题卡头部广告二维码位置
    this.qrCode = undefined

    //定位点列表，从左上角顺时针排序
    this.locatePoint = []

    //切图块，对应大题题型
    this.sections = [new Section()]


    //准考证
    this.ticketNum = undefined
    //条形码
    this.barCode = undefined


    //缺考标记位置
    // 兼容处理
    this.testmark = undefined
    this.absent = undefined

    //考生类型位置

    //AB卡标记位置

    //AB卷标记位置

  }
}