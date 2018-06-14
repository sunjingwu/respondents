import React, {Component} from 'react'
import Grid from "./grid";


/**
 * 语文作文格子区域
 * @param score
 * @returns {*}
 * @constructor
 */
class GridRow extends Component {

  render(){
    let isFirstRow = this.props.firstRow
    let isLastRow = this.props.lastRow

    const gridRowStyle = {
      borderTop: isFirstRow?'none':'1px solid #000',
      borderBottom: isLastRow?'none':'1px solid #000'
    }

    return (
      <div className={'gridRow'}>
        <div style={gridRowStyle}>
          <Grid index={1}></Grid>
          <Grid index={1}></Grid>
          <Grid index={1}></Grid>
          <Grid index={1}></Grid>
          <Grid index={1}></Grid>
          <Grid index={1}></Grid>
          <Grid index={111}></Grid>
        </div>
        {isLastRow?null:<div style={{height:'6px'}} className={'gap'}></div>}
      </div>
    )
  }

}

export default GridRow