import React, {Component} from 'react'
import GridRow from "./gridRow";
import Grid from "./grid";


/**
 * 语文作文格子区域
 * @param score
 * @returns {*}
 * @constructor
 */
class GridArea extends Component {



  layoutGrid(){

    //let conWidth = this.myRef.width;
    return(
      <div>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={111}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={111}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={11}></Grid>
        <Grid index={200}></Grid>
        <Grid index={1}></Grid>
        <Grid index={111}></Grid>
        <Grid index={100}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={111}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={111}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={111}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={111}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={111}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={111}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={1}></Grid>
        <Grid index={111}></Grid>
      </div>
    )
  }

  render(){
    const gridAreaStyle = {
      /*border: '1px solid #000',*/
      textAlign: 'center',
      margin: '0 6px 6px'
    }


    return (
      <div contentEditable={false} style={gridAreaStyle} className={'gridArea'}>

        {this.layoutGrid()}


        {/*<GridRow firstRow={true}/>
      <GridRow/>
      <GridRow/>
      <GridRow/>
      <GridRow lastRow={true}/>*/}
      </div>
    )
  }
}

export default GridArea