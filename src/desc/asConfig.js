/**
 * 答题卡配置类
 */
import {PageType} from "./sheetDesc/sheetEnum";

export const ASConfig = {
  enable05: true,//打分条是否显示0.5功能
  defaultFontSize: '14px',//默认字号
  defaultLineHeight: 0.5,//默认行高
  defaultStudyNoCount: 8,//默认准考证位数

  defaultPageType: PageType.A3_2, //默认纸张
  defaultPageMargin: [20,15,20,15],//默认页边距 mm

  gap: '8px',//题目之间的间隙高度
  paddingSize: '10px', //题目边框内边距


  gridWidth: 7.5,//语文作文格子宽
  gridHeight: 8,//语文作文格子高

  objectRowCount: 5//客观题小块中布局的行数
}