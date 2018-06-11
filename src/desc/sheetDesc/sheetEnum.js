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
  SINGLE_CHOICE: 'SingleChoice',

  /**
   * 多选题
   */
  MULTI_CHOICE: 'MultiChoice',

  /**
   * 客观题
   */
  OBJECT: 'Object',

  /**
   * 判断题
   */
  JUDGE: 'Judge',

  /**
   * 填空题
   */
  FILL: 'FillBlank',

  /**
   * 解答题
   */
  SUBJECTIVE: 'AnswerQuestion',

  /**
   * 作文题
   */
  COMPOSITION: 'Composition',

  /**
   * 英语作文题
   */
  ENGLISH_COMPOSITION: 'EnglishComposition'

};



/**
 * 纸张类型
 *
 *
 * */
export const PageType = {
  A4: {
    width: 210,
    height: 297,
    name: "A4",
    colCount: 1,
    scanName: "A4"
  },
  A3_2: {
    width: 420,
    height: 297,
    name: "A3_2",
    colCount: 2,
    scanName: "A3"
  },
  A3_3: {
    width: 420,
    height: 297,
    name: "A3_3",
    colCount: 3,
    scanName: "A3"
  },
};