import React from 'react'


/**
 * 打分条：共22个格子
 * 如果分值小于20.5则不分十位和个位，否则分两段
 * 支持0.5分可配置
 *
 * @param score
 * @returns {*}
 * @constructor
 */
const ScoreBar = ({ score }) => {

  const SECTION_POINT = 19.9
  const MAX_SCORE = 99.9
  const TAIL_COUNT = 2;//尾部
  const DEC_COUNT = 9//十位个数
  const MAIN_COUNT = 19;
  const GRID_COUNT = MAIN_COUNT+TAIL_COUNT

  const scoreBarStyle = {
    borderBottom: '1px solid #000',
    display: 'flex',
    height: '18px',
    fontSize: '12px',
    lineHeight: '18px',
    flexDirection: 'row'
  }

  const gridStyle = {
    display: 'inline-block',
    textAlign: 'center',
    borderRight: '1px solid #000',
    flex: 1
  }

  const lastGridStyle = {
    display: 'inline-block',
    textAlign: 'center',
    flex: 1
  }


  this.rendGrid = (score)=>{
    //var ceilDigit = Math.ceil(score);//向上取整
    var floorDigit = Math.floor(score);//向下取整
    var digit = (score - floorDigit).toFixed(3);//小数部分
    var formatDigit = digit.toString().substr(1,2);

    let list = []

    //20.5及以内的部分段
    if (score <= SECTION_POINT) {
      for (let i = 0; i < MAIN_COUNT ; i++) {
        if (i < MAIN_COUNT - floorDigit) {
          //空白区域
          list.push(<span key={i} className={'grid'} style={gridStyle}>-</span>)
        } else {
          list.push(<span key={i} className={'grid'} style={gridStyle}>{floorDigit--}</span>)
        }
      }
    } else {
      //分段的场景
      let dec = Math.floor(score / 10); //整数位最大值

      //十位数部分
      for (let i = 0; i < DEC_COUNT ; i++) {
        if (i < DEC_COUNT - dec) {
          //空白区域
          list.push(<span key={i} className={'grid'} style={gridStyle}>-</span>)
        } else {
          list.push(<span key={i} className={'grid'} style={gridStyle}>{dec--}</span>)
        }
      }

      list.push(<span key={DEC_COUNT} className={'grid'} style={gridStyle}>-</span>)

      //个位数部分
      for (let i = DEC_COUNT; i > 0; i--) {
        list.push(<span key={GRID_COUNT-i} className={'grid'} style={gridStyle}>{i}</span>)
      }
    }

    list.push(<span key={20} className={'grid'} style={gridStyle}>0</span>)
    list.push(<span key={21} className={'grid'} style={lastGridStyle}>{digit==0?'-':formatDigit}</span>)

    return list
  }


  return (
    <div style={scoreBarStyle} score={score}>
      {score > MAX_SCORE? "分数超出上限！" : this.rendGrid(score)}
    </div>
  )
}

export default ScoreBar