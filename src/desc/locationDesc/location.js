import {PageSheet} from "./pageSheet";

export class Location {

  constructor(paperName,paperType){

    this.paperName = paperName//答题卡名称
    this.paperType = paperType//答题卡纸张类型


    this.subjectName = undefined//学科名称
    this.subjectCode = undefined//学科代码

    this.grade = undefined//年级

    this.pageSheets = [new PageSheet()]

  }
}