/**
 * 答题卡配置类
 */
import {PageType} from "./sheetDesc/sheetEnum";

export const ASConfig = {
  enable05: true,//打分条是否显示0.5功能
  defaultFontSize: '14px',//默认字号
  defaultLineHeight: 0.5,//默认行高
  defaultPageType: PageType.A3_2, //默认纸张
  defaultStudyNoCount: 8,//默认准考证位数


  gap: '8px',//题目之间的间隙高度
  paddingSize: '10px' //题目边框内边距


}