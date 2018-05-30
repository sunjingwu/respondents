export const SheetMode = {
  //网阅
  ONLINEMARING:'onLineMarking',
  //手阅
  HANDSCORING:'handScoring'
}


export const StudentInfo = {

  //条码
  BARCODE:'barCode',

  //二维码
  QRCODE: 'qrCode',

  //准考号
  STUDYNO: 'studyNo',

  //学籍号
  STUDENTNO: 'studentNo'
}

/**
 * 题型
 *
 * */
export const Category = {
  /**
   * 单选题
   */
  singleChoice: 'SingleChoice',

  /**
   * 多选题
   */
  multiChoice: 'MultiChoice',

  /**
   * 客观题
   */
  object: 'Object',

  /**
   * 判断题
   */
  judge: 'Judge',

  /**
   * 填空题
   */
  fill: 'FillBlank',

  /**
   * 解答题
   */
  subjective: 'AnswerQuestion',

  /**
   * 作文题
   */
  composition: 'Composition',
  /**
   * 英语作文题
   */
  englishComposition: 'EnglishComposition'

};



/**
 * 纸张类型
 *
 *
 * */
export const PageType = {
  A4: {
    name: "A4",
    colCount: 1,
    scanName: "A4"
  },
  A3_2: {
    name: "A3_2",
    colCount: 2,
    scanName: "A3"
  },
  A3_3: {
    name: "A3_3",
    colCount: 3,
    scanName: "A3"
  },
};