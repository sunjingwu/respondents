export class TopicTypeDesc {
  constructor(title,category,beginNo,endNo,count,topicDescs){
    this.title = title;
    //起始题号
    this.beginNo = beginNo;
    //结束题号
    this.endNo = endNo;
    //题目数量
    this.count = count;
    //题目类型
    this.category = category;
    //具体包含的小题列表
    this.topicDescs = topicDescs || [];

    //列数 填空题每行列数
    this.colCount = 0;

  }
}