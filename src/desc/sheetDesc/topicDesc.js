
export class TopicDesc {

  constructor(id, no, optionCount, content, height, smallTopicType, noList){

    this.id = id;
    /**
     * 题号
     */
    this.no = no;
    if (noList) {
      this.noList = noList;
    } else {
      this.noList = [];
      this.noList.push(no);
    }


    /**
     * 高度
     */
    this.height = height;

    this.smallTopicType = smallTopicType;



    /**
     * 选项个数
     */
    this.optionCount = optionCount;

    // 英语作文横线数
    this.lineCount = 10;
    // 语文作文行数
    this.gridCount = 600;

    /**
     * 内容
     */
    this.content = content;


    this.questionContent = "";//题干内容，区别于渲染答题卡用的content

  }




}